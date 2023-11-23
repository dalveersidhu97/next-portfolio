import { MY_DATA } from "@/db/data";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Image from "next/image";
import Link from "next/link";
import { useRef, SetStateAction, Dispatch } from "react";
import { MdDownload, MdEmail } from 'react-icons/md';
import { IoMdCloudDownload, IoMdMail } from 'react-icons/io';
import { FaLocationDot, FaSquarePhone } from 'react-icons/fa6'

const SideBar = () => {
    return (
        <div className='flex flex-col h-full bg-primaryLight'>
            <div className='p-4 text-center flex flex-col gap-2'>
                <div className='w-36 aspect-square m-auto rounded-full relative overflow-hidden shadow-md'>
                    <Image fill alt="Dalveer Singh" src={MY_DATA.avatar}></Image>
                </div>
                <h1 className='text-2xl font-[500]'>Dalveer Singh</h1>
            </div>
            <div className='px-4 pb-4 flex flex-col gap-4 flex-grow'>
                <div className='bg-primaryLight2 px-2 py-1 rounded-md text-center'>
                    {MY_DATA.role}
                </div>
                <button className='hover:opacity-70 px-2 py-1 rounded-md text-center flex justify-center items-center gap-2 focus:shadow-glow bg-primary text-white'>
                    <IoMdCloudDownload className="w-5 h-5"/>
                    Download Resume
                </button>
                {/* Contact */}
                <div className='text-primary flex flex-col gap-1 bg-primaryLight2 p-2 rounded-md'>
                    <div className="flex items-center gap-1">
                        <IoMdMail className="w-5 h-5"/>
                        {MY_DATA.contact.email}
                    </div>
                    <div className="flex items-center gap-1">
                        <FaSquarePhone  className="w-5 h-5"/>
                        {MY_DATA.contact.phone}
                    </div>
                    <div className="flex items-center gap-1">
                        <FaLocationDot className="w-5 h-5"/>
                        {MY_DATA.contact.address}
                    </div>
                </div>
                {/* Social */}
                <div className='flex justify-evenly flex-wrap gap-4 mt-auto'>
                    {MY_DATA.social.map(({ Icon, label, url }, i) => <Link
                        href={url}
                        target="_blank"
                        key={`social-${i}`}
                        className='flex flex-col items-center text-primary rounded-md py-1 px-2'
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
            {visible && <div className={`lg:hidden absolute top-0 left-0 w-full h-full bg-[#00000055] z-[500]`}></div>}
            <div ref={ref} className={`bg-primaryLight ${visible ? 'translate-x-0 shadow-[0px_50px_500px_rgba(0,0,0,.25)]' : '-translate-x-full shadow-[0px_0px_0px_rgba(0,0,0,0)]'} z-[1000] block lg:hidden absolute top-0 left-0 transition-all duration-500 w-fit min-w-max max-w-[90%] h-full overflow-auto`}>
                <SideBar></SideBar>
            </div>
        </>
    );
}

export const SideBarPC = () => {
    return (
        <div className='lg:block hidden min-w-max max-w-fit h-full rounded-lg overflow-auto shadow-[0px_0px_5px_rgba(0,0,0,.2)]'>
            <SideBar></SideBar>
        </div>
    );
}