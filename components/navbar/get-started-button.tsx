"use client";

import { getSession } from "@/app/actions/auth/getSession";
import { usePathname, useRouter } from "next/navigation";

export default function GetStartedButton() {
    const router = useRouter();

    const pathname = usePathname();
    if (pathname !== '/') {
        return null;
    }
    const handleGetStarted = async () => {
        try {
            const { user } = await getSession();
            if (!user) {
                return router.push('/login');
            }
            router.push('/terminal');
        } catch (error) {
            console.error(error);
            router.push('/login');
        }
    };

    return (
        <div>
            <button
                className="items-center px-3 mt-1 py-2 w-max bg-teal-600 hover:bg-teal-700 text-background font-semibold rounded-lg"
                onClick={handleGetStarted}>
                Get Started
            </button>
        </div>
    )
}
