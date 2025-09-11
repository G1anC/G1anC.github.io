'use client';

import React, {useEffect, useState, useRef} from "react";
import localFont from "next/font/local";
import {gsap} from "gsap";
import LayoutComponent from "@/app/components/layoutComponent";
import InfoBlock from "@/app/components/InfoBlock";
import FluidBack from "@/app/components/FluidBack";
import {useGSAP} from "@gsap/react";


const DirtyLine = localFont({src: "../../../public/dirtyline.woff"});
const HalenoirDemi = localFont({src: "../../../public/Halenoir-DemiBold.otf"});

enum Side {
    LEFT="text-start justify-start",
    RIGHT="text-end justify-end",
    CENTER="text-center justify-center"
}

const Block = ({children, side}: { children: React.ReactNode, side: Side }) => {
    return (
        <div className={`w-full h-[50vh] flex items-center ${side}`}>
            <div className={"p-12 border border-[#A3A3A3] rounded-2xl bg-white"} style={{boxShadow: "10px 10px 20px #00000030"}}>
                {children}
            </div>
        </div>
     
    )
}

const projects = [
    {
        title: "Eve_crea.",
        secondTitle: "EvelYne cReationS",
        content: [
            <Block side={Side.CENTER}>
                <div className={"txt"}>My mother is a talented painter</div>
                <div className={"txt"}>who needed some online presence</div>
                <div className={"txt"}>to better professionalize herself and get known.</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/EC.png"} />
            </div>,

            <Block side={Side.LEFT}>
                <div className={"txt"}>I wanted something simple, slick and classy.</div>
                <div className={"txt"}>So I designed and developed a website</div>
                <div className={"txt"}>that revolves around an elegant WebGL animation</div>
                <div className={"txt"}>that looks like a brush stroke.</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/EC2.png"} />
            </div>,

            <Block side={Side.RIGHT}>
                <div className={"txt"}>The website only contains 2 pages :</div>
                <div className={"txt"}>a home page with painting categories</div>
                <div className={"txt"}>and a painting page that adapts dynamically</div>
                <div className={"txt"}>based on the chosen category.</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/ECWork.png"} />
            </div>,

            <Block side={Side.CENTER}>
                <div className={"txt"}>I was the only designer and developer on this project.</div>
                <div className={"txt"}>Check it out here 👉 <a href="https://www.evelynecrea.com" target="_blank" className="underline">www.evelynecrea.com</a></div>
            </Block>,
        ],
    },
    // hidden society
    {
        title: "HiddenSociety",
        secondTitle: "Hidden SociEty",
        content: [
            <Block side={Side.CENTER}>
                <div className={"txt"}>Hidden Society is Strasbourg’s lead</div>
                <div className={"txt"}>techno event creator collective.</div>
                <div className={"txt"}>They’re known for unforgettable nights,</div>
                <div className={"txt"}>immersive atmospheres and strong visuals.</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/HS.png"} />
            </div>,

            <Block side={Side.LEFT}>
                <div className={"txt"}>The website needs to reflect this identity :</div>
                <div className={"txt"}>bold, rash and visually strong.</div>
                <div className={"txt"}>Nothing clean and minimal,</div>
                <div className={"txt"}>but raw, immersive and impactful.</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/HSEvents.png"} />
            </div>,

            <Block side={Side.RIGHT}>
                <div className={"txt"}>I reworked their logo into a 3D object</div>
                <div className={"txt"}>and applied a dithering shader with Three.js,</div>
                <div className={"txt"}>turning it into a living piece of digital art.</div>
            </Block>,


            <Block side={Side.LEFT}>
                <div className={"txt"}>The whole website is filled with</div>
                <div className={"txt"}>strong interactive content,</div>
                <div className={"txt"}>like the Work page where events</div>
                <div className={"txt"}>are showcased with bold visuals</div>
                <div className={"txt"}>and animated layouts.</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/HSMerch.png"} />
            </div>,

            <Block side={Side.CENTER}>
                <div className={"txt"}>I’m the lead designer and developer</div>
                <div className={"txt"}>on the entire project.</div>
                <div className={"txt"}>The development is still in progress,</div>
                <div className={"txt"}>but you can already dive into their universe :</div>
                <div className={"txt"}><a href="https://www.instagram.com/hiddensociety__/" target="_blank" className="underline">@hiddensociety__</a></div>
            </Block>,
        ],
    },
    // area
    {
        title: "arEa",
        secondTitle: "arEa aPplicaTion",
        content: [
            <Block side={Side.CENTER}> <div className={"txt"}>AREA or Action-REaction</div> <div className={"txt"}>is a 3rd year web project</div> <div className={"txt"}>from EPITECH.</div> </Block>, <div className={"w-full mb-12 flex items-center justify-center"}> <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/area.png"} style={{ backgroundColor: "white", border: "1px #A3A3A3 solid", borderRadius: "16px", boxShadow: "10px 10px 20px #00000030" }}/> </div>, <Block side={Side.LEFT}> <div className={"txt"}>The goal was to recreate as we</div> <div className={"txt"}>wanted the functionality of</div> <div className={"txt"}>the website IFTTT.</div> </Block>, <Block side={Side.RIGHT}> <div className={"txt"}>Creating webhooks and easily</div> <div className={"txt"}>connecting to multiple</div> <div className={"txt"}>platforms was the main</div> <div className={"txt"}>purpose here.</div> </Block>, <Block side={Side.CENTER}> <div className={"txt"}>This project can be</div> <div className={"txt"}>restructured into 3 parts:</div> <br/> <div className={"txt"}>backend, mobile and frontend.</div> </Block>, <Block side={Side.LEFT}> <div className={"txt"}>We used Next as base.</div> <div className={"txt"}>React and Native for front (web and mobile)</div> <div className={"txt"}>Postgressql for DB language, Mango as DB</div> <div>and Typescript as language.</div> </Block>, <Block side={Side.RIGHT}> <div className={"txt"}>My part was everything</div> <div className={"txt"}>that surrounded the</div> <div className={"txt"}>front.</div> <br/> <br/> <div className={"txt"}>From creating the mockups</div> <div className={"txt"}>with Figma :</div> </Block>, <div className={"w-full mb-12 flex items-center justify-center"}> <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/mockup.png"} style={{ backgroundColor: "white", border: "1px #A3A3A3 solid", borderRadius: "16px", boxShadow: "10px 10px 20px #00000030" }}/> </div>, <div className={"w-full flex items-center justify-center"}> <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/mobile.png"} style={{ backgroundColor: "white", border: "1px #A3A3A3 solid", borderRadius: "16px", boxShadow: "10px 10px 20px #00000030" }}/> </div>, <Block side={Side.CENTER}> <div className={"txt"}>To developing it:</div> </Block>, <div className={"w-full mb-12 flex items-center justify-center"}> <img className={"w-5/6 h-auto object-fit"} src={"/images/projects/area.png"} style={{ backgroundColor: "white", border: "1px #A3A3A3 solid", borderRadius: "16px", boxShadow: "10px 10px 20px #00000030" }}/> </div>
        ],
    },
    // handvision
    {
        title: "HandVision",
        secondTitle: "HandVisioN",
        content: [
            <Block side={Side.CENTER}>
                <div className={"txt"}>HandVision is an app for handball coaches</div>
                <div className={"txt"}>to analyze and study their amateur/semi-pro games.</div>
                <div className={"txt"}>By sending the match video to our AI,</div>
                <div className={"txt"}>it automatically crops out unimportant parts</div>
                <div className={"txt"}>and keeps only key sequences of the match.</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/HVArchives Grid.png"} />
            </div>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/HVAnalyze.png"} />
            </div>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/HVCreation.png"} />
            </div>,

            <Block side={Side.LEFT}>
                <div className={"txt"}>We’re a team of 6.</div>
                <div className={"txt"}>I’m the lead designer and lead developer</div>
                <div className={"txt"}>for the whole project.</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/HVArchives List.png"} />
            </div>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/HVMessagess.png"} />
            </div>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/HVAnalyze page.png"} />
            </div>,

            <Block side={Side.LEFT}>
                <div className={"txt"}>Still a lot to figure out.</div>
                <div className={"txt"}>Between : good UX (that will be done with</div>
                <div className={"txt"}> the other UX Designer in the team)</div>
                <div className={"txt"}>and technical feasibility (that will be done with</div>
                <div className={"txt"}> the developers in the team)</div>
                <div className={"txt"}>It is my biggest and most challenging project.</div>
                <div className={"txt"}>But the base design is there and it will take</div>
                <div className={"txt"}>2 years to build fully.</div>
            </Block>,
        ],
    },
    {
        title: "aGeMera",
        secondTitle: "aGeMera Studio.",
        content: [
            <Block side={Side.CENTER}>
                <div className={"txt"}>my future agency's website</div>
                <div className={"txt"}>in coming...</div>
            </Block>,
        ],

    }
]

export default function Projects() {
    const tl = useRef<gsap.core.Timeline>()
    const [active, setActive] = useState<number>(-1);
    const projectRef = useRef<HTMLDivElement | null>(null);
    const dontTouch = useRef(null);
    const [open, setOpen] = useState(false);
    const menu = useRef(null);
    const link = useRef(null);
    let menuTl = useRef<gsap.core.Timeline>();
    let menuCloseTl = useRef<gsap.core.Timeline>();
    const projectContentRef = useRef(null);
    const filter = useRef(null);

    useEffect(() => {
        gsap.set(".link", { y: 200 });
        menuTl.current = gsap.timeline({ paused: true })
            .to(menu.current, { left: "2px", ease: "power2.out" })
            .to(".link", { y: 0, stagger: 0.05, duration: 0.5, delay: -1 });

        menuCloseTl.current = gsap.timeline({ paused: true })
            .to(".link", { y: 200, stagger: 0.05, duration: 0.5 })
            .to(menu.current, { left: "-400px", ease: "power2.out", delay: -1 });

        if (tl.current) tl.current.play();
        filter.current && gsap.fromTo(filter.current, { opacity: 0}, { opacity: 1, duration: 0.5, delay: 1  });

        if (active === -1) return;
        tl.current = gsap.timeline()
            .to(".titleLetters", {duration: 1, opacity: 1, y: 0, stagger: 0.05, delay: 1, ease: "power4.inOut"})
            .to(".titleLetters", {opacity: 0, y: 10, stagger: 0.05, duration: 1, ease: "power4.inOut"})
            .to(".menu-items", {opacity: 1, stagger: 0.1, duration: 0.5})
            .to("project-image", {opacity: 1, duration: 0.5})
            .to(dontTouch.current, {display: "none"}, "<");
    }, []);

    useGSAP(() => {
        gsap.set(".clipper", {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" });
        gsap.set(".txt", { y: 50 });
        tl.current = gsap.timeline({ paused: true })
            .to(".txt", { duration: 1, y: 0, delay: 1.25, stagger: 0.05, ease: "power4.inOut" })
    });
    
    useEffect(() => {
        if (!menuTl.current) return;
        console.log("animation")
        if (open) {
            if (!menuTl.current.isActive()) {
                menuTl.current.play();
                return
            }
        }
            menuTl.current.reverse();
    }, [open]);

    return (
        <LayoutComponent name={"Projects"}>
            <div className={"w-full flex h-full items-center justify-center relative"}>
                    <div ref={menu} className="menu left-[-400px] absolute w-80 top-2 bg-white rounded-xl z-10 border border-[#A3A3A3]" style={{ boxShadow: "10px 10px 20px #00000020" }}>
                        <div className="p-4 flex flex-col relative items-end justify-end w-full">
                            <button className={"w-8 h-8 absolute top-4 right-4"} onClick={() => {setOpen(false)}}>
                                <svg className="fill-indigo-600 hover:fill-indigo-300 duration-100 transition-all" height="32px" width="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "/></svg>
                            </button>
                            {projects.map((item, i) => (
                                <div ref={link} key={i} className={`w-full flex items-start justify-start ${DirtyLine.className} text-4xl text-indigo-600 `}>
                                    <button className={`cursor-pointer transition-all duration-100 hover:pl-2 hover:text-indigo-400 text-indigo-600 hover:mr-2`}
                                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", }}
                                        onClick={() => {
                                            setActive(i)
                                            if (projectRef.current) {
                                                projectRef.current.scrollTo({
                                                    top: 0,
                                                    behavior: "smooth", // Enables smooth scrolling
                                                });
                                            }
                                            setOpen(false)
                                        }}
                                    >
                                        <div className={"link relative"}>{item.title}</div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className={"menu-button bg-white p-2 top-2 left-2 absolute border border-[#A3A3A3] z-[5] rounded-xl"} onClick={() => {setOpen(true)}}>
                        <img src={"/images/menu(1).png"} width={32} height={32} />
                    </button>
                    {active === -1 ? 
                        <>
                            <FluidBack />
                            <div ref={filter} className="absolute top-0 left-0  w-full h-full" style={{backgroundImage: "radial-gradient(circle, transparent, #0000ff30)" }}></div>
                            <div className="relative p-4 w-full h-full flex flex-col items-center justify-center">
                                <InfoBlock b={false} left={[
                                    <div className="clipper"><div className="txt relative px-5"> </div></div>,
                                ]} center={[
                                    <div className="clipper"><div className="relative txt">All the code</div></div>,
                                    <div className="clipper"><div className="relative txt">i've done</div></div>,
                                ]} right={[
                                    <div className="clipper">
                                        <div className="relative txt">Within the 3 years</div>
                                    </div>,
                                    <div className={"clipper"}>
                                        <div className={"relative txt"}>of my dev life</div>
                                    </div>
                                ]}/>
        
                                <div className={`w-full h-full flex items-center justify-center text-[250px] ${DirtyLine.className}`}>pRoJecTs</div>
        
                                <InfoBlock b={true} left={[
                                    <div className={"relative txt"}>Click the sandwich</div>,
                                ]} center={[
                                    <div className="txt" key={0}><div>to see them all</div></div>
                                ]} right={[
                                    <div className="txt" key={0}><div>and enjoy learning from 'em</div></div>
                                ]} />
                            </div>                
                        </>
                    :
                        <div className={"w-full overflow-hidden flex flex-col items-center justify-center"} style={{height: "calc(100vh - 7rem)"}}>
                            <div ref={projectRef} className={"w-full h-full overflow-y-scroll relative"}>
                                <div className={"sticky z-[-1] px-48 pb-12 w-full flex items-start justify-center h-full top-0 left-0"}>
                                    <div className={"w-full h-full border-b px-2 pb-2 border-x border-[#A3A3A3] rounded-b-2xl"}>
                                        <div className={"w-full h-full rounded-b-xl"} style={{background: "linear-gradient(to bottom, rgba(79, 70, 229, 0.1), rgba(79, 70, 229, 0.5))"}}></div>
                                    </div>
                                </div>
                                <div className={"absolute top-0 left-0 w-full h-full"}>
                                    <div className={`w-full h-[40vh] flex flex-col items-center justify-center text-black ${DirtyLine.className} text-[140px]`}>
                                        <div className={"pt-24 pb-16 px-16 rounded-3xl bg-white border border-[#A3A3A3] text-center"}
                                            style={{boxShadow: "10px 10px 20px #00000030"}}>{projects[active].secondTitle}
                                        </div>
                                    </div>
                                    <div ref={projectContentRef} className={`w-full h-full sm:text-3xl ${HalenoirDemi.className} text-gray-600 text-base uppercase relative p-4 px-32`}>
                                        {projects[active].content.map((item, i) => (
                                            <div key={i}>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
            </div>
        </LayoutComponent>
    );
}
