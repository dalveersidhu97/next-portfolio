import { useState } from "react";
import { SideBarMobile } from "./side-bar";
import { MainNavMobile } from "./main-nav";
import Image from "next/image";
import { MY_DATA } from "@/db/data";
import { FiMenu } from 'react-icons/fi';

const TopBar = () => {
    const visibilityStateSideBar = useState(false);
    const [_, setSideBarVisible] = visibilityStateSideBar;
    const visibilityStateSideNav = useState(false);
    const [__, setSideNavVisible] = visibilityStateSideNav;

    return (
        <>
            <SideBarMobile visibilityState={visibilityStateSideBar}></SideBarMobile>
            <MainNavMobile visibilityState={visibilityStateSideNav}></MainNavMobile>
            <div className="flex justify-between shadow-md lg:hidden bg-primary">
                <div onClick={()=>setSideBarVisible(true)} className='text-grayLight text-center flex items-center gap-2 cursor-pointer p-3'>
                    <div className='w-10 h-10 m-auto rounded-full overflow-hidden relative shadow-md'>
                        <Image fill alt="Dalveer Singh" src={MY_DATA.avatar}></Image>
                    </div>
                    <h1 className='text-lg font-semibold'>Dalveer Singh</h1>
                </div>
                <div onClick={()=>setSideNavVisible(true)} className="text-grayLight p-2 flex items-center cursor-pointer">
                    <FiMenu className="w-8 h-8"/>
                </div>
            </div>
        </>
    );
}

export default TopBar;