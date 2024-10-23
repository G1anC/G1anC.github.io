import React, {ReactNode, useRef, useEffect} from "react";
import Project from "@/app/pages/projects/project";
import { gsap} from "gsap";
import {white} from "next/dist/lib/picocolors";
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
				<div className={"w-full h-screen flex items-center justify-center"}>
					<div ref={introRef} className={"w-1/3 text-justify opacity-100 -inset-y-0 p-32"}>
						42shell is my first year final project at EPITECH Strasbourg. It is a shell that can execute
						commands, manage environment variables, and handle signals.
						Written in C only, this group project was the first i've made and one of the toughest yet.
					</div>
					<div className={"w-2/3 h-auto flex items-center justify-center"}>
						<img alt={"42sh"} src={"/images/projects/42sh.png"} className={"object-cover"}/>
					</div>
				</div>
			</section>,
			<section>
				<div className={"w-full h-full flex items-center justify-center"}>
					<div className={"w-1/2 h-full flex items-center justify-center"}>
						<img alt={"42sh"} src={"/images/projects/myStrToWordArray.png"} className={"object-cover"}/>
					</div>
					<div ref={explanationRef} className={"w-1/2 h-full text-justify p-32"}>
						I was in charge of the environment variables, parsing and built-in
						functions (setenv, env, unsetenc, cd and echo).
						<br />
						<br />
						Fun fact: 42sh was the placeholder for one of the most hideous function i've ever written...
						Seeing the faces of my coworkers when they saw my code was priceless.
						<br />
						I've learned a lot from this project (especially wrtting readable code), and i'm proud of the result.
					</div>
				</div>
			</section>,
			<section className={"w-full h-full"}>
				x
			</section>
		]}
		/>
	)
}
