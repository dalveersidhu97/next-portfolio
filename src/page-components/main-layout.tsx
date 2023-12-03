"use client";
import MainNav from '@/page-components/main-nav'
import { FC, PropsWithChildren } from 'react'
import { SideBarPC } from './side-bar';
import TopBar from './top-bar';


const MainLayout: FC<PropsWithChildren> = ({ children }) => {

    return (

        <div className='w-full h-[100dvh] overflow-hidden relative dark:bg-black text-foregroundDark'>
            <div className='overflow-auto h-full w-full lg:m-auto flex items-start'>
                <SideBarPC></SideBarPC>
                <div className='flex flex-col w-full h-full overflow-auto'>
                    <TopBar></TopBar>
                    <div className='flex flex-col w-full h-full overflow-auto lg:relative'>
                        <MainNav></MainNav>
                        <div className='flex-grow overflow-x-auto pb-20'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;