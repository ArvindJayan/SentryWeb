"use client";

import { getSession } from "@/app/actions/auth/getSession";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserProfile() {
    const [username, setUSername] = useState<string | undefined>();
    const [email, setEmail] = useState<string | null>(null);
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const handleButtonClick = () => {
        redirect("/terminal");
    };

    useEffect(() => {
        (async () => {
            const { user } = await getSession();
            if (user) {
                setProfilePicture(user.user_metadata?.picture || "");
                setUSername(user.user_metadata?.name || null);
                setEmail(user.user_metadata?.email || null);
            }
        })();
    }, []);

    return (
        <main className="w-full h-full">
            <div className="border rounded-xl mt-2 w-5/6">
                <div className="flex flex-1 relative">
                    <div className="h-[30vh] w-full bg-teal-500 rounded-t-xl relative">
                        {profilePicture && (
                            <img
                                src={profilePicture}
                                alt="Profile"
                                className="absolute bottom-0 transform translate-y-1/2 h-30 w-30 rounded-full border-4 ml-10 border-background"
                            />
                        )}
                    </div>
                </div>
                <div className="flex-1">
                    <div className="h-full w-full mt-10 ml-8 p-10">
                        <h1 className="text-2xl font-bold mb-1.5">{username}</h1>
                        <p className="text-foreground/70">{email}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}