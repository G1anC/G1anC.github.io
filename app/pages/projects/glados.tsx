import React, {ReactNode} from "react";
import Project from "@/app/pages/projects/project";

export default function Glados({ titleRef, filterRef, bgRef, sectionsRef }: {
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
	bgRef: React.RefObject<HTMLDivElement>,
	sectionsRef: React.RefObject<HTMLDivElement>[]
}): ReactNode {
	return (
		<Project titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} sectionsRef={sectionsRef} name={"glados"} childrens={["new children"]} />

	)
}
