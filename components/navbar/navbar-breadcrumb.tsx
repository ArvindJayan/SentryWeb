import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList
} from "@/components/ui/breadcrumb";
import { dehydrate, HydrationBoundary, useQueryClient } from "@tanstack/react-query";
import { ShieldAlert } from "lucide-react";
import Link from "next/link";

export function NavbarBreadcrumb({ }) {
    const queryClient = useQueryClient();
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Breadcrumb>
                <BreadcrumbList className='text-foreground mt-1'>
                    <BreadcrumbItem >
                        <Link href={`/dashboard`} className='flex heading text-3xl font-semibold'><ShieldAlert className='h-8 w-8 ml-2 mr-1 stroke-2 mt-0.5' />SentryWeb</Link>
                    </BreadcrumbItem>


                </BreadcrumbList>
            </Breadcrumb>
        </HydrationBoundary>
    )
}
