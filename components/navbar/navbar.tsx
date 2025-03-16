"use client";

import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '../ui/sidebar';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { AvatarDemo } from './avatar';
import { NavbarBreadcrumb } from './navbar-breadcrumb';

export default function Navbar() {
    const path = usePathname();
    if (path === '/login' || path === '/onboarding') {
        return null;
    }

    return (
        <div className='flex items-center w-full px-2 py-3 border-b-2 border-foreground/5 z-10 h-16'>
            <Tooltip>
                <TooltipTrigger asChild>
                    <SidebarTrigger />
                </TooltipTrigger>
                <TooltipContent side="right" align="center">
                    <span>Toggle Sidebar</span>
                </TooltipContent>
            </Tooltip>

            <NavbarBreadcrumb />

            <div className='flex-grow' />
            <div className='flex m-1'>
                <AvatarDemo />
            </div>
        </div>
    )
}

