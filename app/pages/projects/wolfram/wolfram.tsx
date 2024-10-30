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
			<div className={"w-full h-full flex items-center flex-col justify-center"}>
				<div className={"w-full text-start flex opacity-100 -inset-y-0 p-32"}>
					<div className={"w-2/3"}>
						<I>Wolfram</I> is one of my 2 <I>favorite</I> projects at EPITECH.
						We had to code it in <I>Haskell</I>.
					</div>
					<div className={"w-auto"}>
					</div>
				</div>
				<div className={"w-full flex justify-end items-center p-32"}>
					<div className={"w-2/3 text-end "}>
						The goal is to accurately render <I>Wolfram</I>'s Elementary <I>Cellular Automata</I>.
						<br/><br/>
					</div>
				</div>
			</div>,
			<div className={"w-full flex justify-end items-center p-32"}>
				<div className={" text-center "}>
					A complicated name for a <I>wonderful</I> mathematical experience.
					<br/>we're gonna call it<br/><br/> <I>WECA</I>
					<br/><br/>
				</div>
			</div>,

			<div className={"w-full h-auto flex items-center justify-center"}>
				<img alt={"42sh"} src={"/images/projects/wolfram.png"} className={"object-cover"}/>
			</div>,
			<div className={"w-full flex flex-col justify-start items-start"}>
				<div className={"p-48 text-end w-full"}>
					<I>WECA</I> is actually really simple and to explain it i'm gonna first explain what the <I>Game Of
					Life is</I>.
				</div>

				<div className={"p-32 text-start w-2/3"}>
					<I>The Game of life</I> is a white grid, where every cell can be either <I>alive</I> (white) or <i>dead</i> (black).
				</div>
			</div>,

			<div className={"w-3/4 p-32 text-center "}>
				The state of a cell is determined by its <I>neighbors</I> and by the <I>Rules</I> we use. <br/><br/>
				After the determination is done, we can render the next <I>generation</I> of cells.
			</div>,

			<div className={"w-full justify-center flex items-center flex-col"}>
				<div>Like <I>this</I>: <br/></div>
				<img src={"/images/projects/gameoflife.gif"} alt={"gameoflife"} className={"w-2/3 h-full p-32 object-cover"}/>
			</div>,

			<div className={"w-full text-end p-32"}>
				Well, <I>WECA</I> is the same but with <I>	1</I> Dimension instead of <I>2</I>.<br/>
				And we display the <I>next generation</I> below the previous one.<br/><br/>
				<div className={"p-48 text-start w-3/4"}>
					Check out this <a
						href={"https://mathworld.wolfram.com/ElementaryCellularAutomaton.html"}>
						<span className={`text-blue-300 ${ImportantFont.className}`}>course</span>
					</a> if you want to know more about it.
				</div>
			</div>,

			<div className={"w-full flex items-center justify-center gap-x-20 p-32"}>
				<img alt={"42sh"} src={"/images/projects/rule90.png"} className={"w-2/3 object-cover"}/>
				<div className={"w-1/3 text-end"}>
					For instance, here is the <I>Rule 90</I>
				</div>
			</div>,

			<div className={"w-full flex justify-center"}>
				<div className={"w-2/3 h-full text-center p-32"}>
					There is <I>256</I> of them, try them out !
					Here is the project <a
					href={"https://github.com/G1anC/Haskell-Projects"}>
					<span className={`text-blue-300 ${ImportantFont.className}`}>link</span>.
					<br/><br/><I>Check it out :)</I>
				</a>
				</div>
			</div>
		]}
		/>
	)
}