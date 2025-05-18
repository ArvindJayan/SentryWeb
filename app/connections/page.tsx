import ConnectionsList from "@/components/connewctions/connections-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ConnectionsPage() {
    return (
        <main className="px-3 py-6 w-full h-full">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold mb-4">Connections</h1>
                <Button className="bg-teal-600">Create <Plus /></Button>
            </div>
            <ConnectionsList />
        </main>
    );
}
