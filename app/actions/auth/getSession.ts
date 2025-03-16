"use server";

import { createClient } from "@/utils/supabase/server";

export const getSession = async () => {
    const supabase = await createClient();
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError) throw userError;
    if (!userData) throw new Error("User not found");

    return { user: userData.user, error: userError };
}