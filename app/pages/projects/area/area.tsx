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
					<I>AREA</I> or Action-REaction is a <I>3rd year web project</I> from EPITECH.
				</div>
			</div>,
			<div>
				<div className={"w-3/4 text-start p-32"}>
					the goal was to recreate as we wanted the functionality of the website <I>IFTTT</I>.<br/>
					Creating <I>webhooks</I> and easily connecting to multiple <I>platforms</I> was the main purpose here.
				</div>
			</div>,

			<div className={"w-full h-full flex items-center justify-center"}>
				<div className={"w-1/3"}></div>
				<div className={"w-2/3 h-full text-end px-32 py-16"}>
					This project can be restructured into 3 parts: <I>backend</I>, <I>mobile</I> and <I>frontend</I>.
					<br/>
					My part was everything that surrounded the front.
				</div>
			</div>,

			<div className={"w-1/3 text-start pl-32 pb-16"}>
					From creating the <I>mockups with Figma</I>:
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
					To <I>developing</I> it:
					<br/>
				</div>
				<div className={"w-2/3"}></div>
			</div>
			,
			<img className={"w-full h-full object-cover p-10"} src={"/images/projects/area.png"}/>
		]}
		/>
	)
}