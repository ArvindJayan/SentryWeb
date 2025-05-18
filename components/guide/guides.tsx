import { ScriptCopyButton } from "./script-copy-button"

export default function Guide() {
    return (
        <div>
            <section id="nmap" className="mt-6">
                <h2 className="text-xl font-bold">1. Nmap</h2>
                <div className="ml-3">
                    <p className="mt-2">
                        Nmap (Network Mapper) is a powerful open-source tool used for
                        network discovery and security auditing. It can quickly scan large
                        networks and provide detailed information about hosts, services,
                        operating systems, and open ports. Nmap is widely used by network
                        administrators and penetration testers.
                    </p>
                    <p className="mt-2">
                        <strong className="text-base">Example Commands:</strong>
                    </p>
                    <p className="mt-2 ml-4">
                        Perform a stealth scan on all ports of a target.
                        <ScriptCopyButton command="nmap -sS -p 1-65535 192.168.1.1" />
                    </p>
                    <p className="mt-2 ml-4">
                        Enable OS detection, version detection, script scanning, and traceroute.
                        <ScriptCopyButton command="nmap -A 192.168.1.1" />
                    </p>
                    <p className="mt-2 ml-4">
                        Skip host discovery and scan the target directly.
                        <ScriptCopyButton command="nmap -Pn 192.168.1.1" />
                    </p>
                    <p className="mt-2 ml-4">
                        Detect service versions on specific ports.
                        <ScriptCopyButton command="nmap -sV -p 80,443 192.168.1.1" />
                    </p>
                </div>
            </section >
            <section id="metasploit" className="mt-8">
                <h2 className="text-xl font-bold">2. Metasploit</h2>
                <div className="ml-3">
                    <p className="mt-2">
                        Metasploit is a comprehensive penetration testing framework that
                        helps security professionals identify, exploit, and validate
                        vulnerabilities in systems. It includes a vast library of
                        exploits, payloads, and auxiliary modules, making it a go-to tool
                        for ethical hackers.
                    </p>
                    <p className="mt-2">
                        <strong className="text-base">Example Commands:</strong>
                    </p>
                    <p className="mt-2 ml-4">
                        Launch the Metasploit console.
                        <ScriptCopyButton command="msfconsole" />
                    </p>
                    <p className="mt-2 ml-4">
                        Load the EternalBlue exploit module.
                        <ScriptCopyButton command="use exploit/windows/smb/ms17_010_eternalblue" />
                    </p>
                    <p className="mt-2 ml-4">
                        Search for SMB-related exploits in Metasploit.
                        <ScriptCopyButton command="search exploit/windows/smb" />
                    </p>
                    <p className="mt-2 ml-4">
                        Set the target host for an exploit.
                        <ScriptCopyButton command="set RHOSTS 192.168.1.1" />
                    </p>
                </div>
            </section>
            <section id="wireshark" className="mt-8">
                <h2 className="text-xl font-bold">3. Wireshark</h2>
                <div className="ml-3">
                    <p className="mt-2">
                        Wireshark is a network protocol analyzer that captures and
                        inspects data packets in real-time. It provides detailed insights
                        into network traffic, making it an essential tool for
                        troubleshooting, analysis, and security monitoring.
                    </p>
                    <p className="mt-2">
                        <strong className="text-base">Example Commands:</strong>
                    </p>
                    <p className="mt-2 ml-4">
                        Launch the Wireshark GUI.
                        <ScriptCopyButton command="wireshark" />
                    </p>
                    <p className="mt-2 ml-4">
                        Use the command-line version of Wireshark to capture packets on the eth0 interface.
                        <ScriptCopyButton command="tshark -i eth0" />
                    </p>
                    <p className="mt-2 ml-4">
                        Analyze a previously captured packet file.
                        <ScriptCopyButton command="tshark -r capture.pcap" />
                    </p>
                    <p className="mt-2 ml-4">
                        Start Wireshark and immediately begin capturing on eth0.
                        <ScriptCopyButton command="wireshark -k -i eth0" />
                    </p>
                </div>
            </section>
            <section id="hashcat" className="mt-8">
                <h2 className="text-xl font-bold">4. Hashcat</h2>
                <div className="ml-3">
                    <p className="mt-2">
                        Hashcat is a high-performance password recovery tool that supports
                        a wide range of hashing algorithms. It is designed to crack
                        password hashes using brute force, dictionary attacks, and other
                        advanced techniques.
                    </p>
                    <p className="mt-2">
                        <strong className="text-base">Example Commands:</strong>
                    </p>
                    <p className="mt-2 ml-4">
                        Perform a dictionary attack on MD5 hashes.
                        <ScriptCopyButton command="hashcat -m 0 -a 0 hash.txt wordlist.txt" />
                    </p>
                    <p className="mt-2 ml-4">
                        Perform a brute-force attack on NTLM hashes.
                        <ScriptCopyButton command="hashcat -m 1000 -a 3 hash.txt ?a?a?a?a" />
                    </p>
                    <p className="mt-2 ml-4">
                        Crack WPA/WPA2 handshakes.
                        <ScriptCopyButton command="hashcat -m 2500 -a 0 handshake.hccapx wordlist.txt" />
                    </p>
                    <p className="mt-2 ml-4">
                        Perform a brute-force attack on MD5 hashes using digits.
                        <ScriptCopyButton command="hashcat -m 500 -a 3 hash.txt ?d?d?d?d" />
                    </p>
                </div>
            </section>
            <section id="burpsuite" className="mt-8">
                <h2 className="text-xl font-bold">5. Burpsuite</h2>
                <div className="ml-3">
                    <p className="mt-2">
                        Burpsuite is a leading web vulnerability scanner and penetration
                        testing tool. It provides a suite of tools for analyzing and
                        exploiting web application vulnerabilities, including a proxy
                        server, scanner, and repeater.
                    </p>
                    <p className="mt-2">
                        <strong className="text-base">Example Commands:</strong>
                    </p>
                    <p className="mt-2 ml-4">
                        Open Burpsuite if installed via a package manager.
                        <ScriptCopyButton command="burpsuite" />
                    </p>
                    <p className="mt-2 ml-4">
                        Run Burpsuite in headless mode for automation.
                        <ScriptCopyButton command="burpsuite --headless" />
                    </p>
                    <p className="mt-2 ml-4">
                        Launch Burpsuite from the command line.
                        <ScriptCopyButton command="java -jar burpsuite.jar" />
                    </p>
                    <p className="mt-2 ml-4">
                        Launch Burpsuite with 2GB of allocated memory.
                        <ScriptCopyButton command="java -Xmx2G -jar burpsuite.jar" />
                    </p>

                </div>
            </section>
        </div >
    )
}
