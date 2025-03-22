"use server";

import { createClient } from "@/utils/supabase/server";
import { cache } from "react";
import { getSession } from "./getSession";

export const checkPermission = cache(async () => {
    const session = await getSession();
    const id = session.user.id;
    const email = session.user.email;
    const supabase = await createClient();
    const { data: userInfo } = await supabase.from("permitted_users")
        .select("*")
        .eq("id", id)
        .throwOnError();

    return { userInfo };
});
