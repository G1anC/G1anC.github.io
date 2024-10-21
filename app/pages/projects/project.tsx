import React, {ReactNode, useRef} from "react";
import localFont from "next/font/local";
import ScrollTrigger from "gsap/ScrollTrigger";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'
gsap.registerPlugin(ScrollTrigger);

const SelarisFont = localFont({
	src: "../../../public/ppuli.otf",
});



const lenis = new Lenis()

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.lagSmoothing(0)

gsap.ticker.add((time) => {
	lenis.raf(time * 1000)
})

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
	React.useEffect(() => {
		sectionsRef.map(sectionRef => {
			gsap.to(sectionRef.current, {
				scrollTrigger: {
					scrub: 1,
					trigger: sectionRef.current,
					start: "top bottom",
					end: "bottom top",
					markers: true,
				},
				y: -100,
				ease: "none"
			});

		});
	}, [sectionsRef]);

	return (
		<>
			<ProjectTitle titleRef={titleRef} filterRef={filterRef} selectedProject={name}/>
			<div className={"w-screen h-screen z-[-1] sticky"}>
				<ProjectBackground bgRef={bgRef} selectedProject={name}/>
				<div ref={filterRef} className={"bg w-screen h-screen bg-black/50 backdrop-blur-xl top-0 absolute"}/>
			</div>
			<div className={"w-full h-full"}>
				{childrens.map((child, i) =>
			      	<div ref={sectionsRef[i]} key={i} className={`rounded-t-3xl z-[-1] w-screen h-screen bg-blue-700 flex items-center justify-center`}>
					  	{child}
				  	</div>
			  	)}
			</div>
		</>
	)
}