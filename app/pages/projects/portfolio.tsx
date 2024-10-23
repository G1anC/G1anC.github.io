import React, {ReactNode, useRef, useEffect} from "react";
import Project, { I } from "@/app/pages/projects/project";
import { gsap} from "gsap";
import localFont from "next/font/local";

const tl = gsap.timeline();

export default function Portfolio({ titleRef, filterRef, bgRef }: {
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
	bgRef: React.RefObject<HTMLDivElement>
}): ReactNode {

	const introRef = useRef(null);
	const explanationRef = useRef(null);

	useEffect(() => {
		if (!introRef.current) return;
		gsap.from(introRef.current, {
			scrollTrigger: {
				trigger: introRef.current,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
			},
			opacity: 0,
			y: 50,
			duration: 1,
			ease: "power2.out",
		});
	}, [introRef]);

	return (
		<Project titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} name={"portfolio"} childrens={[
			<div className={"w-2/3 text-start p-32"}>
				The <I>Portfolio</I> project is an entangled one. 4 versions of it were made, each
				one <I>different</I> from the others.
			</div>,

			<div className={"w-full flex justify-end items-center p-32"}>
				<div className={"w-auto"}></div>
				<div className={"w-2/3 text-end "}>
					<I>1.</I><br/> The starting point is the discovery of <I>HTML</I>, <I>CSS</I> and <I>JS</I>.<br/>
					Truly a <I>mess</I> but a <I>fun</I> one that teached everything i needed to know.
				</div>
			</div>,
			<div className={"w-full h-auto flex items-center justify-center"}>
				<img alt={"42sh"} src={"/images/projects/portfolio1.png"} className={"object-cover"}/>
			</div>,
			<div className={"p-48 text-center lowercase"}>
				Yeahhhh...
			</div>,

			<div className={"w-full flex justify-start items-center p-32"}>
				<div className={"w-2/3 text-start"}>
					<I>2.</I><br/> Next, i found my weapon of choice: <I>Figma</I>.<br/>
					From there, i discovered everything i could do with this wonder and started trying out new things.
				</div>
				<div className={"w-auto"}></div>
			</div>,
			<div className={"w-full h-auto flex items-center justify-center"}>
				<img alt={"42sh"} src={"/images/projects/portfolio2.png"} className={"object-cover"}/>
			</div>,
			<div className={"p-48 text-center"}>
				A bit better but a lot to learn.
			</div>,
			<div className={"w-full flex justify-start items-center p-32"}>
				<div className={"w-2/3 text-start"}>
					I never coded it because i knew i could design something way better.
				</div>
				<div className={"w-auto"}></div>
			</div>,


			<div className={"w-full flex justify-end items-center p-32"}>
				<div className={"w-auto"}></div>
				<div className={"w-2/3 text-end "}>
					<I>3.</I><br /> At this point, i really wanted to do something that fitted me better.
					So i searched for inspiration and found some really <I>cool</I> ideas.
				</div>
			</div>,
			<div className={"w-full h-auto flex items-center justify-center"}>
				<img alt={"42sh"} src={"/images/projects/portfolio3.png"} className={"object-cover"}/>
			</div>,
			<div className={"w-full h-auto flex items-center justify-center"}>
				<img alt={"42sh"} src={"/images/projects/portfolio3NavMenu.png"} className={"object-cover"}/>
			</div>,
			<div className={"w-full h-auto flex items-center justify-center"}>
				<img alt={"42sh"} src={"/images/projects/portfolio3works.png"} className={"object-cover"}/>
			</div>,
			<div className={"w-full h-auto flex items-center justify-center"}>
				<img alt={"42sh"} src={"/images/projects/portfolio3rpg.png"} className={"object-cover"}/>
			</div>,
			<div className={"w-full h-auto flex items-center justify-center"}>
				<img alt={"42sh"} src={"/images/projects/portfolio3rpgH.png"} className={"object-cover"}/>
			</div>,
			<div className={"p-48 text-center"}>
				I really liked this one, loved the aestethic the logic.
				<br/>
				<br/>
				<I>But.</I>
			</div>,
			<div className={"w-full flex justify-start items-center p-32"}>
				<div className={"w-2/3 text-start"}>
					There was an <I>ick.</I><br/> I absolutely did <I>not</I> have the capacity to code this portfolio.
					<br/>And i abandoned it.<br/>Yeah, i know, <I>shame</I>...
				</div>
				<div className={"w-auto"}></div>
			</div>,



			<div className={"w-full flex justify-end items-center p-32"}>
				<div className={"w-auto"}></div>
				<div className={"w-2/3 text-end "}>
					<I>4.</I><br/> <I>I.<br/>Learned.<br/>React.<br/></I>
					Yeah, took me a while but i finally did it.<br/>And with that, i learned <I>Typescript</I>, <I>Next.js</I> and finally <I>G S A P</I> (my beloved).
				</div>
			</div>,

			<div className={"w-full flex justify-end items-center p-32"}>
				<div className={"w-auto"}></div>
				<div className={"w-2/3 text-end "}>
					This was the last boost i needed to finally code my <I>Portfolio</I>.<br/>
					And this is it ! :D
				</div>
			</div>,


			<div className={"w-full h-auto flex items-center justify-center"}>
				<img alt={"42sh"} src={"/images/projects/portfolio.png"} className={"object-cover"}/>
			</div>,

			<div className={"p-48 text-center"}>
				<I>Finally</I>, i'm really proud of this one.<br/> <br/>
				And this project definitely marked the start of my love for <I>Web Creation</I>.
			</div>,
		]}
		/>
	)
}


