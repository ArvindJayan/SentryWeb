import { ThemeSwitcher } from "@/components/settings/theme-switcher";
import { redirect } from "next/navigation";
import { getSession } from "../actions/auth/getSession";

export default async function SettingsPage() {
    try {
        const session = await getSession();
        if (!session.user) {
            return redirect('/');
        }
    } catch (error) {
        console.error(error);
        return redirect('/');
    }
    return (
        <main className="px-3 py-6 w-full h-full">
            <h1 className="text-2xl font-semibold mb-2">Settings</h1>
            <ThemeSwitcher />
        </main>
    );
}

