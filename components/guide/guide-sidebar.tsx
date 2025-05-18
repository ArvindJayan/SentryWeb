export default function GuideSidebar() {
    const sections = [
        { id: "nmap", label: "Nmap" },
        { id: "metasploit", label: "Metasploit" },
        { id: "wireshark", label: "Wireshark" },
        { id: "hashcat", label: "Hashcat" },
        { id: "burpsuite", label: "Burpsuite" },
    ];

    return (
        <div className="w-max p-4 pr-20 border rounded-lg h-[80vh]">
            <h1 className=" text-base font-semibold mb-3">On This Page</h1>
            <ul className="space-y-2 text-sm ml-4 text-foreground/80">
                {sections.map((section, index) => (
                    <li key={section.id}>
                        <a
                            href={`#${section.id}`}
                            className="hover:text-foreground/90 transition duration-200"
                        >
                            {index + 1}. {section.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}