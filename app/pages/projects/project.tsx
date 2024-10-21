import React, {ReactNode} from "react";
import localFont from "next/font/local";
import ScrollTrigger from "gsap/ScrollTrigger";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SelarisFont = localFont({
	src: "../../../public/Selaris.woff",
});

const ProjectTitle: React.FC<{ selectedProject: string, titleRef: React.RefObject<HTMLDivElement>, filterRef: React.RefObject<HTMLDivElement> }> = ({ selectedProject, titleRef, filterRef }) => {
	return (
		<div ref={titleRef} className={`z-10 title w-screen h-screen absolute text-[250px] top-0 flex items-center justify-center opacity-0 antialiased ${SelarisFont.className}`}>
			<button className={"absolute z-40 w-full flex items-center justify-center"}>
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


export default function Project( {childrens, titleRef, filterRef, bgRef, sectionsRef, name }: {
	childrens: React.ReactNode[],
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
	bgRef: React.RefObject<HTMLDivElement>,
	sectionsRef: React.RefObject<HTMLDivElement>[],
	name: string
}): ReactNode {
	return (
		<>
			<ProjectTitle titleRef={titleRef} filterRef={filterRef} selectedProject={name}/>
			<div className={"w-screen h-screen z-[-1] sticky"}>
				<ProjectBackground bgRef={bgRef} selectedProject={name}/>
				<div ref={filterRef} className={"bg w-screen h-screen bg-black/50 backdrop-blur-xl top-0 absolute"}/>
			</div>
			<div className={"w-full h-full"}>
				{childrens.map((child, i) => {
					return (
			      <div ref={sectionsRef[i]} className={"rounded-3xl z-[-1] w-screen h-screen bg-black flex items-center justify-center"}>
					  {child}
				  </div>
			    );
			  })}
			</div>
		</>
	)
}