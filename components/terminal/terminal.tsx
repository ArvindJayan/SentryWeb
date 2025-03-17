"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function Terminal() {
    const [input, setInput] = useState("")
    const [history, setHistory] = useState<{ type: string; text: string }[]>([])
    const [commandHistory, setCommandHistory] = useState<string[]>([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const inputRef = useRef<HTMLInputElement>(null)
    const terminalRef = useRef<HTMLDivElement>(null)

    // Available commands
    const commands: Record<string, (args: string[]) => string> = {
        help: () => {
            return `Available commands:
  help - Show this help message
  clear - Clear the terminal
  echo [text] - Echo the text
  date - Show current date and time
  whoami - Show current user
  ls - List files and directories
  pwd - Print working directory`
        },
        clear: () => {
            setHistory([])
            return ""
        },
        echo: (args) => {
            return args.join(" ")
        },
        date: () => {
            return new Date().toString()
        },
        whoami: () => {
            return "user"
        },
        ls: () => {
            return "Documents  Downloads  Pictures  Music  Videos"
        },
        pwd: () => {
            return "/home/user"
        },
    }

    // Process command
    const processCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim()
        if (!trimmedCmd) return

        // Add command to history
        setCommandHistory((prev) => [...prev, trimmedCmd])
        setHistoryIndex(-1)

        // Parse command and arguments
        const parts = trimmedCmd.split(" ")
        const command = parts[0].toLowerCase()
        const args = parts.slice(1)

        // Execute command
        let output = ""
        if (command in commands) {
            output = commands[command](args)
        } else {
            output = `Command not found: ${command}. Type 'help' for available commands.`
        }

        // Update history
        setHistory((prev) => [...prev, { type: "command", text: trimmedCmd }, { type: "output", text: output }])

        // Clear input
        setInput("")
    }

    // Handle key press
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            processCommand(input)
        } else if (e.key === "ArrowUp") {
            e.preventDefault()
            if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1
                setHistoryIndex(newIndex)
                setInput(commandHistory[commandHistory.length - 1 - newIndex])
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault()
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1
                setHistoryIndex(newIndex)
                setInput(commandHistory[commandHistory.length - 1 - newIndex])
            } else if (historyIndex === 0) {
                setHistoryIndex(-1)
                setInput("")
            }
        }
    }

    // Auto-scroll to bottom
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }, [history])

    // Focus input on click
    const focusInput = () => {
        inputRef.current?.focus()
    }

    // Auto-focus on mount
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <div className="flex justify-center items-center h-[75vh] overflow-hidden">
            <div
                className="w-3/4 h-full  bg-foreground/90 text-background/90 font-mono rounded-md border border-foreground/60 shadow-lg"
                onClick={focusInput}
            >
                <div className="flex items-center bg-background/15 px-4 py-2 border-b border-foreground/60">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-sm text-background/70">Terminal</div>
                </div>

                <div ref={terminalRef} className="p-4 h-[calc(100%-40px)] overflow-y-auto">
                    <div className="text-background/80 mb-4">Welcome to Terminal v1.0.0 Type 'help' to see available commands.</div>

                    {history.map((entry, index) => (
                        <div key={index} className="mb-2">
                            {entry.type === "command" ? (
                                <div className="flex">
                                    <span className="text-green-500 mr-2">user@sentryweb:~$</span>
                                    <span>{entry.text}</span>
                                </div>
                            ) : (
                                <div className="ml-6 whitespace-pre-wrap text-background/90">{entry.text}</div>
                            )}
                        </div>
                    ))}

                    <div className="flex items-center">
                        <span className="text-green-500 mr-2">user@sentryweb:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent outline-none border-none text-background/90 caret-background/20"
                            aria-label="Terminal input"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

