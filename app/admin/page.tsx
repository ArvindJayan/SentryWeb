import CheckRole from "@/components/permission/checkRole";

export default async function AdminPage() {
    return (
        <main className="px-3 py-6">
            <h1 className="text-2xl font-semibold">Admin</h1>
            <CheckRole />
        </main>
    );
}
