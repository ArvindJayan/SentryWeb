import { ThemeSwitcher } from "@/components/settings/theme-switcher";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import Head from "next/head";

export default function SettingsPage() {
    return (
        <main className="px-3 py-6 w-full h-full">
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-M6YMS5RNS1"></script>
                <script>
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-M6YMS5RNS1');
                  `}
                </script>
              </Head>
            <h1 className="text-2xl font-semibold mb-2">Settings</h1>
            <ThemeSwitcher />
            <div className=" grid gap-8 p-8">
                <div className="flex items-center justify-between gap-4">
                    <Label htmlFor="2fa-switch" className="text-base">Enable Two-Factor Authentication</Label>
                    <Switch id="2fa-switch" />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <Label htmlFor="auto-logout-switch" className="text-base">Auto-Logout on Inactivity</Label>
                    <Switch id="auto-logout-switch" />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <Label htmlFor="password-policy-select" className="text-base">Password Policy</Label>
                    <Select>
                        <SelectTrigger className="w-max">
                            <SelectValue placeholder="Select policy" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="strong">Strong (12+ chars, symbols)</SelectItem>
                            <SelectItem value="medium">Medium (8+ chars, numbers)</SelectItem>
                            <SelectItem value="weak">Weak (6+ chars)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <Label htmlFor="recovery-email-input" className="text-base w-1/6">Recovery Email</Label>
                    <Input id="recovery-email-input" placeholder="Enter recovery email..." type="email" className="bg-foreground/5 w-full" />
                </div>
                <div className="flex items-center justify-between gap-2">
                    <Label htmlFor="security-question-input" className="text-base w-1/6">Security Question</Label>
                    <Input id="security-question-input" placeholder="e.g. Your first pet's name" className="bg-foreground/5 w-full" />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <Label htmlFor="login-alerts-switch" className="text-base">Login Alerts</Label>
                    <Switch id="login-alerts-switch" />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <Label htmlFor="session-timeout-select" className="text-base">Session Timeout</Label>
                    <Select>
                        <SelectTrigger className="w-max">
                            <SelectValue placeholder="Select timeout" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="5">5 minutes</SelectItem>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">1 hour</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </main >
    );
}

