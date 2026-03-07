import Nav from "../components/nav";
import Box from "../components/box";


export default function Me() {
	return (
		<div className="min-h-screen relative bg-[#e1e6ec]">
			<img src='/left.png' className="fixed h-screen top-0 left-0 pointer-events-none z-0" alt="left branch" />
			<img src='/right.png' className="fixed h-screen top-0 right-0 pointer-events-none z-0" alt="right branch" />
            <div className="max-w-400 bg-[#e1e6ec] z-10 mx-auto min-h-screen p-32 py-24  relative">
			<Nav />
				<div className="w-full mt-32 flex-col flex h-full">
					<div className="w-full gap-16 flex items-end">
						<Box width={60} imageSrc="/me1.png" title="">
							<h1 className='text-[14px] leading-snug'>
								Hi. I’m Gian, a 22yo french guy interested in everything there is to do or talk about in this world.
								<br />
								<br />
								So if you have any talking points, meet me at the yap box. ;P
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
							<div></div>
						</Box>
					</div>
				</div>
			</div>
		</div>
	);

}
