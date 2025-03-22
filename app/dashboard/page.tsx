import CheckStatus from "@/components/permission/checkStatus";

export default async function DashboardPage() {
    return (
        <main className="px-3 py-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <CheckStatus />
        </main>
    );
}
