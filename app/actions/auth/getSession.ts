"use server";

import { createClient } from "@/utils/supabase/server";

export const getSession = async () => {
    const supabase = await createClient();
    const { data: userData, error: userError } = await supabase.auth.getUser();

    return { user: userData.user, error: userError };
}