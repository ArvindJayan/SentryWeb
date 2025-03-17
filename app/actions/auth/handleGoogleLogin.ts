'use server'

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function handleGoogleLogin() {
    const supabase = await createClient();

    const redirectToUrl = process.env.NODE_ENV === 'production'
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/auth/callback`
        : `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/auth/callback`;

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: redirectToUrl
        }
    });

    if (error) {
        redirect('/');
    }

    if (data.url) {
        redirect(data.url)
    }

    revalidatePath('/', 'layout');
    redirect('/dashboard');
}
