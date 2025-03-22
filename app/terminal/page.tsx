import CheckStatus from "@/components/permission/checkStatus";
import Terminal from "@/components/terminal/terminal";

export default function TerminalPage() {

    return (
        <main className="px-3 py-6 w-full h-full">
            <h1 className="text-2xl font-semibold mb-2">Terminal</h1>
            <CheckStatus />
            <Terminal />
        </main>
    );
}
