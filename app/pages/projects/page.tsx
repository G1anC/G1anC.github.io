'use client';

import React, {useEffect, useState, useRef} from "react";
import Menu from "../../components/menu";
import Bottom from "@/app/components/bottom";
import localFont from "next/font/local";
import { gsap } from "gsap";
import Wolfram from "@/app/pages/projects/wolfram"
import Area from "@/app/pages/projects/area"
import Shell from "@/app/pages/projects/42sh"
import Glados from "@/app/pages/projects/glados"
import Rpg from "@/app/pages/projects/rpg"
import Designs from "@/app/pages/projects/designs";
import Zappy from "@/app/pages/projects/zappy";
import Raytracer from "@/app/pages/projects/raytracer";
import Portfolio from "@/app/pages/projects/portfolio";
import ScrollTrigger from  "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function	Projects() {
	const bgRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);
	const filterRef = useRef<HTMLDivElement>(null);
	const sectionsRef = useRef<React.RefObject<HTMLDivElement>[]>([]);
	const projects: React.ReactNode[] = [
	        <Shell titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	        <Raytracer titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	        <Wolfram titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	        <Area titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	        <Glados titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	        <Designs titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	        <Zappy titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	        <Rpg titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
			<Portfolio titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	];
	const [selectedProject, setSelectedProject] = useState<React.ReactNode>(projects[8]);
	const [i, setI] = useState(8);

	useEffect(() => {
		if (!bgRef.current || !titleRef.current || !filterRef.current || !sectionsRef.current)
			return
		gsap.to(bgRef.current, {duration: 0.3, opacity: 1, ease: "power2.out"});
		gsap.to(titleRef.current, {duration: 1, opacity: 1, y: 20});
		gsap.to(filterRef.current, {duration: 0.3, opacity: 1, backdropFilter: "blur(20px)", ease: "power2.out"});
		gsap.to(filterRef.current, {
			scrollTrigger: {
				trigger: titleRef.current,
				start: "top top",
				end: "center top",
				scrub: true,
			},
			backgroundColor: "black",
			opacity: 1
		});
	}, [selectedProject]);

	return (
		<>
			<div className={"w-full overflow-x-hidden h-full top-0 "}>
				<div className={"w-full h-full"}>
					<div className={"w-screen m-0 p-0 h-full flex flex-col items-center justify-center"}>
						{selectedProject}
					</div>
				</div>
			</div>

			<div className={"w-screen h-screen sticky z-30"}>
				<Menu discarded={"projects"}/>

				<div className={"fixed top-0 left-0 w-32 h-full flex justify-center items-center z-30"}>
					<img
						alt={"minus"}
						src={"/images/arrow.svg"}
						id={"left"}
						className={"w-10 text-white rotate-[180deg] cursor-pointer"}
						onClick={() => {
							gsap.to(filterRef.current, {
								duration: 0.05,
								opacity: 1,
								ease: "power2.out",
								backdropFilter: "blur(20px)"
							});
							gsap.to(titleRef.current, {
								x: 100,
								duration: 0.2,
								opacity: 0,
								ease: "power1.in",
								onComplete: () => {
									window.scrollTo(0, 0);
									let val = (i - 1 + projects.length) % projects.length;
									setI(val);
									setSelectedProject(projects[val]);
									console.log(val);
								}
							});
						}}
					/>
				</div>

				<div className={"fixed top-0 right-0 w-32 h-full flex justify-center items-center z-30"}>
					<img
						alt={"plus"}
						src={"/images/arrow.svg"}
						id="right"
						className={"w-10 text-white cursor-pointer"}
						onClick={() => {
							gsap.to(filterRef.current, {
								duration: 0.05,
								opacity: 1,
								ease: "power2.out",
								backdropFilter: "blur(20px)"
							});
							gsap.to(titleRef.current, {
								x: -100,
								duration: 0.2,
								opacity: 0,
								ease: "power1.in",
								onComplete: () => {
									window.scrollTo(0, 0);
									let val = (i + 1 + projects.length) % projects.length;
									setI(val);
									setSelectedProject(projects[val]);
								}
							});
						}}
					/>
				</div>
			</div>


		</>

	)
}