"use client";
import MainNav from '@/page-components/main-nav'
import { FC, PropsWithChildren } from 'react'
import { SideBarPC } from './side-bar';
import TopBar from './top-bar';


const MainLayout: FC<PropsWithChildren> = ({ children }) => {

    return (

        <div className='w-full h-[100dvh] overflow-hidden lg:p-16 relative dark:bg-black text-foregroundDark'>
            <div className='overflow-auto h-full w-full max-w-[90rem] lg:m-auto flex items-start lg:gap-4 lg:p-4'>
                <SideBarPC></SideBarPC>
                <div className='flex flex-col w-full h-full overflow-auto lg:shadow-[0px_0px_5px_rgba(0,0,0,.2)] dark:lg:shadow-[0px_0px_5px_rgba(255,255,255,.8)] lg:rounded-lg'>
                    <TopBar></TopBar>
                    <div className='flex flex-col w-full h-full overflow-auto lg:relative'>
                        <MainNav></MainNav>
                        <div className='flex-grow overflow-y-auto overflow-x-hidden pb-20'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;