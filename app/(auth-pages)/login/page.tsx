import { LoginForm } from "@/components/login/login-form";

export default function LoginPage() {
  return (
    <main className='flex w-screen h-screen flex-row'>
      <div className='flex flex-1 items-center justify-center'>
        <div className="h-full w-full bg-teal-600" />
      </div>
      <div className='flex-1'>
        <div className="flex h-full w-full items-center justify-center p-6 md:p-10">
          <div className=" border rounded-lg text-center">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
