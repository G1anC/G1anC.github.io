import React, {ReactNode} from "react";
import localFont from "next/font/local";

const SelarisFont = localFont({
	src: "../../../public/Selaris.woff",
});

const ProjectTitle: React.FC<{ selectedProject: string, titleRef: React.RefObject<HTMLDivElement>, filterRef: React.RefObject<HTMLDivElement> }> = ({ selectedProject, titleRef, filterRef }) => {
	return (
		<div ref={titleRef} className={`w-full h-full absolute text-[250px] top-0 flex items-center justify-center opacity-0 z-10 antialiased ${SelarisFont.className}`}>
			<button className={"absolute z-40 w-full flex items-center justify-center"}>
				{selectedProject}
			</button>
		</div>
	);
};

const ProjectBackground: React.FC<{ selectedProject: string, bgRef: React.RefObject<HTMLDivElement> }> = ({selectedProject, bgRef}) => {
	return (
		<div ref={bgRef} className={"w-screen h-screen static"} style={{
			backgroundImage: `url(/images/projects/${selectedProject}.png)`,
			backgroundSize: "cover",
		}} />
	);
}


export default function Project( {children, titleRef, filterRef, bgRef, name }: {
	children: React.ReactNode,
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
	bgRef: React.RefObject<HTMLDivElement>,
	name: string
}): ReactNode {
	return (
		<>
			<div className={"w-screen h-screen z-[-1] sticky"}>
				<ProjectTitle titleRef={titleRef} filterRef={filterRef} selectedProject={name}/>
				<ProjectBackground bgRef={bgRef} selectedProject={name}/>
				<div ref={filterRef} className={"w-screen h-screen bg-black/50 backdrop-blur-xl top-0 absolute"}/>
			</div>
			<div className={"w-full h-full"}>{children}</div>

		</>

	)
}