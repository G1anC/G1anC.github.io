import { Bushido } from "./components/bushido";
import Nav from "./components/nav";
export default function Home() {
	return (
		<div className="min-h-screen relative bg-[#EBF0F8]">
			<img src='/left.png' className="fixed h-screen top-0 left-0 pointer-events-none z-0" alt="left branch" />
			<img src='/right.png' className="fixed h-screen top-0 right-0 pointer-events-none z-0" alt="right branch" />
			<div className="max-w-400 bg-[#EBF0F8] z-10 mx-auto min-h-screen p-32 py-24 relative">
				<Nav />
				<div className="w-full flex mt-24 justify-between items-center">
					{Object.values(Bushido).map((virtue) => (
						<div key={virtue.romaji} className="flex flex-col">
							<div className="kanji font-semibold text-[16px]">{virtue.kanji}</div>
							<div className="sous">{virtue.romaji}</div>
							<div className="sous">{virtue.meaning}</div>
						</div>
					))}
				</div>
				<div className="w-full mt-32 flex-col flex h-full">
					<div className="w-full gap-16 flex">
						<div className="p-12 w-88 shrink-0 backdrop-blur-xl border text-justify relative bg-[#EBF0F8] border-black/10 rounded-lg">
							<div className="absolute px-6 top-0 flex items-center -translate-1/2 left-1/2 backdrop-blur-xs">
								<div className='h-0.5 bg-[#EBF0F8] absolute w-24 -z-10 -translate-x-4' />
								<img src="/me1.png" alt="ASCII branch" className="w-16 pointer-events-none" />
							</div>
							<p>
								Hi. I’m Gian, a 22yo french guy interested in everything there is to do or talk about in this world.
								<br />
								<br />
								So if you have any talking points, meet me at the yap box. ;P
							</p>
						</div>
						<div className="p-12 w-full backdrop-blur-sm border text-justify relative border-black/10 rounded-lg">
							<div className="absolute px-6 top-0 -translate-1/2 left-40 flex items-center gap-4">
								<div className='h-0.5 bg-[#EBF0F8] absolute w-64 -z-10 ' />
								<img src="/calendar.svg" alt="ASCII branch" className="w-10 ml-6 pointer-events-none" />
								<h1 className="text-2xl">WEEK'S TASKS</h1>
							</div>
							<ul className='list-disc pl-6'>
								<li className="pl-4 mb-2">Dev the "La parole de licorne website"</li>
								<li className="pl-4 mb-2">Read pages of C. G. Jung's book</li>
								<li className="pl-4 mb-2">Tell Fanga about the DSi drawing app project</li>
							</ul>
						</div>
					</div>
					<div className="flex-col w-full mt-16 flex h-full">
						<div className="p-12 border text-justify relative border-black/10 rounded-lg">
							<div className="absolute px-6 top-0 shrink-0 -translate-1/2 left-40 flex items-center gap-4">
								<div className='h-0.5 bg-[#EBF0F8] absolute w-66 -z-10 ' />
								<img src="/music.svg" alt="ASCII branch" className="w-10 ml-6 pointer-events-none" />
								<h1 className="text-2xl shrink-0">MONTH'S MUSIC</h1>
							</div>
							<ul className=''>
								<li className="mb-2 flex gap-12 items-center justify-between"><p>Tell Me (U Want it) - underscores</p><p className="opacity-50 text-[10px]">Electropop</p></li>
								<li className="mb-2 flex gap-12 items-center justify-between"><p>Que du vent - Asinine</p>        <p className="opacity-50 text-[10px]">French Pop Rap</p></li>
								<li className="mb-2 flex gap-12 items-center justify-between"><p>INDUSTRIA - wibzedd</p> <p className="opacity-50 text-[10px]">French Experimental rap</p></li>
								<li className="mb-2 flex gap-12 items-center justify-between"><p>BAILE INoLVIDABLE - Bad Bunny</p>       <p className="opacity-50 text-[10px]">Reggaetón</p></li>
								<li className="mb-2 flex gap-12 items-center justify-between"><p>Taxes - Geese</p>                    <p className="opacity-50 text-[10px]">Indie Rock</p></li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	);
}
