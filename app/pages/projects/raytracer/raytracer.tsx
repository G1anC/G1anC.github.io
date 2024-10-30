import React, {ReactNode} from "react";
import Project from "@/app/pages/projects/project";
import {I} from "@/app/pages/projects/project";

export default function Raytracer({ titleRef, filterRef, bgRef, }: {
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
    bgRef: React.RefObject<HTMLDivElement>,
}): ReactNode {
	return (
		<Project titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} name={"raytracer"} childrens={[
			<div className={"txt w-full text-center p-60"}>
				<div className={"txt"}>Raytracer is my <I>favorite</I> project.</div>
				<div className={"txt"}>It is the <I>reason</I> i got into EPITECH.</div>
			</div>,
			<div className={"w-full flex items-center justify-center"}>
				<div className={"w-1/3"}></div>
				<div className={"txt w-2/3 text-end p-32"}>
					<div className={"txt"}>It is a second year group</div>
					<div className={"txt"}>project written in <I>C++</I>.</div>
					<br/><br/>
					<div className={"txt"}>We were 3,</div>
					<div className={"txt"}>and since i loved this</div>
					<div className={"txt"}>project so much,</div>
					<div className={"txt"}>i decided to do it</div>
					<div className={"txt"}>almost <I>entirely alone x)</I></div>
				</div>
			</div>,
			<div className={"txt w-3/4 text-start"}>
				<div className={"txt"}>The goal was to create a so</div>
				<div className={"txt"}>called <I>"raytracer"</I>, a program</div>
				<div className={"txt"}>that can render <I>3D scenes</I></div>
				<div className={"txt"}>into <I>2D images</I>.</div>
			</div>,
			<div className={"txt w-3/4 text-start"}>
				<div className={"txt"}>Calculating the casts of <I>lights</I></div>
				<div className={"txt"}>and <I>shadows</I> on objects</div>
			</div>,

			<div className={"txt w-full h-full text-center"}><div className={"txt"}>This project is maybe the <I>cleanest</I></div>
				<div className={"txt"}><I>architecture</I> i've ever made.</div>
				<div className={"txt"}>It was a real pleasure to work on it.</div>
			</div>
			,
			<div className={"w-full flex flex-col justify-end items-end"}>
				<div className={"txt w-2/3 text-end p-32"}>
					<div className={"txt"}>Going into <I>technical</I></div>
					<div className={"txt"}>stuff would not be of</div>
					<div className={"txt"}><I>much interest</I>, so i'll just</div>
					<div className={"txt"}>leave it at that.</div>
				</div>
				<div className={"txt w-full text-start p-32"}>
					<div className={"txt"}>Check out the repository to gain more</div>
					<div className={"txt"}>insight on the project.</div>
				</div>
			</div>,
		]} />
	)
}
