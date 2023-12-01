import { ANIMATION_DURATION_LONG } from "@/constants/ui-constants";

export const BackDrop = () => {
    return (
        <div
            style={{ animation: `opacityIn ${ANIMATION_DURATION_LONG}ms forwards` }}
            className={`absolute top-0 left-0 bg-[#000a] dark:bg-[#000] w-full h-full z-[500]`}
        ></div>
    );
}