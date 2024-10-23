'use client';

import React, {ReactNode, useRef} from "react";
import localFont from "next/font/local";
import ScrollTrigger from "gsap/ScrollTrigger";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'
import {black} from "next/dist/lib/picocolors";
gsap.registerPlugin(ScrollTrigger);

const SelarisFont = localFont({
	src: "../../../public/ppuli.otf",
});

const TextFont = localFont({ src: "../../../public/Halenoir-DemiBold.otf" })
const ImportantFont = localFont({ src: "../../../public/Halenoir-Black.otf" })


const lenis = new Lenis()

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.lagSmoothing(0)

gsap.ticker.add((time) => {
	lenis.raf(time * 1000)
})

const I = ({children}: {children: string}) => {
	return (
		<span className={`text-white ${ImportantFont.className}`}>{children}</span>
	)
}

const ProjectTitle: React.FC<{ selectedProject: string, titleRef: React.RefObject<HTMLDivElement>, filterRef: React.RefObject<HTMLDivElement> }> = ({ selectedProject, titleRef, filterRef }) => {
	return (
		<div ref={titleRef} className={`z-10 title w-screen h-screen absolute text-[250px] top-0 flex items-center justify-center opacity-0 antialiased ${SelarisFont.className}`}>
			<button className={"absolute z-40 w-full flex uppercase items-center justify-center"}>
				{selectedProject}
			</button>
		</div>
	);
};

const ProjectBackground: React.FC<{ selectedProject: string, bgRef: React.RefObject<HTMLDivElement> }> = ({selectedProject, bgRef}) => {
	return (
		<div ref={bgRef} className={"bg w-screen h-screen static"} style={{
			backgroundImage: `url(/images/projects/${selectedProject}.png)`,
			backgroundSize: "cover",
		}} />
	);
}


export default function Project( {childrens, titleRef, filterRef, bgRef, name }: {
	childrens: React.ReactNode[],
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
	bgRef: React.RefObject<HTMLDivElement>,
	name: string
}): ReactNode {
	const sectionsRef = childrens.map(() => React.useRef<HTMLDivElement>(null));
	const gradientRef = React.useRef<HTMLDivElement>(null);
	React.useEffect(() => {
		sectionsRef.forEach((section) => {
			if (section.current) {
				gsap.fromTo(section.current, {
					opacity: 0,
					y: 50
				}, {
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: "power5.out",
					scrollTrigger: {
						trigger: section.current,
						start: "top 65%",
						end: "top 30%",
						toggleActions: "play none none reverse"
					}
			});
			}
		});

		gsap.to(gradientRef.current, {
			duration: 0.3,
			opacity: 1,
			backdropFilter: "blur(20px)",
			ease: "power2.out",
			scrollTrigger: {
				trigger: titleRef.current,
				start: "top top",
				end: "center top",
				scrub: true,
			},
			backgroundColor: "black",
		});
	}, [sectionsRef]);

	return (
		<div className={"w-screen h-full flex flex-col justify-center items-center"}>
			<div className={"w-screen h-full"}>
				<ProjectTitle titleRef={titleRef} filterRef={filterRef} selectedProject={name}/>
				<ProjectBackground bgRef={bgRef} selectedProject={name}/>
				<div ref={filterRef} className={"bg w-screen h-screen bg-black/50 backdrop-blur-md top-0 absolute"}/>
				<div ref={gradientRef} className={"w-screen h-screen bg-gradient-to-t opacity-60 from-black top-0 to-transparent absolute"}/>
			</div>
			<div className={"w-screen bg-black h-full"}>
				{childrens.map((child, i) => {
					return (
						<div ref={sectionsRef[i]} key={i} className={`leading-[120%] rounded-t-3xl text-gray-400 z-[-1] w-full ${TextFont.className} px-10 uppercase text-8xl h-full my-96 text-justify flex items-center justify-center`}>
							{child}
						</div>
					)}
				)}
			</div>
		</div>
	)
}

export { I };
