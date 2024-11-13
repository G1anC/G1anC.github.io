'use client'
import React from "react";
import {useGSAP} from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import localFont from "next/font/local";
import {Dir} from "node:fs";


const HalenoirThin = localFont({
    src: "../public/HalenoirCompact-Thin.otf",
    weight: "100",
});
const HalenoirBlack = localFont({
    src: "../public/Halenoir-Black.otf",
});
const DirtyLine = localFont({
    src: "../public/dirtyline.woff",
});



export default function LayoutComponent({ children }: Readonly<{ children: React.ReactNode }>) {
    const container = React.useRef<HTMLDivElement>(null);
    const content = React.useRef<HTMLDivElement>(null);
    const body = React.useRef<HTMLBodyElement>(null);
    const [open, setOpen] = React.useState(false);
    const menuTl = React.useRef<gsap.core.Timeline>();
    const tl = React.useRef<gsap.core.Timeline>();
    const lists = [
        {
            name: "pages",
            links: [
                {title: "indeX", link: "/"},
                {title: "exPertise", link: "/pages/expertise/"},
                {title: "Projects", link: "/pages/projects"},
                {title: "abOut", link: "/pages/about"},
                {title: "contaCt", link: "/pages/contact"}
            ]
        },
        {
            name: "Biggest projects",
            links: [
                {title: "arEa", link: "/pages/projects/area/"},
                {title: "42sh", link: "/pages/projects/42sh/"},
                {title: "rayTracer", link: "/pages/projects/raytracer/"},
                {title: "Camille_bC", link: "/camille_bc"},
                {title: "Eve_crea.", link: "/eve_crea"}
            ]
        },
        {
            name: "Socials",
            links: [
                {title: "inSta", link: ""},
                {title: "LinkedIn", link: ""},
                {title: "gitHub", link: "https://www.github.com/G1anC"}
            ]
        }
    ]
    const toggleMenu = (): void => { setOpen(!open) }

    useGSAP(() => {
        gsap.set(".link", {y: 200});
        menuTl.current = gsap.timeline({paused: true})
            .to(container.current, {translateX: "-20rem", duration: 1, ease: "power4.inOut"}, "<")
            .to(body.current, {backgroundColor: "#222222", duration: 1, ease: "power4.inOut"}, "<")
            .to(".link", {y: 0, stagger: 0.05, duration: 0.5, delay: -0.5})
            .to(".menu-list", {opacity: 1, ease: "power4.inOut"}, "<")
    })
    React.useEffect(() => {
        if (!menuTl.current) return;
        if (open) {
            if (!menuTl.current.isActive()) {
                menuTl.current.play();
            }
        } else {
            if (!menuTl.current.isActive()) {
                menuTl.current.reverse();
            }
        }
    }, [open]);

    useGSAP(() => {
        tl.current = gsap.timeline({paused: true})
            .fromTo(container.current, {opacity: 0}, {opacity: 1, duration: 1, ease: "power4.inOut"})
            .to(content.current, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 1, ease: "power4.inOut"})
    }, {scope: container})

    React.useEffect(() => {
        if (tl.current) tl.current.play();
    }, [])

    const Box = ({ children, supp }: {children: React.ReactNode | null, supp: string}) => {
        return (
            <div className={`p-6 h-full text-[1.2rem] flex items-center justify-start ${supp}`}>
                {children}
            </div>
        )
    }

    return (
        <body ref={body} className={`w-[100vw] h-[100vh] ${HalenoirBlack.className} tracking-tight p-4 flex justify-center overflow-hidden text-black items-center bg-white text-xl antialiased`}>
            {/* MENU */}
            <div className="menu fixed top-0 text-[#777777] right-0 w-80 h-full">
                <div className="menu-wrapper py-8 px-4 flex flex-col justify-between items-start h-full">
                    {lists.map((list, i) => (
                        <div key={i} className="menu-list opacity-0">
                            <div className={`lowercase text-xl tracking-widest ${HalenoirThin.className} mb-2`}>
                                {list.name}
                            </div>
                            {list.links.map((item, j) => (
                                <div className={`${DirtyLine.className} text-5xl cursor-pointer transition-all duration-100 hover:text-white hover:ml-2 flex items-start justify-start`} style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                                    <Link
                                        className="link relative"
                                        key={j}
                                        href={item.link}
                                        onClick={toggleMenu}>
                                            {item.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div ref={container} className={"flex-10 opacity-0 w-full relative z-2 rounded-2xl bg-white flex items-center flex-col justify-center border border-[#A3A3A3]"} style={{height: "calc(100vh - 2rem)"}}>
                {/* HEADER */}
                <div className={"header h-20 w-full text-[3.2rem] border-b-1 border-b border-b-[#A3A3A3]"}>
                    <div className="header-container justify-center items-center flex h-full w-full">
                        <Box supp={`w-full border-r border-r-1 text-3xl text-indigo-600 border-r-[#A3A3A3] ${DirtyLine.className}`}>
                            Portfolio
                        </Box>
                        <div className={"w-full flex items-center justify-end"}>
                            <button className={`w-full p-6 h-full ${DirtyLine.className} text-4xl flex items-center flex-[1.25] text-indigo-600 hover:text-indigo-400 hover:mr-2 transition-all duration-100 justify-end`} onClick={toggleMenu}>
                                mEnu
                            </button>
                        </div>
                    </div>
                </div>

                {/* CONTENT */}
                <div ref={content} className={"children w-full flex-1"} style={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", height: "calc(100vh - 10rem - 2rem)"}}>
                    {children}
                </div>
            </div>
        </body>
    )
}