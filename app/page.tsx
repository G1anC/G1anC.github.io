'use client';

import Bottom from "@/app/components/bottom";
import Background from "./components/Background";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import localFont from "next/font/local";
import FluidBack from "@/app/components/FluidBack";


const Selaris = localFont({
    src: "../public/dirtyline.woff",
});

const Lovelace = localFont({
    src: "../public/pixel.otf",
});

export default function Home() {
    const titleRef = useRef<HTMLDivElement>(null);
    const subTitleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.to(titleRef.current, {
            duration: 0.5,
            opacity: 1,
            y: -10,
        });
        gsap.to(subTitleRef.current, {
            duration: 0.5,
            opacity: 1,
            y: 10,
            delay: 0.2,
        });
    }, []);

    const AllTitle = () => {
        const Subtitle = () => {
            return (
                <div ref={subTitleRef} className={"opacity-0 flex items-center mt-[-420px] h-1/2 justify-center"}>
                    <p
                        className={`text-[200px] tracking-tighter capitalize flex justify-center px-4 items-center h-full ${Lovelace.className}`}
                        style={{
                            WebkitTextStroke: "1px rgba(0,0,0, 0.7)",
                            WebkitTextFillColor: "transparent",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            backgroundImage: "radial-gradient(circle, #00000070, #000000)",
                        }}
                    >
                        Steiniger
                    </p>
                </div>
            )
        }
        const Title = () => {
            return (
                <div ref={titleRef} className={"opacity-0 h-full tracking-tighter"}>
                    <p className={`text-[600px] h-full flex justify-center items-center ${Selaris.className}`}>
                        nOAh
                    </p>
                </div>
            )

        }
        return (
            <div className={"flex w-full h-full flex-col flex-1 items-center justify-center"}>
                <Title/>
                <Subtitle/>
            </div>
        )
    }

    return (
        <>
            <div className={`overflow-hidden relative flex flex-col h-full rounded-b-2xl w-full items-center justify-center`}>
                <FluidBack/>
                <div className={"absolute top-0 left-0 w-full h-full bg-[#8888ff10]"}></div>
                <div className=" relative p-4 w-full h-full flex flex-col items-center justify-center">
                    <div className={"w-full h-[10%]"}>Web Designer / Creator</div>
                    <AllTitle/>
                    <div className={"text-end w-full h-[10%] flex items-end justify-end"}>For a lot of Years</div>
                </div>
            </div>
        </>
    );
}
