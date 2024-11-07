'use client';

import Bottom from "@/app/components/bottom";
import Background from "./components/Background";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import localFont from "next/font/local";


const Selaris = localFont({
    src: "../public/Selaris.woff",
});

const Lovelace = localFont({
    src: "../public/Lovelace.woff",
});

export default function Home() {
    const circle2Ref = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const subTitleRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    const PortfolioRef = useRef<HTMLDivElement>(null);
    const [closeRef, setCloseRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.to(titleRef.current, {
            duration: 0.5,
            opacity: 1,
            y: 10,
        });
        gsap.to(subTitleRef.current, {
            duration: 0.5,
            opacity: 1,
            y: 10,
            delay: 0.2,
        });
    }, []);

    const Circles = () => {
        return (
            <>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="relative w-[85%] pb-[85%] flex justify-center items-center mx-auto ">
                        <div
                            ref={circleRef}
                            className="rotate-180 w-[103%] pb-[103%] rounded-full opacity-40 absolute border-b rounded-br-full rounded-bl-full"
                        ></div>
                    </div>
                </div>
                <div className={"absolute bottom-0 w-full h-full"}>
                    <div className="relative w-[85%] pb-[85%] flex justify-center items-center mx-auto mt-[75%]">
                        <div
                            ref={circle2Ref}
                            className="rotate-0 w-[85%] pb-[85%] opacity-40 rounded-full absolute border-b rounded-br-full rounded-bl-full"
                        ></div>
                    </div>
                </div>
            </>
    )
}

    const Subtitle = () => {
        return (
            <div ref={subTitleRef} className={"opacity-0 mt-[60px] flex items-center justify-center"}>
                <p
                    className={`text-[200px] h-[300px] tracking-tighter w-[200%] p-5 leading-[75%] bg-[radial-gradient(circle, rgba(255,255,255,0.3), rgba(255,255,255,0.1))] ${Lovelace.className}`}
                    style={{
                        WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                        WebkitTextFillColor: "transparent",
                        WebkitBackgroundClip: "text",
                        display: "inline-block",
                        backgroundClip: "text",
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
                    }}
                >
                    Steiniger
                </p>
            </div>
        )
    }

    const Title = () => {
        return (
            <div ref={titleRef} className={"opacity-0 tracking-tighter mt-[180px]"}>
                <p className={`text-[450px] h-full ${Selaris.className}`}>
                    noah
                </p>
            </div>
        )

    }

    return (
        <>
            <div className={`overflow-hidden relative`}>
                <Background/>
                <div className="w-screen h-screen flex flex-col items-center justify-center">
                    <Title/>
                    <Subtitle/>
                </div>
                <Bottom title={"Portfolio"}/>
            </div>
        
        </>
    );
}
