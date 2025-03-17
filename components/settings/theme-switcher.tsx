"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = (checked: boolean) => {
        setTheme(checked ? "dark" : "light");
    };

    if (!mounted) return null;

    return (
        <div className="flex items-center space-x-2">
            <Switch
                id="theme-switch"
                onCheckedChange={toggleTheme}
                defaultChecked={theme === "dark"}
            />
            <Label htmlFor="theme-switch">Toggle Theme</Label>
        </div>
    )
}
