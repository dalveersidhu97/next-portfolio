"use client";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Link from "next/link";
import { CSSProperties, Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import { IoMdSettings } from "react-icons/io";
import { FaPerson } from "react-icons/fa6";
import { GiStack } from "react-icons/gi";
import { MdDarkMode, MdHdrAuto, MdLightMode, MdPermContactCalendar } from "react-icons/md";
import { useColorScheme } from "@/hooks/useColorSchema";
import { Transition } from 'react-transition-group';
import { ANIMATION_DURATION_SHORT } from "@/constants/ui-constants";


const navLinks = [
    {
        label: 'About',
        path: '/',
        Icon: MdPermContactCalendar
    },
    {
        label: 'Skills',
        path: '/skills',
        Icon: IoMdSettings
    },
    {
        label: 'Experience',
        path: '/experience',
        Icon: GiStack
    },
    {
        label: 'Qualification',
        path: '/qualification',
        Icon: FaPerson
    }
]

const LightMode = () => {

    const { colorScheme, setColorScheme, isDark } = useColorScheme();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(dropdownRef, () => {
        setDropdownVisible(false);
    })

    const setTheme = (theme: string) => {
        setColorScheme(theme as any);
        setTimeout(()=>setDropdownVisible(false), 250);
    }

    return (
        <div className="flex items-center gap-2 ml-auto relative">
            <button onClick={(e) => setDropdownVisible(prev => !prev)} className="hover:bg-primaryLight rounded-xl text-grayDark dark:hover:text-grayDark dark:text-white p-2 box-shadow-glow flex items-center gap-2">
                {isDark && <MdDarkMode className="w-6 h-6" />}
                {!isDark && <MdLightMode className="w-6 h-6 text-[#eeaa00]" />}
                {/* <span className="capitalize">{colorScheme}</span> */}
            </button>

            {<Transition nodeRef={dropdownRef} in={dropdownVisible} unmountOnExit timeout={100}>
                {(state)=><div className="absolute top-full right-0 pt-2 pr-1">
                    <div
                        ref={dropdownRef} 
                        style={{ transitionDuration: `${ANIMATION_DURATION_SHORT}ms` }}
                        className={`
                            transition-all ease-in p-2 shadow-md border dark:border-transparent border-grayNeutral z-50 b-white dark:bg-primaryLight text-grayDark bg-white rounded-md dark:text-white flex flex-col gap-1
                            ${state==='entering' && `translate-y-0 scale-100 opacity-100`}
                            ${state==='entered' && `translate-y-0 scale-100 opacity-100`}
                            ${state==='exiting' && `-translate-y-2 scale-95 opacity-0`}
                            ${state==='exited' && `-translate-y-2 scale-95 opacity-0`}
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

const MainNav = () => {
    const pathname = usePathname();

    return (
        <div className={`p-4 gap-4 text-lg text-primary hidden lg:flex dark:bg-primaryLight2 dark:text-foregroundDark`}>
            {navLinks.map((navLink, i) => <Fragment key={`navLink-${i}`}>
                <Link href={navLink.path} className={`${pathname === navLink.path ? `bg-primaryLight` : 'hover:bg-primaryLight'} transition-all shadow-zero focus:shadow-glow py-1 px-3 rounded-md flex gap-2 items-center`}>
                    <navLink.Icon className="w-6 h-6" />
                    {navLink.label}
                </Link>
            </Fragment>)}
            <LightMode />
        </div>
    );
}

export const MainNavMobile = ({ visibilityState }: { visibilityState: [boolean, Dispatch<SetStateAction<boolean>>] }) => {
    const [visible, setVisible] = visibilityState;
    const pathname = usePathname();

    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => {
        setVisible(false);
    });
    useEffect(() => {
        setVisible(false);
    }, [pathname, setVisible]);

    return (
        <>
            {/* backdrop */}
            {visible && <div className={`lg:hidden absolute top-0 left-0 w-full h-full bg-[#00000055] z-[500]`}></div>}
            <div
                ref={ref}
                className={`bg-white dark:bg-primaryLight2 dark:text-foregroundDark text-primary ${visible ? 'translate-x-0 shadow-[0px_-50px_500px_rgba(0,0,0,.25)]' : 'translate-x-full shadow-[0px_0px_0px_rgba(0,0,0,0)]'} z-[1000] flex items-start lg:hidden absolute top-0 right-0 transition-all duration-500 w-fit min-w-max max-w-[90%] h-full overflow-auto`}
            >
                <div className="flex flex-col gap-4 p-6 overflow-auto m-auto">
                    {navLinks.map((navLink, i) => <Fragment key={`navLinkMobile-${i}`}>
                        <Link href={navLink.path} className={`${pathname === navLink.path ? `bg-primaryLight` : 'hover:bg-primaryLight'} p-1 transition-all duration-200 shadow-zero focus:shadow-glow py-2 px-4 rounded-md flex gap-2 items-center`}>
                            <navLink.Icon className="w-6 h-6" />
                            {navLink.label}
                        </Link>
                    </Fragment>)}
                </div>
            </div>
        </>
    );
}

export default MainNav;