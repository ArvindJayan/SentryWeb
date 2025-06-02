export default function GoogleTag() {
    return (
        <>
            <title>SentryWeb</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-M6YMS5RNS1"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M6YMS5RNS1');
        `,
            }} />
        </>
    );
}
