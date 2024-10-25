import React, {ReactNode} from "react";
import Project, {I} from "@/app/pages/projects/project";
import localFont from "next/font/local";

const ImportantFont = localFont({ src: "../../../../public/Halenoir-Black.otf" })


export default function Wolfram({ titleRef, filterRef, bgRef }: {
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
	bgRef: React.RefObject<HTMLDivElement>,
}): ReactNode {
	return (
		<Project titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} name={"wolfram"} childrens={[
			<section className={`w-screen h-full flex justify-center items-center flex-col`}>
				<div className={"w-full h-full flex items-center flex-col justify-center"}>
					<div className={"w-full text-start flex opacity-100 -inset-y-0 p-32"}>
						<div className={"w-2/3"}>
							<I>Wolfram</I> is one of my 2 <I>favorite</I> projects at EPITECH.
						</div>
						<div className={"w-auto"}>
						</div>
					</div>
					<div className={"w-full flex justify-end items-center p-32"}>
						<div className={"w-auto "}></div>
						<div className={"w-2/3 text-end "}>
							The goal is to render <I>Wolfram's Elementary Cellular Automata</I> (we're gonna call it <I>WECA</I>).
							<br/><br/>
							A complicated name for a wonderful mathematical experience.
						</div>
					</div>
				</div>
			</section>,
			<div className={"w-full h-auto flex items-center justify-center"}>
				<img alt={"42sh"} src={"/images/projects/42sh.png"} className={"object-cover"}/>
			</div>,
			<div className={"w-full flex flex-col justify-start items-start"}>
				<div className={"p-48 text-center w-full"}>
					Based on a single row and a set of rule from 0 to 255, <I>WECA</I> is a definition of what happens to the said cell at every turn and displays it.
				</div>
				<div className={"p-48 text-start w-3/4"}>
					Check out this <a
						href={"https://mathworld.wolfram.com/ElementaryCellularAutomaton.html"}>
						<span className={`text-blue-300 ${ImportantFont.className}`}>course</span>
					</a> if you want to know more about it, i would've take a while.
				</div>
			</div>,

			<div className={"w-full h-full flex items-center p-32 "}>
				<div className={"w-full h-full"}>
					<div className={"w-full h-full flex items-center justify-start"}>
						<img alt={"42sh"} src={"/images/projects/myStrToWordArray.png"} className={"object-fill "}/>
					</div>
				</div>
				<div className={" ml-10 text-end w-full"}>
					<I>Not so fun fact</I>: <br/>I wrote one of the most <I>hideous</I> function i've made...<br/><br/>
					Don't blame me i love coding fun stuff <I>:D</I>
				</div>

			</div>,

			<div className={"w-full flex justify-center"}>
				<div className={"w-2/3 h-full text-center p-32"}>
					More seriously, I've learned <I>a lot</I> from this project<br/>
					(especially writting <I>readable code</I>), and i'm really proud of the <I>result</I>.
				</div>
			</div>
		]}
		/>
	)
}