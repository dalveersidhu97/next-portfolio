import { ANIMATION_DURATION_SHORT } from "@/constants/ui-constants";
import { useColorScheme } from "@/hooks/useColorSchema";
import { useRef, useState } from "react";
import { MdDarkMode, MdHdrAuto, MdLightMode } from "react-icons/md";
import { Transition } from "react-transition-group";
import { useOnClickOutside } from "usehooks-ts";

export const LightModes = () => {

    const { colorScheme, setColorScheme, isDark } = useColorScheme();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(dropdownRef, () => {
        setDropdownVisible(false);
    })

    const setTheme = (theme: string) => {
        setColorScheme(theme as any);
        setTimeout(() => setDropdownVisible(false), 250);
    }

    return (
        <div className="flex items-center gap-2 ml-auto relative">
            <button onClick={(e) => setDropdownVisible(prev => !prev)} className="hover:bg-primaryLight rounded-xl text-grayDark dark:hover:text-grayDark dark:text-white p-2 box-shadow-glow flex items-center gap-2">
                {isDark && <MdDarkMode className="w-6 h-6" />}
                {!isDark && <MdLightMode className="w-6 h-6 text-[#eeaa00]" />}
                {/* <span className="capitalize">{colorScheme}</span> */}
            </button>

            {<Transition nodeRef={dropdownRef} in={dropdownVisible} unmountOnExit timeout={100}>
                {(state) => <div className="absolute top-full right-0 pt-2 pr-1">
                    <div
                        ref={dropdownRef}
                        style={{ transitionDuration: `${ANIMATION_DURATION_SHORT}ms` }}
                        className={`
                            transition-all ease-in p-2 shadow-md border dark:border-transparent border-grayNeutral z-50 b-white dark:bg-primaryLight text-grayDark bg-white rounded-md dark:text-white flex flex-col gap-1
                            ${state === 'entering' && `translate-y-0 scale-100 opacity-100`}
                            ${state === 'entered' && `translate-y-0 scale-100 opacity-100`}
                            ${state === 'exiting' && `-translate-y-2 scale-95 opacity-0`}
                            ${state === 'exited' && `-translate-y-2 scale-95 opacity-0`}
                        `}
                    >
                        <div role="button" onClick={() => setTheme('dark')} className={`${colorScheme === 'dark' ? 'bg-primaryLight2 dark:text-grayDark' : 'dark:hover:text-grayDark hover:bg-primaryLight'} py-1 px-3 rounded-md flex items-center gap-2`}>
                            <MdDarkMode className="w-6 h-6" />
                            Dark
                        </div>
                        <div role="button" onClick={() => setTheme('light')} className={`${colorScheme === 'light' ? 'bg-primaryLight2 dark:text-grayDark' : 'dark:hover:text-grayDark hover:bg-primaryLight'} py-1 px-3 rounded-md flex items-center gap-2`}>
                            <MdLightMode className="w-6 h-6 text-[#eeaa00]" />
                            Light
                        </div>
                        <div role="button" onClick={() => setTheme('auto')} className={`${colorScheme === 'auto' ? 'bg-primaryLight2 dark:text-grayDark' : 'dark:hover:text-grayDark hover:bg-primaryLight'} py-1 px-3 rounded-md flex items-center gap-2`}>
                            <MdHdrAuto className="w-6 h-6 text-primary dark:text-foregroundDark" />
                            System
                        </div>
                    </div>
                </div>}
            </Transition>}
        </div>
    )
}