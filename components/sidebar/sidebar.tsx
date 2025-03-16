"use client";
import { LayoutDashboard, MonitorDot, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();
    if (pathname === '/login' || pathname === '/') {
        return null;
    }

    const getLinkClass = (path: string) => {
        return pathname === path ? 'flex rounded-lg p-2.5 bg-foreground/90 text-background transition duration-300' : 'flex rounded-lg p-2.5 hover:bg-foreground/5 transition duration-300';
    };

    return (
        <main className="w-[20vw] py-6 pl-7 pr-2 h-full text-base font-semibold text-foreground/60">
            <ul className='space-y-3 border border-foreground/10 p-4 rounded-lg w-full h-full'>
                <li>
                    <Link href="/dashboard" className={getLinkClass('/dashboard')}><LayoutDashboard className='h-5 w-5 mr-2 mt-1' />  Dashboard</Link>
                </li>
                <li>
                    <Link href="/connections" className={getLinkClass('/connections')}><MonitorDot className='h-5 w-5 mr-2 mt-1' /> Connections</Link>
                </li>
                <li>
                    <Link href="/settings" className={getLinkClass('/settings')}><Settings className='h-5 w-5 mr-2 mt-1' /> Settings</Link>
                </li>
            </ul>
        </main>
    )
}
