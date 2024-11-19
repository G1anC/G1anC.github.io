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
    },
    {
        title: "Eve_crea.",
        description: "Design and development of a website for my paint mother",
        image: "Eve.png",
    },
    {
        title: "Camille_Bc",
        description: "Portfolio for Motion Designer Camille Bonnet Crevel",
        image: "Cami.png",
    },
    {
        title: "arEa",
        description: "Web app for creating webhooks",
        image: "area.png",
    },
    {
        title: "42sh",
        description: "Recreation of TSCH with C and Shell",
        image: "42sh.png",
    },
    {
        title: "rayTracer",
        description: "Home cooked raytracer made with C++",
        image: "raytracer.png",
    },
    {
        title: "glaDos",
        description: "Custom programing language with its compiler in Haskell",
        image: "wolfram.png",
    },
]

export default function Projects() {
    const filter = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>()
    const [active, setActive] = useState<number>(0);
    const activeIntroRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLButtonElement | null)[]>([]); // Tableau de refs

    useEffect(() => {
        tl.current = gsap.timeline()
            .to(filter.current, {opacity: 1, duration: 0.5})
            .to(".titleLetters", {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    delay: 1,
                    ease: "power4.inOut"
                }
            )
            .to(filter.current, {opacity: 0, duration: 0.5})
            .to(".titleLetters", {opacity: 0, y: 10, stagger: 0.05, duration: 1, ease: "power4.inOut"})
            .fromTo(cardRefs.current,{opacity: 0}, {opacity: 1, stagger: 0.2, duration: 0.5, ease: "power4.inOut"})
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

            <div ref={filter} className="absolute top-0 left-0 w-full opacity-1 z-[-1] rounded-b-2xl" style={{
                backgroundImage: "radial-gradient(circle, transparent, #0000ff30)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "calc(100vh - 7rem)",
            }}>
            </div>

            <div className="absolute top-0 left-0 w-full" style={{height: "calc(100vh - 7rem)"}}>
                <AllTitle/>
            </div>

            <div className="w-full h-screen flex items-center justify-center"
                 style={{height: "calc(100vh - 7rem)"}}>
                <div className={`w-full h-full flex items-center text-center text-5xl z-5 ${Selaris.className}`}>
                        <div className={"projectMenu flex flex-col w-1/4 bg-white rounded-bl-3xl h-full border-r border-r-1 border-[#A3A3A3] overflow-hidden"}>
                            {projects.map((project, i: number) => (
                                <div key={i} className={`menu-items flex flex-col items-start z-[50] justify-center cursor-pointer w-full h-full font-medium- pl-8 border-b text-black hover:pl-12 hover:text-indigo-600 transition-all duration-200 border-b-1 border-[#A3A3A3]`}
                                     onMouseEnter={() => {
                                         setActive(i)
                                         //gsap.to(activeIntroRef.current, {opacity: 0, duration: 0.5})
                                     }}
                                     onClick={() => {
                                         gsap.to(".projectMenu", {duration: 0.5, width: "0%", ease: "power3.out"})
                                         gsap.to(".content", {duration: 0.5, width: "100%", ease: "power3.out"})
                                     }}
                                >
                                    {project.title}
                                </div>
                            ))}
                        </div>
                        <div className={"content w-3/4 h-full flex flex-col rounded-xl"}>
                            <div className={`w-full p-4 pl-8 ${Halenoir.className} flex items-center uppercase text-2xl text-start text-gray-500 border-b rounded-b-xl border-b-1 border-b-[#A3A3A3]`}>
                                {active !== null && projects[active].description}
                            </div>
                            {active !== null && (
                                <div ref={activeIntroRef} className={"intro p-4 w-full"} style={{
                                    height: "calc(100vh - 7rem - 4rem)"
                                }}>
                                    <img src={`/images/projects/${projects[active].image}`} alt={projects[active].title} className={"w-full h-full object-cover rounded-xl"} />
                                </div>
                            )}
                        </div>
                </div>
            </div>
        </div>
    );
}
