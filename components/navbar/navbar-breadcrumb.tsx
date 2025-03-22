import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList
} from "@/components/ui/breadcrumb";
import { dehydrate, HydrationBoundary, QueryClient, useQueryClient } from "@tanstack/react-query";
import { ShieldAlert } from "lucide-react";
import { redirect } from "next/navigation";

export function NavbarBreadcrumb({ }) {
    const queryClient = useQueryClient();
    const handleLinkClick = () => {
        const queryClient = new QueryClient();
        queryClient.invalidateQueries({ queryKey: ['userInfo'] });
        redirect('/');
    };

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Breadcrumb>
                <BreadcrumbList className='text-foreground mt-1'>
                    <BreadcrumbItem >
                        <button
                            className='flex text-3xl font-semibold text-teal-700'
                            onClick={handleLinkClick}
                        >
                            <ShieldAlert className='h-8 w-8 ml-2 mr-1 stroke-2 mt-0.5' />SentryWeb
                        </button>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </HydrationBoundary>
    )
}
