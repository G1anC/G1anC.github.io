'use client';

import React, {useState, useRef, useEffect} from 'react';
import localFont from "next/font/local";
import FluidBack from "@/app/components/FluidBack";
import InfoBlock from "@/app/components/InfoBlock";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";

// Import your font locally
const SanFranciscoFont = localFont({
	src: "../../../public/SanFrancisco.woff",
});

const MeDiscussions: { questions: string[]; answers: string[] }[] = [
	{
		questions: ['Who are you ?'],
		answers: [
			'I\'m Noah Steiniger :)',
			'A junior student at Epitech Strasbourg !'
		]
	},
    {
        questions: ['I want to know you more', 'What is your purpose as a young web creator ?'],
        answers: [
            'Creating the best websites i can',
            'Showing to the world my creativity and my skills',
            'By always training, discovering',
            'and learning new stuff',
        ]
    },
    {
        questions: ['How do you see yourself in the future ?'],
        answers: [
            'hmmm...',
            'good questions lmao',
            'More seriously, in the near future,',
            'I see myself as a passionate web designer, learning from the bests.',
        ]
    },
    {
        questions: ['And in the far future ?'],
        answers: [
            'Well',
            'I really want to create my own company',
            'and work with the bests in the industry.',
            'Always challenging myself as a person and as a professional.',
        ]
    },

    {
        questions: ['Nice !','What are you like as a person/coworker ?'],
        answers: [
            'I\'m usually an extroverted person',
            'even though i like focusing alone on my work',
            'However i am a great coworker, always here to give a hand if needed.',
            'Always listening to advice', 'and taking every opinions into account,', 'even the most negative ones x)'
        ]
    },
	{
		questions: ['So what do you love in life ?'],
		answers: [
			'Well, first of all I am a huge fan of music!',
		]
	},
    {
        questions: ["Okay!! Tell me more!"],
        answers: [
            'from R\'n\'B, to dreampop, to Shoegaze, to weird avant-gardiste neo Jazz shit.',
            'I really listen to everything that is out there',
        ]
    },
    {
        questions: ["Interesting, what else do you like ?"],
        answers: [
            'I also read philosophy, hopefully without existential crisis',
            'history too',
            'and psychiatry (big luv on Carl G. Jung).',

        ]
    },
    {
        questions: ["Any activity ?"],
        answers: [
            "Yeah haha I'm a big sports guy :)",
            'Coming from a sportive family, i played basket-ball for 12 years',
            'and now i do rock climbing which i love',
            'i think about the dyno i can\'t make all the time'
        ]
    },
    {
        questions: ['It was a pleasure Noah', 'If you have any questions don\'t hesitate !'],
        answers: [
            'Yeah for me too',
            'Thank you ChatGPT'
        ]
    }
];


const Input = () => {
    let targetIndex = 0;
    let targetString = "Well, first of all I am a huge fan of music!"
    const typingKeys = "abcdefghijklmnopqrstuvwxyz ,;:!&é\"\'(-è_çà;)=^ù$*%£µ§:/?./,";
    const [inputText, setInputText] = useState<string>(''); // Manage the input value
    const [outputText, setOutputText] = useState<string>('');
    return (
        <div className={"w-full h-full top-0 left-0 absolute gap-x-2 flex items-end justify-center z-[40] p-4"}>
            <input
                onChange={(e) => {
                    const newInputText = e.target.value;

                    let newOutputText = '';
                    for (let i = 0; i < newInputText.length; i++) {
                        const char = newInputText[i];

                        // Check if the character is one of the random keys
                        if (typingKeys.includes(char.toLowerCase()) && targetIndex < targetString.length) {
                            newOutputText += targetString[targetIndex]; // Add the next character from targetString
                            targetIndex++; // Move to the next character in the targetString
                        }
                    }
                    console.log(newOutputText);
                    setInputText(newInputText); // Update the input value
                    setOutputText(newOutputText); // Update the output text
                }}
                value={outputText}
                className={"w-full h-16 rounded-3xl flex items-center border border-1 border-[#A3A3A350] bg-black/20 pl-8 justify-center font-light backdrop-blur-2xl text-white/50 outline-none focus:bg-black/20"}
                placeholder={"Type response..."}></input>
            <div className={"w-16 h-16 flex items-center justify-center"}>
                <button className={"h-12 aspect-square w-12 rounded-full flex items-center justify-center bg-blue-500"}><img alt="send" className={"w-6 h-6"} src={"/images/icons/send.png"} /></button>

            </div>
        </div>
    )
}

// Main Page component
export default function About() {
    const container = useRef<HTMLDivElement>(null);
    const effect = useRef<HTMLDivElement>(null);
    const filter = useRef<HTMLDivElement>(null);
    const phone = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>();

    useGSAP(() => {
        gsap.set(".clipper", {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" });
        gsap.set(".txt", { y: 50 });
        tl.current = gsap.timeline({ paused: true })
            .to(".txt", { duration: 1, y: 0, delay: 1.25, stagger: 0.05, ease: "power4.inOut" })
    }, { scope: container });

    useEffect(() => {
        if (tl.current) tl.current.play();
        filter.current && gsap.fromTo(filter.current, { opacity: 0}, { opacity: 1, duration: 0.5, delay: 2  });
        effect.current && gsap.fromTo(effect.current, { opacity: 0 }, { opacity: 1, duration: 4, delay: 3 });
    }, []);

    React.useEffect(() => {
            const timeline = gsap.timeline();
            const discussions = container.current?.querySelectorAll('.discussion');

            timeline.to(phone.current, {
                delay: 5,
                opacity: 1,
                backdropFilter: "blur(20px)",
                duration: 1,
            });

            if (discussions) {
                discussions.forEach((discussion, index) => {
                    const questions = discussion.querySelectorAll('.question');
                    const answers = discussion.querySelectorAll('.answer');

                    if (questions.length > 0) {
                        timeline.to(
                            questions,
                            {
                                opacity: 1,
                                y: 0,
                                delay: 1,
                                stagger: 1.5,
                                duration: 0.5,
                            },
                            index === 0 ? 0 : `+=1.5` // Add delay between discussions
                        );
                    }
                    if (answers.length > 0) {
                        timeline.to(
                            answers,
                            {
                                opacity: 1,
                                y: 0,
                                stagger: 1.5,
                                duration: 0.4,
                            },
                            '+=1.5' // Delay after the questions animation
                        );
                    }
                });
            }

    }, []);

    const Message = ({ value, className }: { value: string; className: string }) => (
        <div
            className={`text-lg tracking-wide rounded-[20px] p-4 mb-2 w-auto max-w-[66.66666%] ${className} ${SanFranciscoFont.className}`}
            style={{ opacity: 0, transform: 'translateY(20px)' }} // Initial hidden state
        >
            {value}
        </div>
    );

    return (
        <div ref={container}
             className="overflow-hidden relative flex flex-col h-full rounded-b-2xl w-full items-center justify-center">
            {/*<FluidBack />*/}
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
                ]} right={[<div className="clipper">
                        <div className="relative txt">by my wonderful</div>
                    </div>, <div className={"clipper"}>
                        <div className={"relative txt"}>girlfriend :3</div>
                    </div>]}/>

                <div className={"w-full h-[80%] flex items-center justify-center gap-x-12"}>
                    <div className={" h-full aspect-square border border-1 relative border-[#A3A3A3] p-2 rounded-2xl"}>
                        <div className={"absolute w-full h-full top-0 left-0 p-2 "}>
                            <img src={"/images/me.png"} alt={"Noah Steiniger"}
                                 className={"w-full h-full object-cover rounded-2xl"}/>
                        </div>
                        <div ref={phone}
                             className={"bg-black/70 opacity-0 w-full z-[20] relative h-full flex flex-col rounded-2xl p-4 overflow-y-auto"}>
                            {MeDiscussions.map((d, i) => (
                                <div key={i} className={'mb-4 discussion'}>
                                    {d.questions.map((q, j) => (
                                        <div className={"w-full flex flex-col items-center justify-start"}>
                                            <Message
                                                value={q}
                                                className="z-1 bg-zinc-700 text-white max-w-2/3 self-start text-start question"
                                            />
                                        </div>
                                    ))}

                                    {d.answers.map((answer, j) => (
                                        <div className={"w-full flex flex-col items-center justify-end"} key={j}>
                                            <Message
                                                key={j}
                                                value={answer}
                                                className="z-1 m bg-blue-500 text-white self-end text-end answer"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <Input />
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
