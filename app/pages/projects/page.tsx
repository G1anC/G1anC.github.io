'use client';

import React, {useEffect, useState, useRef} from "react";
import localFont from "next/font/local";
import {gsap} from "gsap";
import FluidBack from "@/app/components/FluidBack";

const Selaris = localFont({src: "../../../public/dirtyline.woff"});
const Halenoir = localFont({src: "../../../public/Halenoir-Black.otf"});
const pixel = localFont({src: "../../../public/pixel.otf"});


const iconPath = "/images/icons/";
const projects = [
    {
        title: "pRev_Folio",
        description: "Previous folio",
        image: "portfolio.png",
        icons: ["react.png", "css.svg", "GSAP.svg"],
        color: "text-white"
    },
    {
        title: "Eve_crea.",
        description: "website for Evelyne S.",
        image: "Eve.png",
        icons: ["figma.svg"],
        color: "text-white"

    },
    {
        title: "Camille_Bc",
        description: "folio for Camille B.C.",
        image: "Cami.png",
        icons: ["Figma.svg"],
        color: "text-black"

    },
    {
        title: "arEa",
        description: "Webhooks manager",
        image: "area.png",
        icons: ["npm.svg", "react.png", "ts.svg"],
        color: "text-white"

    },
    {
        title: "42sh",
        description: "Recreation of TSCH",
        image: "42sh.png",
        icons: ["C.png", "shell.png"],
        color: "text-white"

    },
    {
        title: "rayTracer",
        description: "Home cooked raytracer",
        image: "raytracer.png",
        icons: ["cpp.svg", "clion.svg"],
        color: "text-white"

    },
    {
        title: "glaDos",
        description: "Custom language with compiler",
        icons: ["haskell.svg"],
        image: "wolfram.png",
        color: "text-white"

    },
]

export default function Projects() {
    const tl = useRef<gsap.core.Timeline>()
    const [active, setActive] = useState<number | null>(null);
    const activeIntroRef = useRef(null);
    const imageRef = useRef(null);
    const imageHolderRef = useRef(null);
    const projectTitleRef = useRef(null);
    const iconsRef = useRef(null);


    useEffect(() => {
        tl.current = gsap.timeline()
            .to(".titleLetters", {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    delay: 1,
                    ease: "power4.inOut"
                }
            )
            .to(".titleLetters", {opacity: 0, y: 10, stagger: 0.05, duration: 1, ease: "power4.inOut"})
            .to(".menu-items", {opacity: 1, stagger: 0.1, duration: 0.5})
            .to("project-image", {opacity: 1, duration: 0.5})
    }, [])

    const AllTitle = () => {
        const titleRef = useRef<HTMLDivElement>(null);
        const letters = "ProJectS".split("");

        return (
            <div className="title w-full h-full flex items-center justify-center">
                <div ref={titleRef} className={`tracking-tight flex justify-center items-center ${Selaris.className}`}
                     style={{fontSize: "clamp(250px, calc(8.33vw - 160px), 500px)"}}>
                    {letters.map((letter, i) => {
                        return <div key={i} className="titleLetters opacity-0 flex justify-center items-center">{letter}</div>
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex-1 relative " style={{height: "calc(100vh - 7rem)"}}>
            <div className={"absolute top-0 left-0 w-full h-full"}>
                <FluidBack/>
            </div>
            <div className="w-full h-screen flex items-center justify-center"
                 style={{height: "calc(100vh - 7rem)"}}>
                <div className={`w-full h-full flex items-center text-center text-5xl z-5 ${Selaris.className}`}>
                        <div className={"projectMenu flex flex-col w-1/4 rounded-bl-3xl h-full border-r border-r-1 border-[#A3A3A3] overflow-hidden"}>
                            {projects.map((project, i: number) => (
                                <div key={i} className={`menu-items opacity-0 flex items-center z-[50] justify-start w-full h-full pl-8 border-b text-black hover:pl-12 hover:text-indigo-600 transition-all duration-200 border-b-1 border-[#A3A3A3]`}
                                     onMouseEnter={() => {
                                         setActive(i)
                                         gsap.set(imageRef.current, {opacity: 1});
                                     }}
                                >
                                    <div className={"flex w-full flex-col items-start justify-center"}>
                                        <>{project.title}</>
                                        <div className={`${Halenoir.className} uppercase text-start text-sm`}>{project.description}</div>
                                    </div>
                                    <div className={"pr-4 gap-x-2 flex items-center justify-center h-full"}>
                                    </div>
                                </div>
                            ))}
                        </div>
                    <div className={"content relative w-3/4 h-full flex flex-col rounded-xl"}>
                        <div className="absolute top-0 left-0 w-full" style={{height: "calc(100vh - 7rem)"}}>
                            <AllTitle/>
                        </div>


                        {active !== null && (
                            <>
                                <div ref={activeIntroRef} className={"intro relative p-4 w-full"} style={{ height: "calc(100vh - 7rem )" }}>
                                    <div ref={imageHolderRef} className={"image-holder w-full h-full rounded-xl overflow-hidden"}>
                                        <div className={`w-${(projects[active].icons.length * 4)} p-2 absolute z-2 top-0 gap-x-4 left-0 z-10 bg-white overflow-hidden rounded-br-3xl border-b border-r border-b-1 border-[#A3A3A3]  flex items-start justify-center`}>
                                            {projects[active].icons.map((icon, i) => (
                                                        <div key={i} className={"icons rounded-xl w-16 h-16 bg-contain bg-no-repeat bg-center"}
                                                             style={{backgroundImage: `url(${iconPath + icon})`}}></div>
                                            ))}
                                        </div>
                                        <button ref={imageRef}
                                                className={"w-full h-full opacity-0 relative project-image rounded-xl cursor-pointer"}
                                                style={{
                                                    backgroundImage: `url(/images/projects/${projects[active].image})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center"
                                                }}
                                                onMouseEnter={() => {
                                                    gsap.to(imageHolderRef.current, {borderRadius: 0, duration: 0.2, ease: "power1.in"})
                                                    gsap.to(imageRef.current, {borderRadius: 0, filter: "blur(20px)", duration: 0.2, ease: "power1.in"})
                                                    gsap.to(activeIntroRef.current, {padding: 0, duration: 0.2, ease: "power1.in"})
                                                    gsap.to(projectTitleRef.current, {opacity: 1, duration: 0.1})
                                                }}
                                                onMouseLeave={() => {
                                                    gsap.to(imageHolderRef.current, {borderRadius: "12px", duration: 0.1})
                                                    gsap.to(imageRef.current, {borderRadius: "12px", filter: "blur(0px)", duration: 0.1})
                                                    gsap.to(activeIntroRef.current, {padding: "16px", duration: 0.1})
                                                    gsap.to(projectTitleRef.current, {opacity: 0, duration: 0.1})
                                                }}
                                                onClick={() => {
                                                    window.location.href = `/projects/${projects[active].title}`
                                                }}
                                        ></button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
