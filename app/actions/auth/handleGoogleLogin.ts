'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function handleGoogleLogin() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${process.env.NODE_ENV === 'production' ? 'https' : 'http'}://${process.env.VERCEL_URL}/auth/callback` } });

    if (error) {
        redirect('/onboarding');
    }

    if (data.url) {
        redirect(data.url)
    }

    revalidatePath('/', 'layout');
    redirect('/dashboard');
}
