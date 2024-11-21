'use client';

import React, { useState } from 'react';
import localFont from "next/font/local";
import FluidBack from "@/app/components/FluidBack";

// Import your font locally
const SanFranciscoFont = localFont({
	src: "../../../public/SanFrancisco.woff",
});

/*

<div className="h-full w-full flex py-10 flex-col justify-start rounded-xl border-white overflow-y-auto scrollbar-thumb-gray-800/50 scrollbar-track-transparent custom-scrollbar border-opacity-20 bg-black/70">
							{ right && skills ? (
								<div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-4">
									{skills.map((skill, i) => (
										<div className="flex items-center justify-center" key={i}>
											<img src={skill.src} alt={`Skill ${i}`} className="w-1/2 h-1/2 object-contain" />
										</div>
									))}
								</div>
							) : (
	MeDiscussions.map((discussion, i) => (
		<React.Fragment key={i}>
			<div className="ml-5 flex mt-5 items-start justify-start">
				<div
					className="w-[40px] h-[40px] bg-white/20 rounded-full flex-shrink-0"
					style={{
						backgroundImage: `url('/images/chat.png')`,
						backgroundSize: "contain",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				></div>
				<Message value={discussion.question} />
			</div>
			<div className="mr-5 mb-5 flex items-start justify-end">
				<Message value={discussion.answers} />
				<div
					className="w-[40px] h-[40px] bg-white/20 rounded-full flex-shrink-0"
					style={{
						backgroundImage: `url('/images/me.png')`,
						backgroundSize: "contain",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				></div>
			</div>
		</React.Fragment>
	))
)}
</div>

*/
const MeDiscussions: { question: string; answers: string[] }[] = [
	{
		question: 'Who are you ?',
		answers: [
			'I\'m Noah Steiniger :)',
			'A junior student at Epitech Strasbourg !'
		]
	},
	{
		question: 'What is your purpose as a young developer ?',
		answers: [
			'I absolutely love designing beautiful websites and code them to life.',
			'Finding interest in all the things that surrounds me in life, I adore learning new stuff !'
		]
	},
	{
		question: 'So what are these interests that you are talking about ?',
		answers: [
			'Well, first of all I am a huge fan of music, from R\'n\'B, to weird Jazz, to Shoegaze.',
			'But that\'s not all, I also read philosophy (hopefully without existential crisis), history, sophism, and psychiatry.'
		]
	}
];

enum MessType {
	Chat = 0,
	Me = 1,
}

// Message component to render discussions
const Message = ({ value }: { value: string | string[] }) => {
	const Bubble = ({ value, className }: { value: string, className: string }) => (
		<div className={`text-xl rounded-[20px] px-5 py-4 mb-1 w-auto h-full ${className} ${SanFranciscoFont.className}`}>
			{value}
		</div>
	);

	return (
		<div className={`flex flex-col mx-5`}>
			{typeof value === 'string' ? (
				<Bubble value={value} className="bg-zinc-900 self-start text-start" />
			) : (
				(value as string[]).map((v, i) => (
					<Bubble value={v} className="bg-blue-500 self-end text-end" key={i} />
				))
			)}
		</div>
	);
};

// Main Page component
export default function About() {
	// @ts-ignore
	return (
		<>
			<div className={`overflow-hidden relative flex flex-col h-full rounded-b-2xl w-full items-center justify-center`}>
				<div className={'w-full flex justify-center items-center border-b border-b-[#A3a3a3] h-2/3'}>
					<div className={'h-full w-full'}></div>
					<div className={'h-full aspect-square border-r border-r-[#a3a3a3]'}>
						<img width={"100%"} height={"100%"} src={'/images/me.png'} alt={"me"}/></div>
					<div className={'w-[100px] h-full flex flex-col justify-center items-center'}>{"CA S'EST MOI".split("").map((char, i) => {
						return (
							<div key={i}>{char}</div>
						)
					})
					}</div>
				</div>
				<div className={'w-full h-1/3'}>
				</div>
			</div>
		</>
	);
};
