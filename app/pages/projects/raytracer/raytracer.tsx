import React, {ReactNode} from "react";
import Project from "@/app/pages/projects/project";

export default function Raytracer({ titleRef, filterRef, bgRef, }: {
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
    bgRef: React.RefObject<HTMLDivElement>,
}): ReactNode {
	return (
		<Project titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} name={"raytracer"} childrens={["caaaaaaca"]} />
	)
}