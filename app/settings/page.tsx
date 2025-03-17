import { ThemeSwitcher } from "@/components/settings/theme-switcher";

export default async function SettingsPage() {
    return (
        <main className="px-6 py-8">
            <h1 className="text-3xl font-bold mb-4">Settings</h1>
            <ThemeSwitcher />
        </main>
    );
}

