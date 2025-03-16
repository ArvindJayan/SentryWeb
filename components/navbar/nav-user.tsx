"use client"

import {
    LogOut,
    Settings,
    User2
} from "lucide-react"

import { getSession } from "@/app/actions/auth/getSession"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { User } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

export function NavUser() {
    const { isMobile } = useSidebar();
    const [profilePicture, setProfilePicture] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const session = await getSession();
            setProfilePicture(session.user.user_metadata.picture);
        })();
    }, []);

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-9 w-9 rounded-full mb-2">
                                <AvatarImage src={profilePicture || ''} />
                                <AvatarFallback className='bg-foreground'>{<User className="text-background text-lg" />}</AvatarFallback>
                            </Avatar>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg mt-9"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-2">
                            My Account
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <User2 className="h-5 w-5 mr-2" />
                                Profile
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <Settings className="h-5 w-5 mr-2" />
                                Settings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 focus:text-red-700">
                            <LogOut className="h-5 w-5 mr-2" />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
