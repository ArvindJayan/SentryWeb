import {
    DribbbleIcon,
    GithubIcon,
    ShieldAlert,
    TwitchIcon,
    TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerSections = [
    {
        title: "Product",
        links: [
            {
                title: "Features",
                href: "/",
            }
        ],
    },
    {
        title: "Contact",
        links: [
            {
                title: "support@sentryweb.com",
                href: "/",
            }
        ],
    },

    {
        title: "Legal",
        links: [
            {
                title: "Terms of Service",
                href: "/",
            },
            {
                title: "Privacy Policy",
                href: "/",
            }
        ],
    },
];

export const FooterDemo = () => {
    return (
        <div className="flex flex-col w-full border-t px-12 text-base">
            <footer>
                <div>
                    <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
                        <div className="xl:col-span-2">
                            <div className='flex heading text-3xl font-semibold text-teal-600'><ShieldAlert className='h-8 w-8 ml-2 mr-1 stroke-2 mt-0.5' />SentryWeb</div>
                        </div>

                        {footerSections.map(({ title, links }) => (
                            <div key={title}>
                                <h6 className="font-semibold text-center">{title}</h6>
                                <ul className="mt-6 text-center space-y-2">
                                    {links.map(({ title, href }) => (
                                        <li key={title}>
                                            <Link
                                                href={href}
                                                className="text-muted-foreground hover:text-foreground"
                                            >
                                                {title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="py-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
                        {/* Copyright */}
                        <span className="text-muted-foreground">
                            &copy; {new Date().getFullYear()}{" "}
                            <Link href="/" target="_blank">
                                SentryWeb
                            </Link>
                            . All rights reserved.
                        </span>

                        <div className="flex items-center gap-5 text-muted-foreground">
                            <Link href="#" target="_blank">
                                <TwitterIcon className="h-5 w-5" />
                            </Link>
                            <Link href="#" target="_blank">
                                <DribbbleIcon className="h-5 w-5" />
                            </Link>
                            <Link href="#" target="_blank">
                                <TwitchIcon className="h-5 w-5" />
                            </Link>
                            <Link href="#" target="_blank">
                                <GithubIcon className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
