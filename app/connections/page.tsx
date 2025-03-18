import { Monitor } from "@phosphor-icons/react/dist/ssr";

export default async function ConnectionsPage() {
    const connections = ["Test Connection 1", "Test Connection 2", "Test Connection 3", "Test Connection 4"];

    return (
        <main className="px-3 py-6 w-full h-full">
            <h1 className="text-2xl font-semibold mb-4">Connections</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                {connections.map((name, index) => (
                    <div key={index} className="flex flex-col items-center w-1/3 h-max px-4 py-3 border-2 bg-foreground/5 rounded-lg">
                        <div>
                            <Monitor className="w-36 h-36 text-foreground/40" />
                        </div>
                        <div className="text-center font-semibold text-foreground/80 text-lg mt-2">
                            {name}
                        </div>
                        <button className="w-full border rounded-lg bg-teal-600 hover:bg-teal-700 p-2 mt-2 mb-1 text-background font-semibold transition duration-300">
                            Establish Connection
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}
