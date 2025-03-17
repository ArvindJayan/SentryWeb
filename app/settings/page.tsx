import { ThemeSwitcher } from "@/components/settings/theme-switcher";

export default async function SettingsPage() {
    return (
        <main className="px-3 py-6 w-full h-full">
            <h1 className="text-2xl font-semibold mb-2">Settings</h1>
            <ThemeSwitcher />
        </main>
    );
}

