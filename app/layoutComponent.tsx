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
    const tl = React.useRef<gsap.core.Timeline>();
    const lists = [
        {name: "pages", links: ["indeX", "exPertise", "Projects", "abOut", "contaCt"]},
        {name: "Biggest projects", links: ["arEa", "42sh", "rayTracer", "Camille_bC", "Eve_crea."]},
        {name: "Socials", links: ["inSta", "LinkedIn", "gitHub"]}
    ]

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
    const Medias = () => {
        const Li = ({ name, href }: { name: string, href: string }) => (
            <Link className={"link w-full h-full flex items-center justify-center"} href={href}>
                <Image src={`/images/icons/${name}.png`} width={30} height={30} alt={name} />
            </Link>
        )
        return (
            <div className={"w-full h-full flex items-center justify-center"}>
            </div>
        )
    }

    return (
        <body ref={body}
            className={`w-screen h-screen ${HalenoirBlack.className} tracking-tight p-8 flex justify-center overflow-hidden text-black items-center bg-white text-xl antialiased`}>
        <div className="menu fixed top-0 text-[#777777] right-0 w-80 h-full">
            <div className="menu-wrapper py-8 flex flex-col justify-between items-start h-full">
                {lists.map((list, i) => (
                    <div key={i} className="menu-list opacity-0">
                        <div className={`lowercase text-xl tracking-widest ${HalenoirThin.className} mb-2`}>{list.name}</div>
                        {list.links.map((item, j) => (
                            <div className={`${DirtyLine.className} text-5xl cursor-pointer transition-all duration-100 hover:text-white hover:ml-2 flex items-start justify-start`} style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                                <Link
                                    className="link relative"
                                    key={j}
                                    href={`/pages/${item.toLowerCase()}/`}>
                                        {item}
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>

        <div ref={container}
             className={"h-full opacity-0 w-full relative z-2 rounded-2xl bg-white flex items-center flex-col justify-center border border-[#A3A3A3]"}>
            <div className={"header w-full text-[3.2rem] border-b-1 border-b border-b-[#A3A3A3]"}>
                <div className="header-container flex h-full w-full">
                    <Box supp={` flex-[1.25] border-r border-r-1 text-3xl text-indigo-600 border-r-[#A3A3A3] ${DirtyLine.className}`}>pOrTfoLiO</Box>
                    <Box supp={"flex-[0.25] border-r border-r-1 border-r-[#A3A3A3]"}>
                        <Medias/>
                    </Box>
                    <div className={"w-full h-full flex-[1.25] flex items-center justify-end"}>
                        <button className={`w-full p-6 h-full ${DirtyLine.className} text-3xl flex items-center flex-[1.25] text-indigo-600 hover:text-indigo-400 hover:mr-2 transition-all duration-100 justify-end`} onClick={() => {
                            const tl = gsap.timeline();

                            if (!open) {
                                gsap.set(".link", {y: 200});
                                tl
                                    .to(container.current, {translateX: "-20rem", duration: 1, ease: "power4.inOut"}, "<")
                                    .to(body.current, {backgroundColor: "#222222", duration: 1, ease: "power4.inOut"}, "<")
                                    .to(".link", {y: 0, stagger: 0.05, duration: 0.5, delay: -0.5})
                                    .to(".menu-list", {opacity: 1, ease: "power4.inOut"}, "<")
                            } else {
                                tl
                                    .to(".link", {y: -100, stagger: 0.05, duration: 0.5})
                                    .to(".menu-list", {opacity: 0, ease: "power4.inOut"}, "<")
                                    .to(container.current, {translateX: "0rem", duration: 1, ease: "power4.inOut"}, "<")
                                    .to(body.current, {backgroundColor: "#ffffff", duration: 1, ease: "power4.inOut"}, "<")
                            }
                            setOpen(!open)
                            tl.play()
                        }}>
                            mEnU
                        </button>
                    </div>
                </div>
            </div>
            <div ref={content} className={"children w-full h-full"} style={{
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
            }}>
                {children}
            </div>
        </div>
        </body>

    )
}