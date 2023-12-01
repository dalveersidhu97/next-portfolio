import { MY_DATA } from "@/db/data";
import { ProjectDetails } from "@/page-components/project-details";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { projectSlug: string } }): Promise<Metadata> {

    const project = MY_DATA.experience.projects.list.find(p => p.slug === params.projectSlug);

    if (project)
        return {
            title: 'Project | '+project.project_name,
            description: project.desc
        }

    return {}
}

export default function ProjectModal() {
    return (
        <ProjectDetails />
    );
}