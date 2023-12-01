"use client";
import { ImagesFrame } from "@/app/experience/images-frame";
import { MY_DATA } from "@/db/data";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";

export const ProjectDetails = ({withBackButton}: { withBackButton?: boolean }) => {
    const params = useParams();
    const router = useRouter();
    const project = MY_DATA.experience.projects.list.find(p => p.slug === params.projectSlug);
    if (!project) return <div>Not found</div>
    return <>
        <div className="page bg-foregroundLight rounded-lg">
            <div className="flex gap-2 justify-between items-start">
                <h2 className="text-xl lg:text-2xl font-semibold">{project.project_name}</h2>
                {withBackButton && <button className="ml-auto focus:text-primary dark:focus:text-[inherit] box-shadow-glow p-1 rounded-lg overflow-hidden" onClick={()=>router.back()}>
                    <IoMdClose className="w-6 h-6 lg:w-7 lg:h-7"/>
                </button>}
            </div>
            <div className="flex flex-col gap-2">
                <ImagesFrame images={project.images}></ImagesFrame>
            </div>
            <div className="flex justify-center gap-2">
                {project.links.map((link, i)=><Fragment key={`link-${i}`}>
                    <Link href={link.url} target="_blank" className="bg-primary text-white px-4 py-1 rounded-full">{link.label}</Link>
                </Fragment>)}
            </div>
            <div className="flex gap-2 flex-wrap text-sm">
                {project.tags.map((tag, j) => <span key={`tag-${j}`} className="px-2 py-0.5 bg-grayLight rounded-full">{tag}</span>)}
            </div>
            <p>{project.desc}</p>

        </div>
    </>
}