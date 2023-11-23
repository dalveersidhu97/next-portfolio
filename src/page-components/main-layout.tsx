"use client";
import MainNav from '@/page-components/main-nav'
import { FC, PropsWithChildren } from 'react'
import { SideBarPC } from './side-bar';
import TopBar from './top-bar';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {

    return (
        <div className='w-[100vw] h-[100vh] overflow-hidden lg:p-16 relative'>
            <div className='overflow-auto h-full w-full max-w-[90rem] lg:m-auto flex items-start lg:gap-4 lg:p-4'>
                <SideBarPC></SideBarPC>
                <div className='flex flex-col w-full h-full overflow-auto lg:shadow-[0px_0px_5px_rgba(0,0,0,.2)] lg:rounded-lg'>
                    <TopBar></TopBar>
                    <div className='flex flex-col w-full h-full overflow-auto lg:relative'>
                        {/* <div className='absolute top-0 left-0 bg-[rgba(0,0,0,.25)] w-full h-full z-[500]'></div> */}
                        <MainNav></MainNav>
                        <div className='flex-grow overflow-auto'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;