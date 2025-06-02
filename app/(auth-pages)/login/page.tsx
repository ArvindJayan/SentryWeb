import Head from "next/head";
import { LoginForm } from "@/components/login/login-form";

export default async function LoginPage() {
  return (
    <main className='flex w-screen h-screen flex-row'>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M6YMS5RNS1"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M6YMS5RNS1');
          `}
        </script>
      </Head>
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
