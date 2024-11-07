'use client';

import React, {useState, useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import localFont from 'next/font/local';
import { useGSAP } from '@gsap/react';
import "../globals.css";


const PPul = localFont({
    src: "../../public/ppul.otf",
});

const TextFont = localFont({ 
	src: "../../public/HalenoirCompact-Thin.otf",
	weight: "100",
 })

 const BigFont = localFont({ 
	src: "../../public/Halenoir-Black.otf",
	weight: "800",
 })


const menuLinks = [
    { path: "/", name: "Home", font: PPul, style: "capitalize " },
    { path: "/pages/about", name: "About", font: TextFont, style: "uppercase" },
    { path: "/pages/projects", name: "Projets", font: TextFont, style: "uppercase" },
    { path: "/pages/contact", name: "Contact", font: TextFont, style: "uppercase" },
]



const Menu = () => {
	const container = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	let tl = useRef<gsap.core.Timeline>();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	}

	useGSAP(() => {
		gsap.set(".menu-link-item-holder", {y: 200});
		tl.current = gsap.timeline({paused: true})
			.to(".menu-overlay", {
				duration: 1.25,
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
				ease: "power4.inOut"
			})
			.to(".menu-link-item-holder", {
				duration: 1,
				y: 0,
				delay: -0.75,
				stagger: 0.1,
				ease: "power4.inOut"
			})
	}, {scope: container})

	useEffect(() => {
		if (!tl.current) return
		if (isMenuOpen) {
			tl.current.play()
		} else {
			tl.current.reverse()
		}
	}, [isMenuOpen])

	return (
		<div className={`z-[999]`} ref={container}>	

			{/* MENU BUTTON WHEN CLOSED */}		
			<div className={` fixed top-0 left-0 ${PPul.className} text-5xl p-4 w-full flex justify-center items-center z-[4]`}>
				<button className="menu-open cursor-pointer" onClick={toggleMenu}>
					Menu
				</button>
			</div>

			{/* MENU OVERLAY SHOWING WHEN OPENED */}		
			<div className={`menu-overlay fixed ${PPul.className} top-0 left-0 w-full p-4 flex flex-col justify-center items-center z-[5] h-full bg-black `} style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}}>
				<div className="menu-overlay-bar cursor-pointer" >
					<button onClick={toggleMenu} className={`${PPul.className} text-5xl`}>Close</button>
				</div>
				
				<div className="flex h-full w-full flex-col justify-center">
					<>
						{menuLinks.map((link, i) => (
							<div className="menu-link-item flex justify-start items-end h-[200px] duration-100"
								style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }} key={i}
							>
								<div className="menu-link-item-holder relative">
									<Link
										href={link.path}
										data-index={i}
										onClick={() => {
											toggleMenu()
										}}
										className={`menu-link leading-[70%] tracking-[-0.05em] text-[200px] ${link.font.className} ${link.style}`}
										onMouseOver={(event) => {
											/*const linkElement = event.currentTarget;
											const letters = link.name.split("").map((char, i) => {
												const span = document.createElement("span");
												span.textContent = char;
												span.style.opacity = "0";
												if (i === 0)
													span.style.textTransform = "capitalize";
												return span;
											});
											linkElement.innerHTML = ""; 
											letters.forEach((span) => linkElement.appendChild(span));
											gsap.to(letters, {
												opacity: 1,
												y: 0,
												duration: 0.3,
												stagger: 0.1,
											});
											gsap.to(linkElement, {
												scale: 1.1,
												duration: 0.3,
											});
											*/	
										}}
									>
										{link.name}
									</Link>
								</div>
							</div>
						))}
					</>
				</div>
			</div>
		</div>

	);
}

export default Menu;