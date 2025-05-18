"use client";

import { getSession } from "@/app/actions/auth/getSession";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function UserProfile() {
    const [username, setUSername] = useState<string | undefined>();
    const [email, setEmail] = useState<string | null>(null);
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const [createdAt, setCreatedAt] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const { user } = await getSession();
            if (user) {
                setProfilePicture(user.user_metadata?.picture || "");
                setUSername(user.user_metadata?.name || null);
                setEmail(user.user_metadata?.email || null);
                setCreatedAt(user.created_at || null);
            }
        })();
    }, []);

    return (
        <main className="w-full h-full">
            <div className="border rounded-xl mt-2 w-5/6">
                <div className="flex flex-1 relative">
                    <div className="h-[30vh] w-full bg-teal-600 rounded-t-xl relative">
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
                        <div className="flex items-center justify-between mb-1.5">
                            <h1 className="text-2xl font-bold">{username}</h1>
                            <Button className="px-4 py-2 mr-2 bg-teal-600 text-background rounded-lg text-base hover:bg-teal-700 transition">
                                Edit Profile
                            </Button>
                        </div>
                        <p className="text-foreground/70">{email}</p>
                        <p className="mt-1 text-sm text-foreground/50">
                            Member since:{" "}
                            <span className="font-medium">
                                {createdAt
                                    ? new Date(createdAt).toLocaleDateString()
                                    : "-"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}