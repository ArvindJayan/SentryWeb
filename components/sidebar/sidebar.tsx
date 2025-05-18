"use client";

import { BookOpen, TerminalWindow } from '@phosphor-icons/react';
import { MonitorDot, Settings, User2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    if (pathname === '/login' || pathname === '/') {
        return null;
    }

    const getLinkClass = (path: string) => {
        return pathname === path ? 'flex rounded-lg p-2.5 bg-teal-600 hover:bg-teal-700 text-background transition duration-300' : 'flex rounded-lg p-2.5 hover:bg-foreground/10 transition duration-300';
    };

    return (
        <main className="w-[20vw] py-6 pl-7 pr-2 h-full text-base font-semibold text-foreground/60">
            <ul className='space-y-3 border border-foreground/10 p-4 rounded-lg w-full h-full'>
                <li>
                    <Link href="/terminal" className={getLinkClass('/terminal')}><TerminalWindow className='h-5 w-5 mr-2 mt-1' /> Terminal</Link>
                </li>
                <li>
                    <Link href="/guide" className={getLinkClass('/guide')}><BookOpen className='h-5 w-5 mr-2 mt-1' /> Guide</Link>
                </li>
                <li>
                    <Link href="/connections" className={getLinkClass('/connections')}><MonitorDot className='h-5 w-5 mr-2 mt-1' /> Connections</Link>
                </li>

                <li>
                    <Link href="/profile" className={getLinkClass('/profile')}><User2 className='h-5 w-5 mr-2 mt-1' /> Profile</Link>
                </li>
                <li>
                    <Link href="/settings" className={getLinkClass('/settings')}><Settings className='h-5 w-5 mr-2 mt-1' /> Settings</Link>
                </li>
            </ul>
        </main>
    )
}
