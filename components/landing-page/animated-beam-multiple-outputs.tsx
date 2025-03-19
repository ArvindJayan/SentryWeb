"use client";

import React, { forwardRef, useRef } from "react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import { DesktopTower, Laptop } from "@phosphor-icons/react";
import { Monitor, User } from "@phosphor-icons/react/dist/ssr";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
    className,
}: {
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10",
                className,
            )}
            ref={containerRef}
        >
            <div className="flex size-full max-w-lg text-teal-600 stroke-2 text-xl flex-row items-stretch justify-between gap-10">
                <div className="flex flex-col justify-center text-foreground">
                    <Circle ref={div7Ref}>
                        <User className="text-teal-600 stroke-2 text-xl" />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={div6Ref} className="size-16">
                        <DesktopTower />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <Circle ref={div1Ref}>
                        <Laptop />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <Monitor />
                    </Circle>
                    <Circle ref={div3Ref}>
                        <Laptop />
                    </Circle>
                    <Circle ref={div4Ref}>
                        <Monitor />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <Laptop />
                    </Circle>
                </div>
            </div>

            {/* AnimatedBeams */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div7Ref}
            />
        </div>
    );
}