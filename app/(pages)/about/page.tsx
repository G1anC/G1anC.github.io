'use client';

import React, { useState, useRef } from 'react';
import localFont from "next/font/local";
import FluidBack from "@/app/components/FluidBack";
import InfoBlock from "@/app/components/InfoBlock";

// Import your font locally
const SanFranciscoFont = localFont({
	src: "../../../public/SanFrancisco.woff",
});

const MeDiscussions: { question: string; answers: string[] }[] = [
	{
		question: 'Who are you ?',
		answers: [
			'I\'m Noah Steiniger :)',
			'A junior student at Epitech Strasbourg !'
		]
	},
    {
        question: 'How do you see yourself in the future ?',
        answers: [
            'hmmm...',
            'good question lmao',
            'More seriously, in the near future,',
            'I see myself as a passionate web designer, learning from the bests.',
        ]
    },
    {
        question: 'And in the far future ?',
        answers: ['Well, I really want to create my own company and work with the bests in the industry.']
    },
	{
		question: 'What is your purpose as a young web creator ?',
		answers: [
			'I absolutely love designing beautiful websites and code them to life.',
			'Finding interest in all the things that surrounds me in life, I adore learning new stuff !'
		]
	},
    {
        question: 'What are you like as a person / coworker ?',
        answers: [
            'I\'m an extroverted person, always looking for new challenges and experiences, I love working in a team and share my knowledge with others.',
            'Always listening to advice and taking every opinions into account, even the most negative ones.'
        ]
    },
	{
		question: 'So what are these interests that you are talking about ?',
		answers: [
			'Well, first of all I am a huge fan of music, from R\'n\'B, to dreampop, to Shoegaze, to weird avant-gardiste neo Jazz shit.',
			'I also read philosophy (hopefully without existential crisis), history, and psychiatry (big luv on Carl G. Jung).',
            'Coming from a very sportive family, i played basket-ball for 12 years',
            'and now i do rock climbing which i love, i think about the dyno i can\'t make all the time'
		]
	}
];

// Message component to render discussions
const Message = ({ value }: { value: string | string[] }) => {
	const Bubble = ({ value, className }: { value: string, className: string }) => (
		<div className={`text-xl rounded-[20px] p-4 mb-2 w-auto max-w-[66.6666%] ${className} ${SanFranciscoFont.className}`}>
			{value}
		</div>
	);

	return (
		<div className={`flex flex-col mx-5`}>
			{typeof value === 'string' ? (
				<Bubble value={value} className="z-1 bg-zinc-700 text-white self-start text-start" />
			) : (
				(value as string[]).map((v, i) => (
					<Bubble value={v} className="z-1 bg-blue-500 text-white self-end text-end" key={i} />
				))
			)}
		</div>
	);
};

// Main Page component
export default function About() {
	// @ts-ignore
    const container = useRef<HTMLDivElement>(null);
    const effect = useRef<HTMLDivElement>(null);
    const filter = useRef<HTMLDivElement>(null);

	return (
        <div ref={container}
             className="overflow-hidden relative flex flex-col h-full rounded-b-2xl w-full items-center justify-center">
            {/*<FluidBack effect={effect} />*/}
            <div ref={filter} className="absolute top-0 left-0  w-full h-full"
                 style={{backgroundImage: "radial-gradient(circle, transparent, #0000ff30)"}}></div>
            <div className="relative px-4 w-full h-full flex flex-col items-center justify-center">
                <InfoBlock b={false} left={[
                    <div className="clipper">
                        <div className="txt relative">yeah ! that's me</div>
                    </div>,
                    <div className="clipper">
                        <div className="txt relative">on this photo</div>
                    </div>,
                ]} center={[
                    <div className="clipper">
                        <div className="relative txt">taken and</div>
                    </div>,
                    <div className="clipper">
                        <div className="relative txt">edited</div>
                    </div>,
                ]} right={[
                    <div className="clipper">
                        <div className="relative txt">by my wonderful</div>
                    </div>,
                    <div className={"clipper"}>
                        <div className={"relative txt"}>girlfriend :3</div>
                    </div>
                ]}/>

                <div className={"w-full h-[80%] flex items-center justify-center gap-x-12"}>
                    <div className={" h-full aspect-square border border-1 border-[#A3A3A3] p-2 rounded-2xl"}>
                        <div className={"bg-black/90 w-full h-full rounded-2xl p-4 overflow-y-auto"}>
                            {MeDiscussions.map((d, i) => (
                                <div key={i} className={"mb-4"}>
                                    <Message value={d.question} />
                                    <Message value={d.answers} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={"h-full aspect-square border border-1 border-[#A3A3A3] rounded-2xl p-2"}>
                        <img src={"/images/me.png"} alt={"Me"} className={"rounded-2xl"} />
                    </div>
                </div>

                <InfoBlock b={true} left={[
                    <div className={"relative txt"}>Born in Strasbourg</div>,
                    <div className={"relative txt"}>67000</div>,
                ]} center={[
                    <div className="txt" key={0}>
                        <div>11 / 01 / 2004</div>
                    </div>
                ]} right={[
                    <div className="txt" key={0}>RAISED IN PHALSBOURG</div>, "57370 (best place on earth)"
                ]}/>
            </div>
        </div>
    );
};
