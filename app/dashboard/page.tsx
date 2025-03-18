import redirect from 'next/navigation'
import { getSession } from '../actions/auth/getSession'

export default async function DashboardPage() {
    return (
        try {
            const { user } = await getSession();
            if (!user) {
            return redirect('/login');
           }
        } catch (error) {
             console.error(error);
             return redirect('/login');
        }

        <main className="px-3 py-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
        </main>
    );
}
