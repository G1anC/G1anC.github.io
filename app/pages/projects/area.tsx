import React, {ReactNode} from "react";
import Project from "@/app/pages/projects/project";

export default function Area({ titleRef, filterRef, bgRef }: {
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
	bgRef: React.RefObject<HTMLDivElement>
}): ReactNode {

	return (
		<Project titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} name={"area"} childrens={[
			<section className={`w-screen h-full flex justify-center items-start flex-col`}>
				<div className={"w-full h-screen flex items-center justify-start"}>
					<div className={"w-2/3 flex items-center text-start justify-center p-32"}>
						AREA or Action-REaction is a 3rd year web project from EPITECH, the goal was to recreate as we wanted the functionality of the website IFTTT.
						Creating webhooks and easily connecting to multiple platforms was the main purpose here.
					</div>

				</div>
			</section>,
			<section>
				<div className={"w-full h-full flex items-center justify-center"}>
					<div className={"w-1/3"}></div>
					<div className={"w-2/3 h-full flex items-center justify-center text-end px-32 py-16"}>
						This project can be restructured into 3 parts: backend, mobile and frontend.
						<br/>
						My part was everything that surrounded the front.
					</div>
				</div>
				<div className={"w-1/3 text-start pl-32 pb-16"}>
						From creating the mockups with Figma:
				</div>
			</section>,
			<section>
				<div className={"w-full h-full flex items-center justify-center"}>
					<img className={"w-11/12 h-full object-cover"} src={"/images/projects/mockup.png"}/>
				</div>
			</section>,
			<section>
				<div className={"w-full h-full flex items-center justify-center"}>
					<img className={"w-11/12 h-full object-cover"} src={"/images/projects/mobile.png"}/>
				</div>
			</section>,
			<section className={"w-full h-full"}>
				<div className={"w-full h-full flex items-center  justify-center"}>
					<div className={"w-1/3 text-start pl-32"}>
						<br/>
						To developing it:
						<br/>
					</div>
					<div className={"w-2/3"}></div>
				</div>
			</section>,
			<section>
				{/*<img className={"w-full h-full object-cover p-10"} src={"/images/projects/mobileMockup.png"}/>*/}
			</section>
		]}
		/>
	)
}