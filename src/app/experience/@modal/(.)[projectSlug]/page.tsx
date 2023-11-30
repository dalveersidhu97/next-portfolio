import { ProjectDetails } from "@/page-components/project-details";
export default function ProjectModal() {

    return (
        <div>
            <div className='absolute top-0 left-0 bg-[#000a] dark:bg-[#000] w-full h-full z-[500]'></div>
            <div className="z-[1000] m-auto gap-4 absolute top-0 left-0 w-full h-full overflow-auto p-4 text-lg">
                <div className="flex flex-col gap-4 justify-center min-h-full">
                    <ProjectDetails withBackButton />
                </div>
            </div>
        </div>
    );
}