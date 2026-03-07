'use client'

import { Bushido } from "./components/bushido";
import Nav from "./components/nav";
import Box from "./components/box";
import React from "react";

interface MusicItem {
	title: string;
	genre: string;
	artist: string;
	imageSrc: string;
	songSrc: string;
}

const musicList: MusicItem[] = [
	{
		title: "Tell Me (U Want it)",
		artist: "underscores",
		genre: "Electropop",
		imageSrc: "underscores.jpg",
		songSrc: "Tell Me (U Want it).mp3",
	},
	{
		title: "Que du vent",
		artist: "Asinine",
		genre: "French Pop Rap",
		imageSrc: "asinine.png",
		songSrc: "Que du vent.mp3",
	},
	{
		title: "INDUSTRIA",
		artist: "wibzedd",
		genre: "French Experimental rap",
		imageSrc: "wibzedd.jpg",
		songSrc: "INDUSTRIA.mp3",
	},
	{
		title: "BAILE INoLVIDABLE",
		artist: "Bad Bunny",
		genre: "Reggaetón",
		imageSrc: "badbunny.jpg",
		songSrc: "BAILE INoLVIDABLE.mp3",
	},
	{
		title: "Taxes",
		artist: "Geese",
		genre: "Indie Rock",
		imageSrc: "geese.png",
		songSrc: "Taxes.mp3",
	},
];

export default function Home() {
	const [currentMusic, setCurrentMusic] = React.useState<MusicItem | null>(null);
	const audioRef = React.useRef<HTMLAudioElement | null>(null);
	const [playing, setPlaying] = React.useState(false);

	const toggleMusic = () => {
		const audio = audioRef.current;
		if (!audio) return;
		if (playing) {
			audio.pause();
		} else {
			audio.play();
		}
		setPlaying(!playing);
	};



	return (
		<div className="min-h-screen relative bg-[#EBF0F8]">
			<img src='/left.png' className="fixed h-screen top-0 left-0 pointer-events-none z-0" alt="left branch" />
			<img src='/right.png' className="fixed h-screen top-0 right-0 pointer-events-none z-0" alt="right branch" />


			<div className="max-w-400 bg-[#EBF0F8] z-10 mx-auto min-h-screen lg:p-32 lg:py-24 p-12 py-6 relative">
				<img src='/ASCII.png' className="fixed scale-40 top-0 left-0 pointer-events-none -translate-1/3 z-0 opacity-7" alt="left branch" />
				<img src='/ASCII.png' className="fixed scale-40 bottom-40 right-0 pointer-events-none -scale-x-40 translate-1/3 z-0 opacity-7" alt="left branch" />

				<Nav />

				<div className="w-full flex lg:mt-24 mt-12 justify-between items-center">
					{Object.values(Bushido).map((virtue) => (
						<div key={virtue.romaji} className="flex flex-col">
							<div className="kanji font-semibold text-[16px]">{virtue.kanji}</div>
							<div className="sous">{virtue.romaji}</div>
							<div className="sous">{virtue.meaning}</div>
						</div>
					))}
				</div>
				<div className="w-full lg:mt-32 mt-16 flex-col flex h-full">
					<div className="w-full lg:gap-16 gap-8 flex flex-col lg:flex-row items-end">
						<Box width={60} imageSrc="/me1.png" title="">
							<h1 className='text-[14px] leading-snug'>
								Hi. I’m Gian, a 22yo french guy interested in everything there is to do or talk about in this world.
								<br /> <br /> So if you have any talking points, meet me at the yap box. ;P
							</h1>
						</Box>
						<div className="w-full h-full">
							<Box width="full" imageSrc="/calendar.svg" title="WEEK'S TASKS">
								<ul className='list-disc pl-6 h-full'>
									<li className="pl-4 mb-2">Dev the "La parole de licorne website"</li>
									<li className="pl-4 mb-2">Read pages of C. G. Jung's book</li>
									<li className="pl-4 mb-2">Tell Fanga about the DSi drawing app project</li>
								</ul>
							</Box>
						</div>
					</div>
					<div className="flex-col w-full mt-16 flex h-full">
						<Box width="full" imageSrc="/music.svg" title="MONTH'S MUSIC">
							<ul className=''>
								{musicList.map((item) => (
									<button onClick={() => setCurrentMusic(item)} key={item.title} className="hover:cursor-pointer w-full hover:pl-1 hover:opacity-50 duration-200 transition-all mb-2 flex gap-12 items-center justify-between">
										<p>{item.title} - {item.artist}</p>
										<p className="opacity-50 text-[10px]">{item.genre}</p>
									</button>
								))}
							</ul>
						</Box>
					</div>
				</div>

				{currentMusic && (
					<div className="fixed bottom-8 left-1/2 p-3 -translate-x-1/2 bg-[#EBF0F8] border flex gap-24 border-black/20 rounded-lg">
						<div className="flex items-center gap-4">
							<img src={currentMusic.imageSrc} alt={currentMusic.title} className="w-24 h-24 rounded-sm object-cover" />
							<div>
								<h1 className="text-[14px]">{currentMusic.title}</h1>
								<p className="text-sm opacity-75">{currentMusic.artist}</p>
							</div>
						</div>
						<button onClick={toggleMusic}><img src={playing ? "/pause.svg" : "/play.svg"} alt={playing ? "Pause" : "Play"} className="w-6 mr-4 opacity-66 hover:scale-105 hover:opacity-80 transition-all duration-150 h-6" /></button>
						<audio ref={audioRef} src={"/monthSongs/" + currentMusic.songSrc} />
					</div>
				)}
			</div>
		</div>
	);
}
