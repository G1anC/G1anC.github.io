'use client';

import React, {ReactNode, useRef} from "react";
import localFont from "next/font/local";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import {gsap} from "gsap";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const SelarisFont = localFont({ src: "../../../public/dirtyline.woff", });
const TextFont = localFont({ src: "../../../public/HalenoirCompact-Thin.otf" })
const ImportantFont = localFont({ src: "../../../public/Halenoir-Black.otf" })

const I = ({children}: {children: string}) => {
	return (
		<span className="relative w-full ">
			<span className={`text-black ${ImportantFont.className} `}>{children}</span>
		</span>
	)
}

const ProjectTitle: React.FC<{
	selectedProject: string,
	titleRef: React.RefObject<HTMLDivElement>, filterRef: React.RefObject<HTMLDivElement> }> = ({ selectedProject, titleRef, filterRef }) => {
	return (
		<div ref={titleRef} className={`z-10 title w-screen h-screen absolute text-[300px] top-0 flex items-center justify-center opacity-0 antialiased ${SelarisFont.className}`}>
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
	const childrensRef = childrens.map(() => React.useRef<HTMLDivElement>(null));
	const gradientRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const lenis = new Lenis();

		lenis.on("scroll", ScrollTrigger.update);
		gsap.ticker.lagSmoothing(0);
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		childrensRef.forEach((children) => {
			if (children.current) {
				gsap.fromTo(children.current, { opacity: 0, y: 20, }, {
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power1.out",
					scrollTrigger: {
						trigger: children.current,
						start: "top 70%",
						end: "top 30%",
						toggleActions: "play none none none",
					},
					onStart: () => {
						const txtElements = children.current?.querySelectorAll('.txt');
						console.log(txtElements);
						if (txtElements) {
							gsap.fromTo(
								txtElements,
								{ opacity: 0, x: 40 },
								{
									opacity: 1,
									x: 0,
									duration: 0.5,
									stagger: 0.5,
									ease: 'power4.out',
								}
							);
						}
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
			backgroundColor: "white",
		});

		return () => {
			lenis.destroy();
			gsap.ticker.remove(lenis.raf);
		};
	}, [childrensRef]);

	return (
		<div className={"w-screen h-auto flex flex-col justify-center items-center"}>
			<div className={"w-screen h-full"}>
				<ProjectTitle titleRef={titleRef} filterRef={filterRef} selectedProject={name}/>
				<ProjectBackground bgRef={bgRef} selectedProject={name}/>
				<div ref={filterRef} className={"bg w-screen h-screen backdrop-blur-md top-0 absolute"}/>
				<div ref={gradientRef} className={"w-screen h-screen bg-gradient-to-t from-white top-0 to-transparent absolute"}/>
			</div>
			<div className={"w-screen bg-white h-full"}>
				{childrens.map((child, i) => {
					return (
						<div ref={childrensRef[i]} key={i} className={`leading-[120%] rounded-t-3xl text-gray-400 z-[-1] w-full ${TextFont.className} px-10 uppercase text-8xl h-full my-96 text-justify flex items-center justify-center`}>
							{child}
						</div>
					)}
				)}
			</div>
		</div>
	)
}

export { I };
