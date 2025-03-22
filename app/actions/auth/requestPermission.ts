import { createClient } from "@/utils/supabase/client";
import { getSession } from "./getSession";

export const requestPermission = async () => {
    const session = await getSession();
    const id = session.user.id;
    const email = session.user.email;
    try {
        const supabase = await createClient();
        const { data, error } = await supabase.from("permitted_users")
            .insert({
                id: id,
                email: email
            })
            .throwOnError();
        return { status: "success", message: "Request created successfully." };
    } catch (error) {
        if (error instanceof Error && error.message.includes('duplicate key value violates unique constraint "permitted_users_pkey"')) {
            return { status: "error", message: "Approval pending on your existing request" };
        }
        console.error(error);
        return { status: "error", message: "Failed to create request." };
    }
};


