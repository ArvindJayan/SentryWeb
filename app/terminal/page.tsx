import Terminal2 from "@/components/terminal/terminal2";

export default function TerminalPage() {

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
            <h1 className="text-2xl font-semibold mb-2">Terminal</h1>
            {/* <Terminal /> */}
            <Terminal2 />
        </main>
    );
}
