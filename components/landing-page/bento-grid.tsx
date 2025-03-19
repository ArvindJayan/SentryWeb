import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { FileTextIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
import { Marquee } from "../ui/marquee";
import { AnimatedBeamMultipleOutputDemo } from "./animated-beam-multiple-outputs";

const files = [
    {
        name: "nmap-scan.txt",
        body: "Nmap is a network scanning tool used to discover hosts and services on a computer network by sending packets and analyzing the responses.",
    },
    {
        name: "metasploit-guide.pdf",
        body: "Metasploit is a penetration testing framework that helps security professionals find, exploit, and validate vulnerabilities.",
    },
    {
        name: "wireshark.pcap",
        body: "Wireshark is a network protocol analyzer that captures and displays data packets for troubleshooting and analysis.",
    },
    {
        name: "hashcat.txt",
        body: "Hashcat is a password recovery tool that supports various hashing algorithms to test the strength of passwords.",
    },
    {
        name: "burpsuite-report.html",
        body: "Burp Suite is a web vulnerability scanner used to identify security issues in web applications.",
    },
];

const features = [
    {
        Icon: FileTextIcon,
        name: "Extensive library of tools",
        description: "We provide every tool for your network security and testing needs",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10  [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            >
                {files.map((f, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl p-4 ",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                        )}
                    >
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium text-teal-600">
                                    {f.name}
                                </figcaption>
                            </div>
                        </div>
                        <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                    </figure>
                ))}
            </Marquee>
        ),
    },
    {
        Icon: Share2Icon,
        name: "Seamless connections",
        description: "Connect to over over 100+ supported integrations.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
];

export function BentoDemo() {
    return (
        <BentoGrid>
            {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
            ))}
        </BentoGrid>
    );
}
