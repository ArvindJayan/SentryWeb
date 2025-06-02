import GoogleTag from "@/components/google-tag/google-tag";
import Terminal2 from "@/components/terminal/terminal2";

export default function TerminalPage() {

  return (
    <main className="px-3 py-6 w-full h-full">
      <GoogleTag />
      <h1 className="text-2xl font-semibold mb-2">Terminal</h1>
      {/* <Terminal /> */}
      <Terminal2 />
    </main>
  );
}
