import { Globe } from "../ui/globe";
import { TextAnimate } from "../ui/text-animate";

export function GlobeDemo() {
    return (
        <div className="relative h-screen overflow-hidden bg-background pb-8">
            <TextAnimate
                className='flex justify-center text-6xl font-extrabold mt-8 w-full'
                animation="blurInUp"
                by="character">
                Make remote access easier than ever
            </TextAnimate>


            <div className="flex relative justify-center text-lg mt-2 text-center text-foreground/60 font-medium">
                A remote network access and security platform. Connect, analyze, and secure <br /> with powerful tools—empowering users to stay ahead of threats.
            </div>

            <Globe className="top-24 mt-4" />

            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
    );
}
