"use client";

import { useRouter } from "next/navigation";

export default function GetStartedButton() {
    const router = useRouter();
    return (
        <div>
            <button
                className="mt-4 px-4 py-2 bg-foreground text-background font-semibold rounded-lg"
                onClick={() => router.push('/dashboard')}>
                Get Started
            </button>
        </div>
    )
}
