import { redirect } from "next/navigation";
import { getSession } from "./actions/auth/getSession";

export default async function Home() {
  try {
    const { user } = await getSession();
    if (!user) {
      return redirect('/login');
    }
  } catch (error) {
    console.error(error);
    return redirect('/login');
  }
  return redirect('/dashboard');
}
