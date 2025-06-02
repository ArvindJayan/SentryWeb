import GoogleTag from "@/components/google-tag/google-tag";
import { LoginForm } from "@/components/login/login-form";

export default async function LoginPage() {
  return (
    <main className='flex w-screen h-screen flex-row'>
      <GoogleTag />
      <div className='flex-1'>
        <div className="flex h-full w-full items-center justify-center p-6 md:p-10">
          <div className="md:w-1/3 border rounded-lg text-center">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
