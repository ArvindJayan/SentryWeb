"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Input } from '../ui/input';
import { env } from 'process';

const initAPI = env.SENTRY_SERVER_API || 'http://34.9.32.88:8080';

export const Terminal2: React.FC = () => {
    const [API_URL, setAPI_URL] = useState<string>(initAPI);
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [statusText, setStatusText] = useState<string>('Disconnected');
    const [terminalContent, setTerminalContent] = useState<string>('');
    const [command, setCommand] = useState<string>('');
    const [outputPollingInterval, setOutputPollingInterval] = useState<NodeJS.Timeout | null>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    // Update the connection status
    const updateStatus = async () => {
        try {
            const response = await fetch(`${API_URL}/status`);
            const data = await response.json();
            setIsConnected(data.connected);
            if (data.connected) {
                setStatusText('Connected');
                if (!outputPollingInterval) {
                    const interval = setInterval(fetchOutput, 1000);
                    setOutputPollingInterval(interval);
                }
            } else {
                setStatusText('Disconnected');
                if (outputPollingInterval) {
                    clearInterval(outputPollingInterval);
                    setOutputPollingInterval(null);
                }
            }
        } catch (error) {
            console.error('Error fetching status:', error);
            setStatusText('API Error');
        }
    };

    // Send a command to the server
    const sendCommand = async () => {
        const trimmedCommand = command.trim();
        if (!trimmedCommand) return;
        try {
            const response = await fetch(`${API_URL}/command`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ command: trimmedCommand }),
            });
            const data = await response.json();
            if (response.ok) {
                appendToTerminal(`$ ${trimmedCommand}\n`);
                setCommand('');
            } else {
                appendToTerminal(`Error: ${data.error}\n`);
            }
        } catch (error) {
            console.error('Error sending command:', error);
            appendToTerminal('Error: Could not send command to the server\n');
        }
    };

    // Fetch output from the server
    const fetchOutput = async () => {
        try {
            const response = await fetch(`${API_URL}/output`);
            const data = await response.json();
            if (response.ok && data.outputs && data.outputs.length > 0) {
                data.outputs.forEach((output: string) => {
                    appendToTerminal(output + '\n');
                });
            }
        } catch (error) {
            console.error('Error fetching output:', error);
        }
    };

    // Clear the terminal
    const clearTerminal = async () => {
        setTerminalContent('');
        try {
            await fetch(`${API_URL}/clear`, { method: 'POST' });
        } catch (error) {
            console.error('Error clearing queues:', error);
        }
    };

    // Append text to the terminal and scroll to bottom
    const appendToTerminal = (text: string) => {
        setTerminalContent((prev) => prev + text + '\n');
        setTimeout(() => {
            if (terminalRef.current) {
                terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
            }
        }, 0);
    };

    // Event handlers
    const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendCommand();
        }
    };

    const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommand(e.target.value);
    };

    // Initial status check and periodic updates
    useEffect(() => {
        updateStatus();
        const statusInterval = setInterval(updateStatus, 5000);
        return () => {
            clearInterval(statusInterval);
            if (outputPollingInterval) clearInterval(outputPollingInterval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-full h-full mx-auto">
            <div className="bg-background rounded-lg p-6">
                <div className="flex justify-between items-center mb-5 p-3 bg-foreground/5 rounded-lg">
                    <div className="flex items-center">
                        <span
                            className={`inline-block w-3 h-3 rounded-full mr-2 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}
                            id="status-light"
                        ></span>
                        <span id="status-text" className="font-medium">{statusText}</span>
                        <input
                            type="text"
                            id="api-url"
                            placeholder="API URL"
                            className="ml-5 flex-grow p-2 rounded-lg mr-2 bg-foreground/5 text-foreground/70 font-mono focus:outline-none focus:ring-2 focus:ring-teal-500"
                            value={API_URL}
                            onChange={(e) => setAPI_URL(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            id="refresh-status"
                            onClick={updateStatus}
                            className="px-4 py-2 bg-teal-600 text-background rounded-lg font-semibold hover:bg-teal-700 transition duration-200"
                        >
                            Refresh Status
                        </button>
                    </div>
                </div>
                <div
                    className="bg-foreground/90 dark:bg-foreground/10 text-background/90 dark:text-foreground/80 p-4 rounded-lg h-96 overflow-y-auto font-mono mb-5 backgroundspace-pre-wrap"
                    id="terminal"
                    ref={terminalRef}
                    style={{ minHeight: '200px' }}
                >
                    {terminalContent.split('\n').map((content, index) => (
                        <div key={index} className="whitespace-pre-wrap">
                            {content}
                        </div>
                    ))}
                </div>
                <div className="flex mb-4">
                    <Input
                        type="text"
                        id="command"
                        placeholder="Enter command.."
                        autoComplete="off"
                        value={command}
                        onChange={handleCommandChange}
                        onKeyPress={handleInputKeyPress}
                        className="flex-grow p-2 rounded-lg mr-2 bg-foreground/5 text-foreground/70 font-mono focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <button
                        className="send-btn px-4 py-2 bg-teal-600 text-background rounded-lg font-semibold hover:bg-teal-700 transition duration-200"
                        id="send-command"
                        onClick={sendCommand}
                    >
                        Send
                    </button>
                    <button
                        className="clear-btn px-4 py-2 bg-red-500 text-background rounded-lg font-semibold ml-2 hover:bg-red-600 transition duration-200"
                        id="clear-terminal"
                        onClick={clearTerminal}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Terminal2;