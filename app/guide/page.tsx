import GuideSidebar from "@/components/guide/guide-sidebar";
import Guides from "@/components/guide/guides";

export default function GuidePage() {
    return (
        <main className="flex flex-row mx-5 my-6 w-full h-full text-justify">
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
            <div className="w-3/4 h-3/4 pr-6">
                <h1 className="text-2xl font-extrabold">Guide</h1>
                <Guides />
            </div>
            <div className="w-max h-3/4">
                <GuideSidebar />
            </div>
        </main>
    );
}
