import React, {ReactNode, useRef, useEffect} from "react";
import Project, { I } from "@/app/pages/projects/project";
import { gsap} from "gsap";
import localFont from "next/font/local";

const tl = gsap.timeline();

export default function Shell({ titleRef, filterRef, bgRef }: {
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
		<Project titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} name={"42sh"} childrens={[
			<section className={`w-screen h-full flex justify-center items-center flex-col`}>
				<div className={"w-full h-full flex items-center flex-col justify-center"}>
					<div className={"w-full text-start flex opacity-100 -inset-y-0 p-32"}>
						<div className={"w-2/3"}>
							<I>42shell</I> is my <I>first year final</I> project at EPITECH Strasbourg.
						</div>
						<div className={"w-auto"}>
						</div>
					</div>
					<div className={"w-full flex justify-end items-center p-32"}>
						<div className={"w-auto "}></div>
						<div className={"w-2/3 text-end "}>
							<I>Written in C only</I>, this group project was the first i've made and one of the <I>toughest</I> still.
						</div>
					</div>
				</div>
			</section>,
				<div className={"w-full h-auto flex items-center justify-center"}>
					<img alt={"42sh"} src={"/images/projects/42sh.png"} className={"object-cover"}/>
				</div>,
			<div className={"w-full flex flex-col justify-start items-start"}>
				<div className={"p-48 text-center w-full"}>
					It is a shell that can execute <I>commands</I>, manage environment <I>variables</I> and
					handle <I>signals</I>.
				</div>
				<div className={"p-48 text-start w-3/4"}>
					I was in charge of the <I>environment variables</I>, <I>parsing</I> and <I>built-in
					functions</I> (setenv, env, unsetenc, cd and echo).
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


