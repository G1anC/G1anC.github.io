'use client';

import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import localFont from "next/font/local";
import FluidBack from "@/app/components/FluidBack";
import { useGSAP } from "@gsap/react";
import InfoBlock from "@/app/components/InfoBlock";

const Selaris = localFont({ src: "../public/dirtyline.woff" });
const Pixel = localFont({ src: "../public/pixel.otf" });



const AllTitle = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const subTitleRef = useRef<HTMLDivElement>(null);
    const letters = "nOAh".split("");


    useEffect(() => {

        gsap.set(".titleLetters", { opacity: 0, y: 10 });
        gsap.fromTo(subTitleRef.current, {opacity: 0, y: 0}, { duration: 0.5, opacity: 1, y: 10, delay: 2 });
        gsap.to(".titleLetters", { duration: 1, opacity: 1, y: 0, stagger: 0.05, delay: 2.5, ease: "power4.inOut" });
    }, []);
    return (
        <div className="w-full h-full flex items-center flex-1 justify-center">
            <div className={"h-full flex-col flex items-center justify-between"}>

                <div className={"flex flex-col items-center h-full justify-start"}>
                    <div className={"flex flex-col h-full items-center"}>
                        <div className={"bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"}></div>
                        <div className="h-full w-[1px] bg-black"></div>
                    </div>
                </div>

                <div className={"my-8"}>20</div>

                <div className={"flex flex-col items-center h-full justify-start"}>
                    <div className={"flex flex-col h-full items-center"}>
                        <div className="h-full w-[1px] bg-black"></div>
                        <div className={"bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"}></div>
                    </div>
                </div>
            </div>

            <div className="flex w-full h-full flex-col items-center justify-end">
                <div ref={titleRef} className={`tracking-tighter flex justify-center items-center ${Selaris.className}`}
                     style={{
                         fontSize: "clamp(400px, calc(8.33vw - 160px), 600px)"
                     }}>
                    {letters.map((letter, i) => {
                        return <div key={i} className="titleLetters flex justify-center items-center">{letter}</div>
                    })}
                </div>
                <div ref={subTitleRef} className="opacity-0 flex items-center h-1/2 justify-center">
                    <p className={`tracking-tighter capitalize flex justify-center px-4 items-center h-full ${Pixel.className}`}
                        style={{
                            WebkitTextStroke: "1px rgba(0,0,0, 0.7)",
                            WebkitTextFillColor: "transparent",
                            marginTop: "clamp(-20px, 2vw, -40px)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            backgroundImage: "radial-gradient(circle, #00000070, #000000)",
                            fontSize: "clamp(150px, 10vw, 200px)"
                    }}>
                        Steiniger
                    </p>
                </div>
            </div>
            <div className={"h-full flex-col flex items-center justify-between"}>

                <div className={"flex flex-col items-center h-full justify-start"}>
                    <div className={"flex flex-col h-full items-center"}>
                        <div className={"bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"}></div>
                        <div className="h-full w-[1px] bg-black"></div>
                    </div>
                </div>

                <div className={"my-8"}>24</div>

                <div className={"flex flex-col items-center h-full justify-start"}>
                    <div className={"flex flex-col h-full items-center"}>
                        <div className="h-full w-[1px] bg-black"></div>
                        <div className={"bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function Home() {
    const container = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>();
    const filter = useRef<HTMLDivElement>(null);
    const effect = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useGSAP(() => {
        gsap.set(".clipper", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" });
        gsap.set(".txt", { y: 50 });
        tl.current = gsap.timeline({ paused: true })
            .to(".txt", { duration: 1, y: 0, delay: 1.25, stagger: 0.05, ease: "power4.inOut" })
    }, { scope: container });

    useEffect(() => {
        if (tl.current) tl.current.play();
        filter.current && gsap.fromTo(filter.current, { opacity: 0}, { opacity: 1, duration: 0.5, delay: 1  });
        effect.current && gsap.fromTo(effect.current, { opacity: 0 }, { opacity: 1, duration: 4, delay: 2 });
    }, []);


    return (
        <div ref={container} className="overflow-hidden relative flex flex-col h-full rounded-b-2xl w-full items-center justify-center">
            <div ref={effect} className={"absolute top-0 left-0 w-full h-full"}>
                <FluidBack />
            </div>
            <div ref={filter} className="absolute top-0 left-0  w-full h-full" style={{backgroundImage: "radial-gradient(circle, transparent, #0000ff30)" }}></div>
            <div className="relative p-4 w-full h-full flex flex-col items-center justify-center">
                <InfoBlock b={false} left={[
                    <div className="clipper"><div className="txt relative">Web Designer | Creator</div></div>,
                    <div className="clipper"><div className="txt relative">UI | UX since 2023</div></div>,
                ]} center={[
                    <div className="clipper"><div className="relative txt">Student at</div></div>,
                    <div className="clipper"><pre className="relative txt">48°35'1.277"N / 7°44'58.776"E</pre></div>,
                ]} right={[
                    <div className="clipper">
                        <div className="relative txt">Final version,</div>
                    </div>,
                    <div className={"clipper"}>
                        <div className={"relative txt"}>until it bothers me x)</div>
                    </div>
                ]}/>

                <AllTitle/>

                <InfoBlock b={true} left={[
                    <div className={"relative txt"}>Made with Figma,</div>,
                    <div className={"relative txt"}>GSAP, Next.ts and React</div>,
                ]} center={[
                    <div className="txt" key={0}><pre>11 / 01 / 2004</pre></div>
                ]} right={[
                    <div className="txt" key={0}>+33 7 68 88 48 18</div>, "noah.steiniger.pro@gmail.com"
                ]} />
            </div>
        </div>
    );
}
