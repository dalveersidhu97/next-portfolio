import { ANIMATION_DURATION_SHORT } from "@/constants/ui-constants";

const Loading = () => {
    return (
        <div className="z-[1000] gap-4 absolute top-0 left-0 w-full h-full overflow-auto flex items-center justify-center p-4 text-lg">
            <div
                style={{ animation: `slideIn ease-in ${ANIMATION_DURATION_SHORT}ms forwards` }}
                className="rounded-md px-4 py-2 bg-foregroundLight">
                Loading
            </div>
        </div>
    );
}

export default Loading;