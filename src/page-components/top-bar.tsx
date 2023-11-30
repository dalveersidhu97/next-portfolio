import { useState } from "react";
import { SideBarMobile } from "./side-bar";
import { MainNavMobile } from "./main-nav";
import Image from "next/image";
import { MY_DATA } from "@/db/data";
import { FiMenu } from 'react-icons/fi';
import { MdDarkMode, MdHdrAuto, MdLightMode } from "react-icons/md";
import { useColorScheme } from "@/hooks/useColorSchema";

const TopBar = () => {
    const visibilityStateSideBar = useState(false);
    const [_, setSideBarVisible] = visibilityStateSideBar;
    const visibilityStateSideNav = useState(false);
    const [__, setSideNavVisible] = visibilityStateSideNav;
    const { colorScheme, setColorScheme, isDark } = useColorScheme();

    return (
        <>
            <SideBarMobile visibilityState={visibilityStateSideBar}></SideBarMobile>
            <MainNavMobile visibilityState={visibilityStateSideNav}></MainNavMobile>
            <div className="flex justify-between shadow-md lg:hidden bg-primary dark:bg-primaryLight2 text-foregroundLight dark:text-foregroundDark">
                <div onClick={() => setSideBarVisible(true)} className='text-center flex items-center gap-2 cursor-pointer p-3'>
                    <div className='w-10 h-10 m-auto rounded-full overflow-hidden relative shadow-md'>
                        <Image fill alt="Dalveer Singh" sizes="20vw" src={MY_DATA.avatar}></Image>
                    </div>
                    <h1 className='text-lg font-semibold'>Dalveer Singh</h1>
                </div>
                <div className="flex items-center ml-auto">
                    {colorScheme==='dark' && <div role="button" aria-label="Dark Mode" onClick={() => setColorScheme('auto')} className={`dark:hover:text-grayDark hover:bg-primaryLight p-2 rounded-md flex items-center gap-2`}>
                        <MdDarkMode className="w-6 h-6" />
                    </div>}
                    {colorScheme==='light' && <div role="button" aria-label="Light Mode" onClick={() => setColorScheme('dark')} className={`dark:hover:text-grayDark hover:bg-primaryLight p-2 rounded-md flex items-center gap-2`}>
                        <MdLightMode className="w-6 h-6 text-[#eeaa00]" />
                    </div>}
                    {(colorScheme==='auto' || !colorScheme) && <div role="button" aria-label="Auto" onClick={() => setColorScheme('light')} className={`dark:hover:text-grayDark text-foregroundLight dark:text-foregroundDark hover:text-primary hover:bg-primaryLight p-2 rounded-md flex items-center gap-2`}>
                        <MdHdrAuto className="w-6 h-6" />
                    </div>}
                </div>
                <div onClick={() => setSideNavVisible(true)} className=" p-2 flex items-center cursor-pointer">
                    <FiMenu className="w-8 h-8" />
                </div>
            </div>
        </>
    );
}

export default TopBar;