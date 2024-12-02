'use client';
import localFont from "next/font/local";

import gsap from "gsap";
import FluidBack from "@/app/components/FluidBack";
import React, {Fragment} from "react";
import InfoBlock from "@/app/components/InfoBlock";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import LayoutComponent from "@/app/components/layoutComponent";

const Selaris = localFont({src: "../../../public/dirtyline.woff"});
const Halenoir = localFont({src: "../../../public/Halenoir-Black.otf"});
const imageStyle = {
    flexShrink: 0,
    width: '7rem',
    height: '7rem',
    padding: '1rem',
    opacity: '0'
};
const boxStyle = {
    display: "flex",
    gap: "1rem",
    borderRadius: "1rem",
    border: "1px solid #A3A3A3",
    boxShadow: "5px 5px 20px 0 rgba(0, 0, 0, 0.25)",
    backgroundColor: "white"
};

export default function Expertise() {
    const filter = React.useRef<HTMLDivElement>(null);
    const headerTitleRef = React.useRef<HTMLDivElement>(null);
    const titleLetters = "eXperTiSe".split("");
    const tl = gsap.timeline();
    const workingTl = gsap.timeline();
    const programingTl = gsap.timeline();
    const workingRef = React.useRef<HTMLDivElement>(null);
    const programingRef = React.useRef<HTMLDivElement>(null);

    const HeaderSection = () => {
        return (
            <>
                <div className={`w-full header-section overflow-hidden ${Halenoir.className}`} style={{height: "calc(100vh - 7rem)"}}>
                    <div className={"relative w-full h-full flex z-20 flex-col overflow-hidden gap-16 items-center justify-end"}>
                        <div className={`tracking-tight sm:text-6xl md:text-[120px] lg:text-[300px] h-full pt-32 flex justify-end items-end ${Selaris.className}`}>
                            {titleLetters.map((letter, i) => (
                                <div key={i} className="titleLetters opacity-0 flex justify-center items-end">{letter}</div>
                            ))}
                        </div>

                        <div className={` top-0 left-0 text-xs sm:text-lg uppercase flex flex-col items-center justify-center h-full w-full ${Halenoir.className}`}>
                            <div className={"flex items-start justify-between w-2/3 h-full"}>
                                <div className={"w-[50%] flex flex-col items-start h-full justify-start"}>
                                    <div className={"clipper"}><div className={"txt relative"}>i'm a 3rd year student at epitech strasbourg,</div></div>
                                    <div className={"clipper"}><div className={"txt relative"}>so i can work on different languages and technologies fairly easily.</div></div>
                                    <div className={"clipper"}><div className={"txt relative"}>i mainly specify in web, more precisely front-end ideation, design and development.</div></div>
                                </div>
                                <div className={"w-1/3 text-end flex flex-col items-end justify-start h-full"}>
                                    <div className={"clipper"}><div className={"txt relative"}>Let's check out my skills !</div></div>
                                    <div className={"clipper"}><div className={"txt relative"}>Scroll down and learn about my knowledge :)</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const ProgramingSkillsSection = () => {
        const ProgramingSkills = [
            {name: "C", icon: "/images/icons/C.png"},
            {name: "cpp", icon: "/images/icons/cpp.png"},
            {name: "haskell", icon: "/images/icons/haskell.svg"},
            {name: "shell", icon: "/images/icons/shell.png" },
            {name: "next", icon: "/images/icons/next.svg"},
            {name: "ts", icon: "/images/icons/ts.svg" },
            {name: "npm", icon: "/images/icons/npm.svg"},
            {name: "React", icon: "/images/icons/react.png" },
            { name: "html", icon: "/images/icons/html.svg" },
            { name: "tailwind", icon: "/images/icons/tailwind.svg" },
            { name: "css", icon: "/images/icons/css.svg" },
            { name: "GSAP", icon: "/images/icons/GSAP.svg" },
        ]

        return (
            <>
                <div className={"relative w-full h-full mb-0 uppercase"}>
                    <div className={"h-full flex items-center z-10 justify-end"} style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    }}>
                        <div ref={programingRef} className={"section h-5/6 w-3/4 py-2 pl-2 rounded-l-3xl border border-y-1 border-l-1 bg-white border-y-[#A3A3A3] border-l-[#A3A3A3] flex items-center gap-x-8 justify-end"} style={{
                            boxShadow: "10px 10px 20px #00000030"

                        }}>
                            <div className={"flex items-center justify-end gap-x-16 rounded-l-2xl  w-full h-full"} style={{
                                background: "linear-gradient(90deg, rgba(79, 70, 229, 0.5), rgba(255, 255, 255, 0.0))"
                            }}>
                                <div className={"progBox h-full w-full flex flex-col gap-y-8 items-end justify-center"}>
                                    <div style={boxStyle}>
                                        {ProgramingSkills.slice(0, 4).map((skill, index) => (
                                            <img
                                                key={index}
                                                src={skill.icon}
                                                alt={skill.name}
                                                className={"progIcon"}
                                                style={imageStyle}
                                            />
                                        ))}
                                    </div>
                                    <div style={boxStyle}>
                                        {ProgramingSkills.slice(4, 8).map((skill, index) => (
                                            <img
                                                key={index}
                                                src={skill.icon}
                                                className={"progIcon"}
                                                alt={skill.name}
                                                style={imageStyle}
                                            />
                                        ))}
                                    </div>
                                    <div style={boxStyle}>
                                        {ProgramingSkills.slice(8, 12).map((skill, index) => (
                                            <img
                                                key={index}
                                                src={skill.icon}
                                                className={"progIcon"}
                                                alt={skill.name}
                                                style={imageStyle}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className={"flex items-center h-4/5 justify-center"}>
                                    <div className={"flex flex-col h-full justify-center items-center"}>
                                        <div className={"bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"}></div>
                                        <div className="h-full w-[1px] bg-black"></div>
                                        <div className={"bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"}></div>
                                    </div>
                                </div>

                                <div className={"h-4/5 w-full pr-16 flex items-center justify-start"}>
                                    <div className={" w-full text-start text-2xl"}>
                                        <div className="clipper"><div className="progtxt relative">For progamming stuff,</div></div>
                                        <div className="clipper"><div className="progtxt relative">I'm very confortable with computational languages like C, C++ and Haskell.</div></div>
                                        <div className="clipper"><div className="progtxt relative">But the important part is that for the web design / development,</div></div>
                                        <div className={"clipper"}><div className={"progtxt relative"}>i mainly use npm, Next.js, React, TS, Tailwind and GSAP.</div></div>
                                        <div className="clipper"><div className="progtxt relative">And so i have competences in JS, CSS and HTML.</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const WorkingSkillsSection = () => {
        const workingSkills = [
            { name: "bash", icon: "/images/icons/bash.svg" },
            { name: "git", icon: "/images/icons/git.svg" },
            { name: "powershell", icon: "/images/icons/powershell.png" },
            { name: "github", icon: "/images/icons/github.png" },
            { name: "arch", icon: "/images/icons/arch.png" },
            { name: "linux", icon: "/images/icons/linux.svg" },
            { name: "apple", icon: "/images/icons/apple.svg" },
            { name: "windows", icon: "/images/icons/windows.webp" },
            { name: "webstorm", icon: "/images/icons/webstorm.png" },
            { name: "clion", icon: "/images/icons/clion.svg" },
            { name: "vscode", icon: "/images/icons/vscode.svg"},
            { name: "figma", icon: "/images/icons/figma.svg" },
        ]

        return (
            <>
                <div className={"w-full mb-40 h-full uppercase"}>
                    <div className={" h-full flex items-center gap-x-8 justify-center"}>
                        <div className={"h-full w-full flex items-center justify-start"} style={{
                            width: "calc(100% - 1px)",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                        }}>
                            <div ref={workingRef} className={"section h-5/6 w-3/4 py-2 pr-2 bg-white rounded-r-3xl border border-y-1 border-r-1 border-y-[#A3A3A3] border-r-[#A3A3A3]  flex items-center gap-x-8 justify-start"} style={{
                                boxShadow: "10px 10px 20px #00000030"
                            }}>
                                <div className={"flex items-center justify-end gap-x-16  rounded-r-2xl w-full h-full"} style={{
                                    background: "linear-gradient(-90deg, rgba(79, 70, 229, 0.8), rgba(255, 255, 255, 0.1))"
                                }}>
                                    <div className={"h-4/5 pl-16 w-full flex items-center justify-end"}>
                                        <div className={"w-full text-end text-2xl"}>
                                            <div className="clipper"><div className="worktxt relative">So the skills i have, simply to work on are these:</div></div>
                                            <div className="clipper"><div className="worktxt relative">I primarly work with Github, git, Bash and powershell.</div></div>
                                            <div className="clipper"><div className="worktxt relative">i also can work on every major OS (MacOS, Linux (Arch) and Windows (10 and 11)).</div></div>
                                            <div className="clipper"><div className="worktxt relative">Same for the IDE's, i mainly work on WebStorm and CLion, but can work on VSCode too.</div></div>
                                        </div>
                                    </div>

                                    <div className={"flex items-center h-4/5 justify-center"}>
                                    <div className={"flex flex-col h-full justify-center items-center"}>
                                            <div className={"bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"}></div>
                                            <div className="h-full w-[1px] bg-black"></div>
                                            <div className={"bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"}></div>
                                        </div>
                                    </div>

                                    <div className={"workBox h-full w-full flex flex-col gap-y-8 items-start justify-center"}>
                                        <div style={boxStyle}>
                                            {workingSkills.slice(0, 4).map((skill, index) => (
                                                <img
                                                    key={index}
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className={"workIcon"}
                                                    style={imageStyle}
                                                />
                                            ))}
                                        </div>
                                        <div style={boxStyle}>
                                            {workingSkills.slice(4, 8).map((skill, index) => (
                                                <img
                                                    key={index}
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className={"workIcon"}
                                                    style={imageStyle}
                                                />
                                            ))}
                                        </div>
                                        <div style={boxStyle}>
                                            {workingSkills.slice(8, 12).map((skill, index) => (
                                                <img
                                                    key={index}
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className={"workIcon"}

                                                    style={imageStyle}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(".clipper", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" });
        gsap.set(".txt", { y: 50 });
        tl.current = gsap.timeline({ paused: true })
            .to(".titleLetters", {
                duration: 1,
                opacity: 1,
                y: 0,
                delay: 1.5,
                stagger: 0.05,
                ease: "power4.inOut"
            })
            .to(".txt", { y: 0, stagger: 0.05, ease: "power4.inOut" })

        gsap.set(workingRef.current, { x: "-100%", opacity: 0 });
        gsap.set(programingRef.current, { x: "100%", opacity: 0 });
        gsap.set(".worktxt", { y: 100 });
        gsap.set(".progtxt", { y: 100 });
        gsap.to(workingRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
                trigger: workingRef.current,
                scroller: ".scroller",
                start: "top 50%",
                end: "top 30%",
                toggleActions: "play none none none",
            },
            onComplete: () => {
                gsap.to(".worktxt", {
                    duration: 1,
                    y: 0,
                    delay: -0.5,
                    stagger: 0.05,
                    ease: "power4.inOut",
                    onComplete: () => {
                        gsap.to(".workIcon", {
                            duration: 1,
                            opacity: 1,
                            delay: -0.5,
                            stagger: 0.05,
                            ease: "power4.inOut"
                        })
                    }
                })
            }
        });
        gsap.to(programingRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
                trigger: programingRef.current,
                scroller: ".scroller",
                start: "top 50%",
                end: "top 30%",
                toggleActions: "play none none none",
            },
            onComplete: () => {
                    gsap.to(".progtxt", {
                        duration: 1,
                        y: 0,
                        delay: -0.5,
                        stagger: 0.05,
                        ease: "power4.inOut",
                        onComplete: () => {
                            gsap.to(".progIcon", {
                                duration: 1,
                                opacity: 1,
                                delay: -0.5,
                                stagger: 0.05,
                                ease: "power4.inOut"
                            })
                        }
                    })
            }
        });
    });



    React.useEffect(() => {
        if (tl.current) tl.current.play();
        if (workingTl) workingTl.play();
        if (programingTl) programingTl.play();
    }, [])

    return (
        <LayoutComponent name={"exPertise"}>

        <div className={"scroller w-full relative rounded-b-2xl text-lg overflow-y-scroll overflow-x-hidden"} style={{
            height: "calc(100vh - 7rem)"
        }}>
            <div ref={filter} className="fixed top-0 left-0 z-[-10] w-full h-screen"
                 style={{
                     backgroundImage: "radial-gradient(circle, transparent, #0000ff30)"
                 }}>
            </div>

            {/*fixed fluid background */}
            {/*<div className={"fixed w-full top-0 left-0 h-full"}>*/}
            {/*    <FluidBack/>*/}
            {/*</div>*/}

            {/* content */}
            <div className={"absolute py-4 top-0 left-0 h-full w-full"}>
                <div className={"w-full px-4"}>
                    <InfoBlock b={false}
                               left={[<div className="clipper">
                                   <div className="txt relative">My skills</div>
                               </div>, <div className="clipper">
                                   <div className="txt relative">and more</div>
                               </div>]}
                               center={[<div className="clipper">
                                   <div className="relative txt">from EPITECH</div>
                               </div>]}
                               right={[<div className="clipper">
                                   <div className="relative txt">to self study</div>
                               </div>, <div className={"clipper"}>
                                   <div className={"relative txt"}>and interests</div>
                               </div>]}/>
                </div>

                <HeaderSection/>
                <WorkingSkillsSection/>
                <ProgramingSkillsSection/>

                <div className={"w-full px-4 pb-4"}>
                    <InfoBlock b={true}
                               left={[<div className="clipper">
                                   <div className="txt relative">Check out</div>
                               </div>,]}
                               center={[<div className="clipper">
                                   <div className="relative txt">other pages</div>
                               </div>,]}
                               right={[<div className="clipper">
                                   <div className="relative txt">for contexts</div>
                               </div>]}/>
                </div>
            </div>
        </div>
        </LayoutComponent>
    )
}