"use server";

import { createClient } from "@/utils/supabase/server";

export const getSession = async () => {
    const supabase = await createClient();
    const { data: session, error: userError } = await supabase.auth.getUser();

    if (userError) throw userError;
    if (!session) throw new Error("Session not found");

    return { user: session.user, error: userError };
}

