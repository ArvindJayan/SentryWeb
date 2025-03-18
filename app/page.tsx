import { BentoDemo } from "@/components/landing-page/bento-grid";
import { FooterDemo } from "@/components/landing-page/footer";
import { GlobeDemo } from "@/components/landing-page/globe";

export default function Home() {
  return (
    <main className="w-full h-full">
      <GlobeDemo />

      <div className="flex flex-col justify-center w-full">
        <h1 className="text-center text-6xl font-extrabold mt-2">What is SentryWeb?</h1>
        <div className="flex justify-center text-lg mt-4 text-center text-foreground/60 font-medium">
          SentryWeb is more than just your average network access tool. It's a
          platform that <br />  allows you to access your remote network from anywhere in
          the world.
        </div>
      </div>

      <div className="w-full h-max py-6 px-5">
        <BentoDemo />
      </div>
      <FooterDemo />
    </main>
  );
}
