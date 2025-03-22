"use client";

import { requestPermission } from "@/app/actions/auth/requestPermission";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LockKey } from "@phosphor-icons/react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

export function RequestPermission({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    const handleSubmit = async () => {
        try {
            const response = await requestPermission();
            if (response.status === "success") {
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error("Failed to request permission.");
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className='border-0 rounded-lg px-6 py-4 my-10 w-max'>
                <CardHeader>
                    <CardTitle className="flex text-3xl justify-center font-extrabold">Welcome to SentryWeb</CardTitle>
                    <CardDescription className="flex justify-center text-center text-md">
                        You don't have access to our website yet. <br />Please click on the button below to request access.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-5 mx-2">
                        <Button onClick={handleSubmit} variant="outline" className="w-full rounded-lg font-semibold shadow">
                            <LockKey />Request Access
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
