import { ANIMATION_DURATION_LONG } from "@/constants/ui-constants";
import { ProjectDetails } from "@/page-components/project-details";

export default function ProjectModal() {

    return (
        <div
            className="z-[1000] m-auto gap-4 absolute top-0 left-0 w-full h-full overflow-auto p-4 text-lg"
        >
            <div 
                style={{ animation: `slideIn ease-in ${ANIMATION_DURATION_LONG}ms forwards` }} 
                className="flex flex-col gap-4 justify-center min-h-full">
                <ProjectDetails withBackButton />
            </div>
        </div>
    );
}