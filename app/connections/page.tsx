import ConnectionsList from "@/components/connections/connections-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Head from "next/head";

export default function ConnectionsPage() {
    return (
        <main className="px-3 py-6 w-full h-full">
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
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold mb-4">Connections</h1>
                <Button className="bg-teal-600 hover:bg-teal-700 font-semibold transition duration-200">Create <Plus /></Button>
            </div>
            <ConnectionsList />
        </main>
    );
}
