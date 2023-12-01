import { MY_DATA } from "@/db/data";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Image from "next/image";
import Link from "next/link";
import { useRef, SetStateAction, Dispatch } from "react";
import { IoMdCloudDownload, IoMdMail } from 'react-icons/io';
import { FaLocationDot, FaSquarePhone } from 'react-icons/fa6'
import { BackDrop } from "@/compnents/backdrop";

const SideBar = () => {
    return (
        <div className='flex flex-col h-full bg-primaryLight dark:bg-primaryLight2'>
            <div className='p-4 text-center flex flex-col gap-2'>
                <div className='w-36 aspect-square m-auto rounded-full relative overflow-hidden shadow-md border-2 border-foregroundLight dark:border-primaryLight'>
                    <Image fill alt="Dalveer Singh" sizes="50vw" src={MY_DATA.avatar}></Image>
                </div>
                <h1 className='text-2xl font-semibold'>Dalveer Singh</h1>
            </div>
            <div className='px-4 pb-4 flex flex-col gap-4 flex-grow'>
                <div className='bg-primaryLight2 dark:bg-primaryLight px-2 py-1 rounded-md text-center'>
                    {MY_DATA.role}
                </div>
                <a href={`${MY_DATA.resume_link}`} target="_blank" className='px-2 py-1 rounded-md text-center flex justify-center items-center gap-2 box-shadow-glow bg-primaryLight2 dark:bg-primaryLight text-primary dark:text-foregroundDark'>
                    <IoMdCloudDownload className="w-5 h-5"/>
                    Download Resume
                </a>
                {/* Contact */}
                <div className='text-primary dark:text-foregroundDark flex flex-col gap-2 bg-primaryLight2 dark:bg-primaryLight p-2 rounded-md'>
                    <div className="flex items-center gap-2 hover:opacity-75">
                        <IoMdMail className="w-5 h-5"/>
                        <a href = {`mailto: ${MY_DATA.contact.email}`}>{MY_DATA.contact.email}</a>
                    </div>
                    <div className="flex items-center gap-2 hover:opacity-75">
                        <FaSquarePhone  className="w-5 h-5"/>
                        <a href={`tel:${MY_DATA.contact.phone}`}>{MY_DATA.contact.phone}</a>
                    </div>
                    <div className="flex items-center gap-2 hover:opacity-75">
                        <FaLocationDot className="w-5 h-5"/>
                        <address>{MY_DATA.contact.address}</address>
                    </div>
                </div>
                {/* Social */}
                <div className='flex justify-evenly flex-wrap gap-4 mt-auto'>
                    {MY_DATA.social.map(({ Icon, label, url }, i) => <Link
                        href={url}
                        target="_blank"
                        key={`social-${i}`}
                        className='flex flex-col items-center text-primary dark:text-foregroundDark rounded-md p-2 box-shadow-glow'
                    >
                        {<Icon className="w-8 h-8" />}
                        {label}
                    </Link>)}
                </div>
            </div>
        </div>
    );
}

export const SideBarMobile = ({ visibilityState }: { visibilityState: [boolean, Dispatch<SetStateAction<boolean>>] }) => {
    const [visible, setVisible] = visibilityState;
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => {
        setVisible(false);
    });
    return (
        <>
            {/* backdrop */}
            {visible && <BackDrop />}
            <div ref={ref} className={`bg-primaryLight ${visible ? 'translate-x-0 shadow-[0px_50px_500px_rgba(0,0,0,.25)]' : '-translate-x-full shadow-[0px_0px_0px_rgba(0,0,0,0)]'} z-[1000] block lg:hidden absolute top-0 left-0 transition-all duration-500 w-fit min-w-max max-w-[90%] h-full overflow-auto`}>
                <SideBar></SideBar>
            </div>
        </>
    );
}

export const SideBarPC = () => {
    return (
        <div className='lg:block hidden min-w-max max-w-fit h-full rounded-xl overflow-auto shadow-card'>
            <SideBar></SideBar>
        </div>
    );
}