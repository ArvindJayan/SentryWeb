import { redirect } from "next/navigation";
import { getSession } from "../actions/auth/getSession";

export default async function DashboardPage() {
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
        <main className="px-3 py-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
        </main>
    );
}
