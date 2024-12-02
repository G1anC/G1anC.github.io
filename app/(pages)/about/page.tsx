'use client';

import React, {useState, useRef, useEffect} from 'react';
import localFont from "next/font/local";
import FluidBack from "@/app/components/FluidBack";
import InfoBlock from "@/app/components/InfoBlock";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import LayoutComponent from "@/app/components/layoutComponent";

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
            'Creating the best websites i can,',
            'Showing to the world my creativity and my skills,',
            'By always training, discovering and learning new stuff',
        ]
    },
    {
        questions: ['How do you see yourself in the future ?'],
        answers: [
            'hmmm...',
            'good questions lmao',
            'More seriously, in the near future, I see myself as a passionate web designer, learning from the bests.',
        ]
    },
    {
        questions: ['And in the far future ?'],
        answers: [
            'Well',
            'I really want to create my own company and work with the bests in the industry.',
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

// Main Page component
export default function About() {
    const container = useRef<HTMLDivElement>(null);
    const effect = useRef<HTMLDivElement>(null);
    const filter = useRef<HTMLDivElement>(null);
    const phone = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>();
    const [sentAnswers, setSentAnswers] = useState<string[]>([]);
    const [answerIndex, setAnswerIndex] = useState<number>(0);
    const messTimeline = gsap.timeline();
    const [visibleMessages, setVisibleMessages] = useState<boolean[]>([]);

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
    useEffect(() => {
            messTimeline.to(phone.current, {
                delay: 5,
                opacity: 1,
                backdropFilter: "blur(20px)",
                duration: 1,
            });
    }, []);


    useEffect(() => {
        if (!sentAnswers) return;
        const sentAnswersElements = container.current?.querySelectorAll('.answer');
        if (!sentAnswersElements) return;

        const lastVisibleIndex = visibleMessages.lastIndexOf(true);
        const lastAnswer = sentAnswersElements[lastVisibleIndex];

        if (lastAnswer) {
            gsap.fromTo(
                lastAnswer,
                { opacity: 0 },
                { opacity: 1, duration: 0.4 }
            );
        }
    }, [sentAnswers, visibleMessages]);


    const Input = () => {
        const typingKeys = "abcdefghijklmnopqrstuvwxyz ,;:!&é\"'(-è_çà;)=^ù$*%£µ§:/?./,";
        const [discussionIndex, setDiscussionIndex] = useState<number>(0);
        const [outputText, setOutputText] = useState<string>('');


        const inputRef = useRef<HTMLInputElement>(null);
        const currentDiscussion = MeDiscussions[discussionIndex];
        const currentAnswer = currentDiscussion.answers[answerIndex];

        const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const newInputText = e.target.value;
            let newOutputText = '';
            let targetIndex = 0;

            for (let i = 0; i < newInputText.length; i++)
                if (typingKeys.includes(newInputText[i].toLowerCase()) && targetIndex < currentAnswer.length)
                    newOutputText += currentAnswer[targetIndex++];
            setOutputText(newOutputText);
        }

        const sendAnswer = () => {
            if (!inputRef.current || inputRef.current.value === '') return;
            if (outputText.length !== currentAnswer.length) return;

            setSentAnswers((prev) => [...prev, outputText]);
            setVisibleMessages((prev) => [...prev, true]); // Marque le nouveau message comme visible
            inputRef.current.value = '';
            setOutputText('');

            if (answerIndex < currentDiscussion.answers.length - 1) {
                setAnswerIndex((prev) => prev + 1);
            } else if (discussionIndex < MeDiscussions.length - 1) {
                setDiscussionIndex((prev) => prev + 1);
                setAnswerIndex(0);
            }
        };



        return (
            <div className={"w-full h-full top-0 left-0 absolute gap-x-2 flex items-end justify-center z-[40] p-4"}>
                <div
                    className={"w-full h-16 pl-4 rounded-3xl flex items-center border border-1 border-[#A3A3A360] bg-black/40 backdrop-blur-md"}>
                    <input
                        ref={inputRef}
                        onChange={inputChange}
                        value={outputText}
                        className={"input w-full h-16 rounded-3xl flex items-center justify-center outline-none focus:bg-transparent bg-transparent text-white"}
                        placeholder={"Type response..."}
                    ></input>
                    <div className={"w-16 h-16 flex items-center justify-center"}>
                        <button
                            className={"h-12 aspect-square w-12 rounded-2xl mr-2 flex items-center justify-center border border-1 border-[#A3A3A360] bg-indigo-600 hover:bg-indigo-400 transition-all duration-100"}
                            onClick={sendAnswer}
                        >
                            <img alt="send" className={"w-6 h-6"} src={"/images/icons/send.png"} />
                        </button>
                    </div>
                </div>
            </div>
        );
    };


    const Message = ({ value, className, i }: { value: string; className: string, i:number }) => (
        <div
            className={`text-lg tracking-wide rounded-[20px] p-4 mb-2 w-auto max-w-[66.66666%] ${className} ${SanFranciscoFont.className}`}
            style={{transform: 'translateY(20px)',
                opacity: visibleMessages[i] ? 1 : 0,
                transition: 'opacity 0.4s ease-in-out',
        }}>
            {value}
        </div>
    );

    return (
        <LayoutComponent name={"abOut"}>
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
                    <div className={"h-full aspect-square border border-1 relative border-[#A3A3A3] p-2 rounded-2xl bg-white"} style={{
                        boxShadow: "10px 10px 20px #00000030"
                    }}>
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
                                                i={j}
                                                className="z-1 bg-zinc-700 text-white max-w-2/3 self-start text-start question"
                                            />
                                        </div>
                                    ))}

                                    {d.answers.map((answer, j) => (
                                        <div className={"w-full flex flex-col items-center justify-end"} key={j}>
                                            <Message
                                                key={j}
                                                value={answer}
                                                i={j}
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
        </LayoutComponent>
    );
};
