import Nav from "../components/nav";

export default function Me() {
	return (
		<div className="bg-[#EBF0F8] text-gray-800 text-[14px] min-h-screen">
			<img src="/ASCII.png" alt="ASCII branch" className="  absolute opacity-12 w-9xl z-0 top-20 left-0 scale-50 -translate-1/4 pointer-events-none" />
			<img src="/flowers.png" alt="ASCII branch" className="absolute opacity-50 w-9xl z-0 top-20 left-0 scale-50 -translate-1/4 pointer-events-none" />

			<img src="/ASCII.png" alt="ASCII branch" className="  absolute opacity-12 w-9xl bottom-20 right-0 scale-50 scale-x-[-0.5] translate-1/4  pointer-events-none z-0" />
			<img src="/flowers.png" alt="ASCII branch" className="absolute opacity-50 w-9xl bottom-20 right-0 scale-50 scale-x-[-0.5] translate-1/4  pointer-events-none z-0" />

			<div className="max-w-7xl bg-[#EBF0F8]/5 z-20 mx-auto min-h-screen py-16">
				<Nav />
				<div className="w-full mt-16 flex-col flex h-full">
					<div className="w-full gap-16 flex">
						<div className="p-10 pt-12 w-88 shrink-0 backdrop-blur-xl border text-justify relative bg-white/33 border-black/33 rounded-lg">
							<div className="absolute px-6 top-0 -translate-1/2 left-1/2 backdrop-blur-xs bg-white">
								<img src="/me1.png" alt="ASCII branch" className="w-16 pointer-events-none" />
							</div>
							<p>
								Hi. I’m Gian, a 22yo french guy interested in everything there is to do or talk about in this world.
								<br />
								<br />
								So if you have any talking points, meet me at the yap box. ;P
							</p>
						</div>
						<div className="p-10 pt-12 w-full backdrop-blur-sm border text-justify relative border-black/33 rounded-lg">
							<div className="absolute px-6 top-0 -translate-1/2 left-40 flex items-center gap-8 backdrop-blur-xl bg-white">
								<img src="/me1.png" alt="ASCII branch" className="w-16 pointer-events-none" />
								WEEKS TASKS
							</div>
							<ul>
								<li>Dev the "La parole de licorne website"</li>
								<li>Read pages of C. G. Jung's book</li>
								<li>Tell Fanga about the DSi drawing app project</li>
							</ul>
						</div>
					</div>
					<div className="w-full flex-col flex h-full">

					</div>
				</div>
			</div>
		</div>
	);
}
