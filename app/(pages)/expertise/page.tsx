'use client';
import localFont from "next/font/local";

import FluidBack from "@/app/components/FluidBack";
import React, {Fragment} from "react";

const Selaris = localFont({src: "../../../public/dirtyline.woff"});
const Halenoir = localFont({src: "../../../public/Halenoir-Black.otf"});

const Lines = ({pos}: {pos: {pos: number, left: boolean}}) => {
    return (
        <div className={`h-full z-[1] w-[6px] flex  flex-col ${pos.left ? "left-0 ml-4": "right-0 mr-4"} ${pos.pos === 0 ? "mt-4" : (pos.pos === 2 ? "pb-4" : 0)} items-center absolute justify-center`}>
            {pos.pos === 0 && <div className={"bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"}></div>}
            <div className={`top-0 left-0 w-[1px] h-full bg-black`} style={{
                top: `calc((100vh - 7rem) * ${pos.pos})`
            }}/>
            {pos.pos === 2 && <div className={"bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"}></div>}

        </div>
    )
}


// FIRST SECTION

const HeaderSection = () => {
    return (
        <>
            <Lines pos={{pos: 0, left: true}}/>
            <Lines pos={{pos: 0, left: false}}/>

            <div className={`w-full header-section ${Halenoir.className}`} style={{
                height: "calc(100vh - 7rem)"
            }}>
                <div className={"relative w-full h-full flex z-20 flex-col gap-16 items-center justify-center"} >
                    <div
                        className={`absolute top-0 left-0 text-[320px] pb-12 flex items-center justify-center h-full w-full ${Selaris.className}`}>
                        eXperTiSe
                    </div>

                    <div
                        className={`absolute top-0 left-0 text-lg pt-12 uppercase flex flex-col items-center justify-center h-full w-full ${Halenoir.className}`}>
                        <div className={"w-full h-2/3"}></div>
                        <div className={"flex items-center justify-between w-2/3 h-1/3"}>
                            <div className={"w-[50%] flex items-start h-full justify-center"}>
                                i'm a 3rd year student at epitech strasbourg,
                                <br/><br/>
                                so i can work on different languages and technologies fairly easily.
                                i mainly specify in web, more precisely front-end ideation, design and development.

                            </div>
                            <div className={"w-1/3 text-end flex items-start justify-center h-full"}>
                                Let's check out my skills !
                                <br/>
                                <br/>
                                Scroll down and learn about my knowledge :)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Lines pos={{pos: 1, left: true}}/>
            <Lines pos={{pos: 1, left: false}}/>
        </>
    )
}


// SECOND SECTION

const WorkingSkillsSection = () => {
    const workingSkills = [
            { name: "bash", icon: "/images/icons/bash.svg" },
            { name: "git", icon: "/images/icons/git.svg" },
            { name: "github", icon: "/images/icons/github.png" },
            { name: "powershell", icon: "/images/icons/powershell.png" },
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
            <div className={"w-full h-full uppercase"}>
                <div className={"w-full h-full flex items-center justify-center"}>
                    <div className={"w-1/2 h-full flex items-center justify-center"}>
                        <div className={"w-2/3"}>
                            So the skills i have, simply to work on are these:
                            <br/>
                            <br/>
                            I primarly work with Github, git, Bash and powershell.
                            <br/>
                            i also can work on every major OS (MacOS, Linux (Arch) and Windows (10 and 11)).
                            <br/>
                            Same for the IDE's, i mainly work on WebStorm and CLion, but can work on VSCode too.
                        </div>
                    </div>
                    <div className={"w-1/2 h-full flex flex-col gap-y-8 items-center justify-center"}>

                        <div className={"flex gap-x-8"}>
                            <img src={workingSkills[0].icon} alt={workingSkills[0].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={workingSkills[1].icon} alt={workingSkills[1].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={workingSkills[2].icon} alt={workingSkills[2].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={workingSkills[3].icon} alt={workingSkills[3].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                        </div>

                        <div className={"flex gap-x-8"}>
                            <img src={workingSkills[4].icon} alt={workingSkills[4].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={workingSkills[5].icon} alt={workingSkills[5].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={workingSkills[6].icon} alt={workingSkills[6].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={workingSkills[7].icon} alt={workingSkills[7].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                        </div>

                        <div className={"flex gap-x-8"}>
                            <img src={workingSkills[8].icon} alt={workingSkills[8].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={workingSkills[9].icon} alt={workingSkills[9].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={workingSkills[10].icon} alt={workingSkills[10].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={workingSkills[11].icon} alt={workingSkills[11].name} className={"flex-shrink-0 w-36 h-36"}/>
                        </div>


                    </div>
                </div>
            </div>

            <Lines pos={{pos: 2, left: true}}/>
            <Lines pos={{pos: 2, left: false}}/>
        </>
    )
}


// THIRD SECTION

const ProgramingSkillsSection = () => {
    const ProgramingSkills = [
        {name: "C", icon: "/images/icons/C.png"},
        {name: "cpp", icon: "/images/icons/cpp.png"},
        { name: "haskell", icon: "/images/icons/haskell.svg" },
        { name: "shell", icon: "/images/icons/shell.png" },
        {name: "npm", icon: "/images/icons/npm.svg"},
        {name: "React", icon: "/images/icons/react.png" },
        { name: "next", icon: "/images/icons/next.svg" },
        { name: "ts", icon: "/images/icons/ts.svg" },
        { name: "html", icon: "/images/icons/html.svg" },
        { name: "tailwind", icon: "/images/icons/tailwind.svg" },
        { name: "css", icon: "/images/icons/css.svg" },
        { name: "GSAP", icon: "/images/icons/GSAP.svg" },
    ]
    return (
        <>
            <div className={"w-full h-full uppercase"}>
                <div className={"w-full h-full flex items-center justify-center"}>

                    <div className={"w-1/2 h-full flex flex-col gap-y-8 items-center justify-center"}>

                        <div className={"flex gap-x-8"}>
                            <img src={ProgramingSkills[0].icon} alt={ProgramingSkills[0].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={ProgramingSkills[1].icon} alt={ProgramingSkills[1].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={ProgramingSkills[2].icon} alt={ProgramingSkills[2].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={ProgramingSkills[3].icon} alt={ProgramingSkills[3].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                        </div>

                        <div className={"flex gap-x-8"}>
                            <img src={ProgramingSkills[4].icon} alt={ProgramingSkills[4].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={ProgramingSkills[5].icon} alt={ProgramingSkills[5].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={ProgramingSkills[6].icon} alt={ProgramingSkills[6].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={ProgramingSkills[7].icon} alt={ProgramingSkills[7].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                        </div>

                        <div className={"flex gap-x-8"}>
                            <img src={ProgramingSkills[8].icon} alt={ProgramingSkills[8].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={ProgramingSkills[9].icon} alt={ProgramingSkills[9].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={ProgramingSkills[10].icon} alt={ProgramingSkills[10].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                            <img src={ProgramingSkills[11].icon} alt={ProgramingSkills[11].name}
                                 className={"flex-shrink-0 w-36 h-36"}/>
                        </div>

                    </div>
                    <div className={"w-1/2 h-full flex items-center justify-center"}>
                        <div className={"w-2/3 text-end"}>
                        For progamming stuff,<br/><br/>
                        I'm very confortable with computational languages like C, C++ and Haskell.
                        <br/><br/>
                        But the important part is that for the web design / development, i mainly use npm,
                        Next.js, React, TS, Tailwind and GSAP.<br/>And so i have competences in JS, CSS and HTML.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default function Expertise() {
    const filter = React.useRef<HTMLDivElement>(null);
    return (
        <div className={"w-full relative rounded-b-2xl text-lg overflow-y-scroll overflow-x-hidden"} style={{
            height: "calc(100vh - 7rem)"
        }}>
        <div ref={filter} className="fixed top-0 left-0 z-[-10]  w-full h-full"
             style={{ backgroundImage: "radial-gradient(circle, transparent, #0000ff30)"
        }}>
        </div>

            {/* fixed fluid background */}
            <div className={"fixed w-full top-0 left-0 h-full"}>
                <FluidBack/>
            </div>

            {/* content */}
        <div className={"absolute top-0 left-0 h-full w-full"}>

            <HeaderSection/>
            <WorkingSkillsSection/>
            <ProgramingSkillsSection/>
        </div>
    </div>
)
}