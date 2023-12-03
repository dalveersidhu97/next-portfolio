"use client";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Link from "next/link";
import { Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import { IoMdSettings } from "react-icons/io";
import { FaPerson } from "react-icons/fa6";
import { GiStack } from "react-icons/gi";
import { MdPermContactCalendar } from "react-icons/md";
import { LightModes } from "./light-modes";
import { BackDrop } from "@/compnents/backdrop";


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


const MainNav = () => {
    const pathname = usePathname();

    return (
        <div className={`p-4 gap-4 text-lg text-primary hidden lg:flex dark:bg-primaryLight2 dark:text-foregroundDark w-full bg-foregroundLight`}>
            {navLinks.map((navLink, i) => <Fragment key={`navLink-${i}`}>
                <Link href={navLink.path} className={`${pathname === navLink.path ? `bg-primaryLight` : 'hover:bg-primaryLight'} box-shadow-glow py-1 px-3 rounded-md flex gap-2 items-center`}>
                    <navLink.Icon className="w-6 h-6" />
                    {navLink.label}
                </Link>
            </Fragment>)}
            <LightModes />
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
            {visible && <BackDrop />}
            <div
                ref={ref}
                className={`bg-white dark:bg-primaryLight2 dark:text-foregroundDark text-primary ${visible ? 'translate-x-0 shadow-[0px_-50px_500px_rgba(0,0,0,.25)]' : 'translate-x-full shadow-[0px_0px_0px_rgba(0,0,0,0)]'} z-[1000] flex items-start lg:hidden absolute top-0 right-0 transition-all duration-500 w-fit min-w-max max-w-[90%] h-full overflow-auto`}
            >
                <div className="flex flex-col gap-4 p-6 overflow-auto m-auto">
                    {navLinks.map((navLink, i) => <Fragment key={`navLinkMobile-${i}`}>
                        <Link href={navLink.path} className={`${pathname === navLink.path ? `bg-primaryLight` : 'hover:bg-primaryLight'} p-1 box-shadow-glow py-2 px-4 rounded-md flex gap-2 items-center`}>
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