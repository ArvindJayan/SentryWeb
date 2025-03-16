"use client";

import { usePathname } from 'next/navigation';
import { NavUser } from './nav-user';
import { NavbarBreadcrumb } from './navbar-breadcrumb';

export default function Navbar() {
    const path = usePathname();
    if (path === '/login' || path === '/onboarding') {
        return null;
    }

    return (
        <div className='flex items-center w-full pl-2 py-5 border-b-2 border-foreground/5 z-10 h-16 '>
            <NavbarBreadcrumb />

            <div className='flex-grow' />
            <div className='flex m-1'>
                <NavUser />
            </div>
        </div>
    )
}

