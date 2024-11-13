'use client';

import React, {useEffect, useState, useRef} from "react";
import { gsap } from "gsap";
import ScrollTrigger from  "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function	Projects() {

	return (
		<div className={"w-full h-full flex-1 flex items-center justify-start"}>
			{/*<img className={"sticky top-0 w-full h-full"} src={"/images/projects/42sh.png"} alt={"Project 1"} />*/}
		</div>
	)
}