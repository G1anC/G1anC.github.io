import Nav from "../components/nav";

export default function Yap() {
	return (
		<div className="min-h-screen relative bg-[#EBF0F8]">
			<img src='/left.png' className="fixed h-screen top-0 left-0 pointer-events-none z-0" alt="left branch" />
			<img src='/right.png' className="fixed h-screen top-0 right-0 pointer-events-none z-0" alt="right branch" />


			<div className="max-w-400 bg-[#EBF0F8] z-10 mx-auto min-h-screen lg:p-32 lg:py-24 p-12 py-6 relative">
				<img src='/ASCII.png' className="fixed scale-40 top-0 left-0 pointer-events-none -translate-1/3 z-0 opacity-7" alt="left branch" />
				<img src='/ASCII.png' className="fixed scale-40 bottom-40 right-0 pointer-events-none -scale-x-40 translate-1/3 z-0 opacity-7" alt="left branch" />

				<Nav />

				<div className="w-full lg:mt-24 mt-12">
					<h1 className="text-4xl uppercase text-[#222222]">Yapbox in the making</h1>
					<p className="text-black/50 mt-2">Stay tuned for updates!</p>
				</div>
			</div>
		</div>
	);
}
