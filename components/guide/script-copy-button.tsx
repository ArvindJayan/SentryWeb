import { ScriptCopyBtn } from "@/components/ui/script-copy-btn";

export function ScriptCopyButton({ command }: { command: string }) {
    return (
        <ScriptCopyBtn
            codeLanguage="shell"
            lightTheme="nord"
            darkTheme="vitesse-dark"
            command={command}
        />
    );
}
