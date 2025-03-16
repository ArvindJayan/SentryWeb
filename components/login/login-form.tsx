"use client";

import { handleGoogleLogin } from "@/app/actions/auth/handleGoogleLogin";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { GoogleLogo } from "@phosphor-icons/react";
import { Button } from "../ui/button";

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className='border-0 rounded-lg px-6 py-4 w-full'>
                <CardHeader>
                    <CardTitle className="flex text-3xl justify-center font-extrabold">Login to SentryWeb</CardTitle>
                    <CardDescription className="flex justify-center text-center text-md">
                        Sign into your account using<br />one of the options below
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-5 mx-2">
                        <div className="flex items-center mt-2">
                            <hr className="flex-grow border-t" />
                            <span className="mx-4 text-foreground/70 text-xs">CONTINUE WITH</span>
                            <hr className="flex-grow border-t" />
                        </div>

                        <Button onClick={() => handleGoogleLogin()} variant="outline" className="w-full rounded-lg font-semibold shadow">
                            <GoogleLogo weight="bold" /> Login with Google
                        </Button>
                        <p className="text-center text-sm text-foreground/70 mt-4">
                            By clicking login, you agree to our <a href="/terms" className="underline">Terms of Service</a> <br /> and <a href="/privacy" className="underline">Privacy Policy</a>.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
