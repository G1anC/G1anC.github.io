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
import ScrollTrigger from  "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function	Projects() {
	const bgRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);
	const filterRef = useRef<HTMLDivElement>(null);
	const sectionsRef = useRef<React.RefObject<HTMLDivElement>[]>([]);
	const projects: React.ReactNode[] = [
	        <Shell titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} sectionsRef={sectionsRef.current} />,
	        <Raytracer titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} sectionsRef={sectionsRef.current} />,
	        <Wolfram titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} sectionsRef={sectionsRef.current} />,
	        <Area titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} sectionsRef={sectionsRef.current} />,
	        <Glados titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} sectionsRef={sectionsRef.current} />,
	        <Designs titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} sectionsRef={sectionsRef.current} />,
	        <Zappy titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} sectionsRef={sectionsRef.current} />,
	        <Rpg titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} sectionsRef={sectionsRef.current} />
	];
	const [selectedProject, setSelectedProject] = useState<React.ReactNode>(projects[0]);
	const [i, setI] = useState(0);

	useEffect(() => {
		if (!bgRef.current || !titleRef.current || !filterRef.current || !sectionsRef.current)
			return
		gsap.to(bgRef.current, {duration: 0.3, opacity: 1, ease: "power2.out"});
		gsap.to(titleRef.current, {duration: 1, opacity: 1, y: 20});
		gsap.to(filterRef.current, {duration: 0.3, opacity: 1, backdropFilter: "blur(100px)", ease: "power2.out"});
		gsap.to(titleRef.current, {
			scrollTrigger: {
				trigger: titleRef.current,
				start: "top top",
				end: "bottom top",
				scrub: 1,
				toggleActions: "play pause reverse pause",
			},
			y: 850,
		});
		console.log(sectionsRef.current);
			}, [selectedProject]);




	return (
		<div className={"w-screen overflow-x-hidden relative h-full"}>
			<Menu discarded={"projects"}/>
			<div className={"w-full h-full"}>
				<div className={"absolute top-0 w-screen h-screen"}>
					<div className={"absolute z-30 left-0 w-20 h-full flex justify-center items-center"}>
						<img alt={"minus"} src={"/images/arrow.svg"} id={"left"} className={"w-10 text-white rotate-[180deg]"}
							 onClick={() => {
								 gsap.to(filterRef.current, {
									 duration: 0.05,
									 opacity: 1,
									 ease: "power2.out",
									 backdropFilter: "blur(100px)"
								 })
								 gsap.to(titleRef.current, {
									 x: 100,
									 duration: 0.2,
									 opacity: 0,
									 ease: "power1.in",
									 onComplete: () => {
										 let val = (i - 1 + projects.length) % projects.length
										 setI(val)
										 setSelectedProject(projects[val]);
										 console.log(val);
									 }
								 });
							 }
							 }/>
					</div>
					<div className={"absolute z-30 right-0 w-20 h-full flex justify-center items-center"}>
						<img alt={"plus"} src={"/images/arrow.svg"} id="right" className={"w-10 text-white"}
							 onClick={() => {
								 gsap.to(filterRef.current, {
									 duration: 0.05,
									 opacity: 1,
									 ease: "power2.out",
									 backdropFilter: "blur(100px)"
								 })
								 gsap.to(titleRef.current, {
									 x: -100,
									 duration: 0.2,
									 opacity: 0,
									 ease: "power1.in",
									 onComplete: () => {
										 let val = (i + 1 + projects.length) % projects.length
										 setI(val)
										 setSelectedProject(projects[val]);
										 console.log(val)
									 }
								 });
							 }
							 }/>
					</div>
				</div>
				<div className={"w-screen m-0 p-0 h-full flex flex-col items-center justify-center"}>{selectedProject}</div>

			</div>
		</div>
	)
}