import React, {ReactNode} from "react";
import Project from "@/app/pages/projects/project";
import { gsap} from "gsap";
import {white} from "next/dist/lib/picocolors";

export default function Shell({ titleRef, filterRef, bgRef, sectionsRef }: {
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
	bgRef: React.RefObject<HTMLDivElement>
	sectionsRef: React.RefObject<HTMLDivElement>[]
}): ReactNode {

	return (
		<Project titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} name={"42sh"} childrens={[
			<>
				42shell is my first year final project at EPITECH Strasbourg. It is a shell that can execute commands, manage environment variables, and handle signals. It is written in C.
				It is a group project and i was in charge of the environment variables, parsing and built-in functions (setenv, env, unsetenc, cd and echo).
			</>,
			<>
				caca
			</>
		]}>
		</Project>
	)
}
