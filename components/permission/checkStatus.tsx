"use client";

import { checkPermission } from '@/app/actions/auth/checkPermission';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { redirect } from 'next/navigation';

export default function CheckStatus() {
    const queryClient = new QueryClient();

    const { data: data, isLoading } = useQuery({
        queryKey: ['userInfo'],
        queryFn: () => checkPermission()
    });

    if (!isLoading && (!data?.userInfo || data.userInfo.length === 0 || data.userInfo[0].status !== 'permitted')) {
        redirect('/request-access');

        return null;
    }
}
