import Navbar from "@/components/navbar/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import QueryProvider from "@/lib/providers/queryClientProvider";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "SentryWeb",
  description: "Make remote network access easier than ever.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html
        lang="en"
        className={`${geistSans.className} antialiased flex`}
        suppressHydrationWarning
      >
        <body className="bg-background text-foreground h-screen w-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <div className="flex h-screen w-screen">
                <div className="flex flex-col flex-1">
                  <Navbar />
                  <Sidebar />
                  <main className="flex-1 flex">
                    <div className='flex justify-between w-full h-full'>
                      <Toaster />
                      {children}
                    </div>
                  </main>
                </div>
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </body>
      </html>
    </QueryProvider>
  );
}
