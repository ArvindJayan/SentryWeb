"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@phosphor-icons/react";


export function AvatarDemo({ className }: { className?: string }) {
    return (
        <Avatar className={className ? className : 'h-8 w-8'}>
            <AvatarImage src='' alt="@shadcn" />
            <AvatarFallback className='bg-foreground'>{<User className="text-background text-lg" />}</AvatarFallback>
        </Avatar>
    )
}
