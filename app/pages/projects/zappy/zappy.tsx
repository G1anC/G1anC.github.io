import React, {ReactNode} from "react";
import Project, {I} from "@/app/pages/projects/project";

export default function Zappy({ titleRef, filterRef, bgRef }: {
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
	bgRef: React.RefObject<HTMLDivElement>
}): ReactNode {
	return (
		<Project titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} name={"zappy"} childrens={[
			<div className={"txt w-full text-center p-60"}>
				<div className={"txt"}>Zappy is my second year <I>final</I> project at EPITECH.</div>
			</div>,
			<div className={"w-full flex items-center justify-center"}>
				<div className={"w-1/3"}></div>
				<div className={"txt w-2/3 text-end p-32"}>
					<div className={"txt"}>The goal is to create a</div>
					<div className={"txt"}><I>0 player</I> game</div>
					<div className={"txt"}>with 3 different parts.</div>
				</div>
			</div>,
			<div className={"txt w-3/4 text-start"}>
				<div className={"txt"}>the gui made in <I>C++</I>,</div>
				<div className={"txt"}>the Server made in <I>C</I></div>
				<div className={"txt"}>and the IA made in <I>Rust</I></div>
			</div>,
			<div className={"txt w-3/4 text-start"}>
				<div className={"txt"}>The project's goal is</div>
				<div className={"txt"}>to create families of <I>monsters</I></div>
				<div className={"txt"}>that can <I>evolve</I> and <I>procreate</I> using ressources.</div>
			</div>,

			<div className={"txt w-full h-full text-center"}><div className={"txt"}>My job was making a cool GUI using <I>RAYLIB</I></div>
				<div className={"txt"}>So i decided to make it a <I>chess</I> game</div>
				<div className={"txt"}>When the monsters evolve </div>
				<div className={"txt"}>they become a <I>better piece</I>.</div>
			</div>,

			<div className={"w-full flex flex-col justify-end items-end"}>
				<div className={"txt w-2/3 text-end p-32"}>
					<div className={"txt"}><I>marketing</I> it as an auto</div>
					<div className={"txt"}>chess player with AI that </div>
				<div className={"txt"}>battle each others.</div>
				</div>
				<div className={"txt w-full text-start p-32"}>
					<div className={"txt"}>Check out the repository to gain more</div>
					<div className={"txt"}>insight on the project.</div>
				</div>
			</div>,
		]} />
	)
}