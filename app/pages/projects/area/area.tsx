import React, {ReactNode} from "react";
import Project, {I} from "@/app/pages/projects/project";

export default function Area({ titleRef, filterRef, bgRef }: {
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
	bgRef: React.RefObject<HTMLDivElement>
}): ReactNode {

	return (
		<Project titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} name={"area"} childrens={[
			<div className={"w-full h-screen flex items-center justify-center"}>
				<div className={"w-2/3 text-center p-32"}>
					<div className={"txt"}><I>AREA</I> or Action-REaction</div>
					<div className={"txt"}>is a <I>3rd year web project</I></div>
					<div className={"txt"}>from EPITECH.</div>
				</div>
			</div>,
			<div className={"w-full flex items-start justify-start"}>
				<div className={"w-4/5 text-start p-32"}>
					<div className={"txt"}>the goal was to recreate as we</div>
					<div className={"txt"}>wanted the functionality of</div>
					<div className={"txt"}>the website <I>IFTTT</I>.</div>
					<br/>
					<div className={"txt"}>Creating <I>webhooks</I> and easily</div>
					<div className={"txt"}>connecting to multiple</div>
					<div className={"txt"}><I>platforms</I> was the main</div>
					<div className={"txt"}>purpose here.</div>
				</div>
			</div>,

			<div className={"w-full h-full flex items-center justify-center"}>
				<div className={"w-1/3"}></div>
				<div className={"w-2/3 h-full text-end px-32 py-16"}>
					<div className={"txt"}>This project can be</div>
					<div className={"txt"}>restructured into 3</div>
					<div className={"txt"}>parts: <I>backend</I>, <I>mobile</I></div>
					<div className={"txt"}>and <I>frontend</I>.</div>
					<br/>
				</div>
			</div>,
			<div className={"w-full h-full flex items-center justify-center"}>
				<div className={"text-center p-32"}>
					<div className={"txt"}>We used <I>Next</I> as base.</div>
					<div className={"txt"}><I>Postgressql</I> for DB</div>
					<div className={"txt"}><I>React</I> (Native) for front</div>
					<div className={"txt"}>and <I>Typescript</I> as language.</div>
					<br/>
				</div>
			</div>,
			<div className={"w-full"}>
				<div className={"w-2/3 p-32 text-start"}>
					<div className={"txt"}>My part was everything</div>
					<div className={"txt"}>that surrounded the</div>
					<div className={"txt"}>front.</div>
				</div>
				<div className={"w-5/6 pl-32 text-start"}>
					<div className={"txt"}>From creating the <I>mockups</I></div>
					<div className={"txt"}><I>with Figma</I> :</div>
				</div>
			</div>,

			<div className={"w-full h-full flex items-center justify-center"}>
				<img className={"w-11/12 h-full object-cover"} src={"/images/projects/mockup.png"}/>
			</div>,

			<div className={"w-full h-full flex items-center justify-center"}>
				<img className={"w-11/12 h-full object-cover"} src={"/images/projects/mobile.png"}/>
			</div>,

			<div className={"w-full h-full flex items-center  justify-center"}>
				<div className={"w-2/3 text-start pl-32"}>
					<br/>
					<div className={"txt"}>To <I>developing</I> it:</div>
					<br/>
				</div>
				<div className={"w-2/3"}></div>
			</div>
			,
			<img alt="coded" className={"w-full h-full object-cover p-10"} src={"/images/projects/area.png"}/>
		]}
		/>
	)
}