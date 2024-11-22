import localFont from "next/font/local";

const Selaris = localFont({src: "../../../public/dirtyline.woff"});


export default function Page() {
	return (
		<div className={`text-[500px] ${Selaris.className} w-screen h-screen flex items-center justify-center`}>
            N
		</div>
	);
};