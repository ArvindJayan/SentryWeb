import { BentoDemo } from "@/components/landing-page/bento-grid";
import { FooterDemo } from "@/components/landing-page/footer";
import { GlobeDemo } from "@/components/landing-page/globe";
import { TextAnimate } from "@/components/ui/text-animate";
import { QueryClient } from "@tanstack/react-query";
import { checkPermission } from "./actions/auth/checkPermission";

export default async function Home() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['userInfo'],
    queryFn: () => checkPermission()
  })

  return (
    <main className="w-full h-full">
      <GlobeDemo />

      <div className="flex flex-col justify-center w-full">
        <TextAnimate
          className="text-center text-6xl font-extrabold mt-16 text-teal-600"
          animation="blurInUp"
          by="character">
          What is SentryWeb?
        </TextAnimate>
        <div className="flex justify-center text-lg my-2 text-center text-foreground/60 font-medium">
          SentryWeb is more than just your average network access tool. It's a
          platform that enables you <br />  with powerful tools to stay ahead of threats and keep your network safe.
        </div>
      </div>

      <div className="w-full h-max pt-2 pb-6 px-5">
        <BentoDemo />
      </div>
      <FooterDemo />
    </main>
  );
}
