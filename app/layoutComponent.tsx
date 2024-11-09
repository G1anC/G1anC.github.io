'use client'
import React from "react";
import {useGSAP} from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";


export default function LayoutComponent({ children }: Readonly<{ children: React.ReactNode }>) {
    const container = React.useRef<HTMLDivElement>(null);
    const tl = React.useRef<gsap.core.Timeline>();
    useGSAP(() => {
        tl.current = gsap.timeline({paused: true})
            .fromTo(container.current, {opacity: 0}, {opacity: 1, duration: 1, ease: "power4.inOut"})
    }, {scope: container})

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
                <Li name={"github"} href={"https://github.com/G1anC"} />
                <Li name={"linkedin"} href={""}/>
                <Li name={"insta"} href={""}/>
            </div>
        )
    }

    return (
        <div ref={container}
             className={"h-full w-full relative z-2 rounded-2xl flex items-center flex-col justify-center border border-[#A3A3A3]"}>
            <div className={"header w-full text-[3.2rem] border-b-1 border-b border-b-[#A3A3A3]"}>
                <div className="header-container flex h-full w-full">
                    <Box supp={" flex-[1.25] border-r border-r-1 uppercase border-r-[#A3A3A3]"}>Portfolio</Box>
                    <Box supp={" flex-[0.25] border-r border-r-1 border-r-[#A3A3A3]"}>
                        <Medias/>
                    </Box>
                    <Box supp={"flex-[1.25] justify-end uppercase"}>
                        Menu
                    </Box>
                </div>
            </div>
            <div className={"children w-full h-full"}>
                {children}
            </div>
        </div>
    )
}