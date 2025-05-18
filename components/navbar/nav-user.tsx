"use client"

import {
    LogOut,
    User2
} from "lucide-react"

import { getSession } from "@/app/actions/auth/getSession"
import {
    Avatar,
    AvatarImage
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

import { signOut } from "@/app/actions/auth/signOut"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"

export function NavUser() {
    const { isMobile } = useSidebar();
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const router = useRouter();

    const handleSignOut = async () => {
        setProfilePicture(null);
        setIsSignedIn(false);
        await signOut();
    };

    useEffect(() => {
        (async () => {
            const session = await getSession();
            if (session) {
                setProfilePicture(session.user.user_metadata?.picture || null);
                setIsSignedIn(true);
            } else {
                setIsSignedIn(false);
            }
        })();
    }, []);

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                {isSignedIn && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton
                                size="lg"
                                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                                <Avatar className="h-10 w-10 rounded-full mb-2">
                                    <AvatarImage src={profilePicture || ''} />
                                </Avatar>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-[--radix-dropdown-menu-trigger-width] min-w-48 rounded-lg mt-9"
                            side={isMobile ? "bottom" : "right"}
                            align="end"
                            sideOffset={4}
                        >
                            <DropdownMenuLabel className="p-2 text-base">
                                My Account
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem onClick={() => router.push('/profile')}>
                                    <User2 className="h-5 w-5 mr-2" />
                                    My Profile
                                </DropdownMenuItem>
                            </DropdownMenuGroup>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="text-red-600 focus:text-red-700"
                                onClick={handleSignOut}>
                                <LogOut className="h-5 w-5 mr-2" />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
