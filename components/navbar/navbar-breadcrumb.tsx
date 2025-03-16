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
                <BreadcrumbList className='text-foreground'>
                    <BreadcrumbItem >
                        <Link href={`/dashboard`} className='flex heading text-2xl font-semibold'><ShieldAlert className='h-7 w-7 ml-2 mr-1 mt-0.5 stroke-2' />SentryWeb</Link>
                    </BreadcrumbItem>


                </BreadcrumbList>
            </Breadcrumb>
        </HydrationBoundary>
    )
}
