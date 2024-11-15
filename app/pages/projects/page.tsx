'use client';

import React, {useEffect, useState, useRef} from "react";
import localFont from "next/font/local";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FluidBack from "@/app/components/FluidBack";
gsap.registerPlugin(ScrollTrigger);

const Selaris = localFont({src: "../../../public/dirtyline.woff"});
const Halenoir = localFont({src: "../../../public/Halenoir-Black.otf"});

const projects = [
    {
        title: "Web desiGn",
        description: "Designs i've worked on with Figma WebFlow and GSAP",
        image: "Eve.png",
    },
    {
        title: "wEb DeV",
        description: "Coded websites with Next.js, React and Typescript",
        image: "area.png",
    },
    {
        title: "Oop",
        description: "Object oriented programming projects made with C++",
        image: "raytracer.png",
    },
    {
        title: "pRo | fuN",
        description: "Functional and procedural projects made with Haskell and C",
        image: "wolfram.png",
    },
]

export default function Projects() {
    const filter = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>()
    const [active, setActive] = useState<number | null>(0);
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



    const Card = ({index, txt, description}: { index: number, txt: string, description: string }) => {
        const background = useRef<HTMLDivElement>(null);
        const backgroundBlur = useRef<HTMLDivElement>(null);
        useEffect(() => {
            gsap.to(backgroundBlur.current, {opacity:  0, duration: 21})
            gsap.to(background.current, {opacity: active === index ? 0.2 : 0, duration: 1})
        }, [active]);

        return (
            <button
                key={index}
                ref={el => {cardRefs.current[index] = el}}
                className={`relative card w-[30rem] hover:w-[45rem] text-5xl hover:text-8xl overflow-hidden origin-left hover:origin-left hover:transition-[width 0.65s cubic-bezier(0.2, 0.5, 0.02, 0.99)] h-full ${index !== 3 && "border border-r-[#A3A3A3]"} flex z-30 flex-col items-center justify-center`}
                style={{ transition: "all 0.65s cubic-bezier(0.2, 0.5, 0.02, 0.99)", transitionDuration: "0.65s", }}
                onMouseEnter={() => {setActive(index)}}
                onMouseLeave={() => {setActive(null)}}
            >
                <div ref={background} key={index} className={"absolute top-0 left-0 w-full h-full z-[-1] opacity-0"} style={{ backgroundImage: `url(/images/projects/${projects[index].image})`, backgroundPosition: "center"}} />
                <div ref={backgroundBlur} key={index} className={"w-full h-full top-0 left-0 absolute blur-xl z-1"} />
                {txt}
                <div className={`${Halenoir.className} uppercase text-xl tracking-tightest w-[20rem]`}>{description}</div>
            </button>
        )
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
                        {projects.map((project, i) => {
                            return (
                                <Card key={i} index={i} txt={project.title} description={project.description}/>
                            )
                        })}
                </div>
            </div>
        </div>
    );
}
