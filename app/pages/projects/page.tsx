'use client';

import React, {useEffect, useState, useRef} from "react";
import localFont from "next/font/local";
import {gsap} from "gsap";

const Selaris = localFont({src: "../../../public/dirtyline.woff"});
const Halenoir = localFont({src: "../../../public/Halenoir-Black.otf"});
const pixel = localFont({src: "../../../public/pixel.otf"});

const projects = [
    {
        title: "pRev_Folio",
        description: "Previous portfolio made with Next.js, React and GSAP",
        image: "portfolio.png",
        color: "text-white"
    },
    {
        title: "Eve_crea.",
        description: "Design and development of a website for my paint mother",
        image: "Eve.png",
        color: "text-white"

    },
    {
        title: "Camille_Bc",
        description: "Portfolio for Motion Designer Camille Bonnet Crevel",
        image: "Cami.png",
        color: "text-black"

    },
    {
        title: "arEa",
        description: "Web app for creating webhooks",
        image: "area.png",
        color: "text-white"

    },
    {
        title: "42sh",
        description: "Recreation of TSCH with C and Shell",
        image: "42sh.png",
        color: "text-white"

    },
    {
        title: "rayTracer",
        description: "Home cooked raytracer made with C++",
        image: "raytracer.png",
        color: "text-white"

    },
    {
        title: "glaDos",
        description: "Custom programing language with its compiler in Haskell",
        image: "wolfram.png",
        color: "text-white"

    },
]

export default function Projects() {
    const tl = useRef<gsap.core.Timeline>()
    const [active, setActive] = useState<number | null>(null);
    const activeIntroRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef(null);
    const projectTitleRef = useRef(null);


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
            <div className="w-full h-screen flex items-center justify-center"
                 style={{height: "calc(100vh - 7rem)"}}>
                <div className={`w-full h-full flex items-center text-center text-5xl z-5 ${Selaris.className}`}>
                        <div className={"projectMenu flex flex-col w-1/4 bg-white rounded-bl-3xl h-full border-r border-r-1 border-[#A3A3A3] overflow-hidden"}>
                            {projects.map((project, i: number) => (
                                <div key={i} className={`flex flex-col items-start z-[50] justify-center cursor-pointer w-full h-full font-medium- pl-8 border-b text-black hover:pl-12 hover:text-indigo-600 transition-all duration-200 border-b-1 border-[#A3A3A3]`}
                                     onMouseEnter={() => {
                                         setActive(i)
                                         gsap.set(imageRef.current, {opacity: 1});
                                     }}
                                >
                                    <div className={"opacity-0 menu-items"}>
                                        {project.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    <div className={"content relative w-3/4 h-full flex flex-col rounded-xl"}>
                        <div className="absolute top-0 left-0 w-full" style={{height: "calc(100vh - 7rem)"}}>
                            <AllTitle/>
                        </div>
                        {active !== null && (
                            <div ref={activeIntroRef} className={"intro relative p-4 w-full"} style={{
                                height: "calc(100vh - 7rem )"
                            }}>
                                <div className={"w-full h-full rounded-xl overflow-hidden z-10"}>
                                    <img ref={imageRef} src={`/images/projects/${projects[active].image}`}
                                         alt={projects[active].title}
                                         className={"w-full h-full object-cover opacity-0 project-image rounded-xl"}></img>
                                </div>
                                <div ref={projectTitleRef}
                                     className={`${Halenoir.className} ${projects[active].color} opacity-0 gap-y-8 uppercase w-full h-full flex flex-col items-center justify-center absolute top-0 left-0`}
                                     onMouseEnter={() => {
                                         gsap.to(imageRef.current, {filter: "blur(20px)", width: "120%", height: "120%", duration: 0.5, ease: "power1.out"})
                                         gsap.to(projectTitleRef.current, {opacity: 1, duration: 0.1})
                                     }}
                                     onMouseLeave={() => {
                                         gsap.to(imageRef.current, {filter: "blur(0px)", width: "100%", height: "100%", duration: 0.5, ease: "power1.out"})
                                         gsap.to(projectTitleRef.current, {opacity: 0, duration: 0.1})

                                     }}
                                >
                                    <div className={"mx-32"}>
                                        {projects[active].description}
                                    </div>
                                    <div className={"text-2xl"}>
                                        know more of this project
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
