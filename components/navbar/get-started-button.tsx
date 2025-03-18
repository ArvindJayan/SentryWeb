"use client";

import { getSession } from "@/app/actions/auth/getSession";
import { useRouter } from "next/navigation";


export default function GetStartedButton() {
    const router = useRouter();

    const handleGetStarted = async () => {
        try {
            const { user } = await getSession();
            if (!user) {
                return router.push('/login');
            }
            router.push('/dashboard');
        } catch (error) {
            console.error(error);
            router.push('/login');
        }
    };

    return (
        <div>
            <button
                className="items-center px-3 mt-1 py-2 w-max bg-foreground text-background font-semibold rounded-lg"
                onClick={handleGetStarted}>
                Get Started
            </button>
        </div>
    )
}
