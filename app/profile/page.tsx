import UserProfile from "../../components/profile/user-profile";
import Head from "next/head";

export default function Profile() {
    return (
        <main className="w-full h-full mx-5 my-6">
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
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <UserProfile />
        </main>
    );
}
