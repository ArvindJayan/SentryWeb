"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { Calendar, ChartNoAxesColumnIncreasing, LayoutDashboard, MessageSquare, Settings, Users } from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
    {
        title: "Dashboard",
        url: (id: string) => `/dashboard/products/${id}`,
        icon: LayoutDashboard,
    },
    {
        title: "Leads",
        url: (id: string) => `/dashboard/products/${id}/leads`,
        icon: Users,
    },
    {
        title: "Messages",
        url: (id: string) => `/dashboard/products/${id}/messages`,
        icon: MessageSquare,
    },
    {
        title: "Calendar",
        url: (id: string) => `/dashboard/products/${id}/calendar`,
        icon: Calendar,
    },
    {
        title: "Analytics",
        url: (id: string) => `/dashboard/products/${id}/analytics`,
        icon: ChartNoAxesColumnIncreasing,
    },
]

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const path = usePathname();
    const id = path?.split("/")[3];

    if (path === '/login' || path === '/onboarding') {
        return null;
    }

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className='pt-2'>
                        <SidebarMenu>
                            {items.map((item) => {
                                const itemUrl = typeof item.url === "function" ? item.url(id) : item.url;

                                const isActive = item.title === "Dashboard" ? path === itemUrl : path.includes(itemUrl);

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild tooltip={`${item.title}`}>
                                            <Link
                                                href={itemUrl}
                                                className={isActive
                                                    ? 'font-medium h-max text-foreground/70 bg-foreground/5 border hover:text-foreground/80 rounded-lg shadow transition duration-300 flex items-center w-full'
                                                    : 'font-medium h-max text-foreground/40 hover:bg-foreground/5 hover:text-foreground/50 rounded-lg transition duration-300 flex items-center'}>
                                                <item.icon className='mr-1.5 text-2xl' />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem className=''>
                        <SidebarMenuButton asChild tooltip="Settings">
                            <Link
                                href={`/dashboard/products/${id}/settings`}
                                className={path.includes(`/dashboard/products/${id}/settings`)
                                    ? 'font-medium h-max text-foreground/70 bg-foreground/5 border hover:text-foreground/80 rounded-lg shadow transition duration-300 flex items-center w-full'
                                    : 'font-medium h-max text-foreground/40 hover:bg-foreground/5 hover:text-foreground/50 rounded-lg transition duration-300 flex items-center'}>
                                <Settings className='mr-1.5 text-2xl' />
                                <span>Settings</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
