import localFont from "next/font/local";
import InfoBlock from "@/app/components/InfoBlock";
import React from "react";

const Selaris = localFont({src: "../../../public/dirtyline.woff"});
const Halenoir = localFont({src: "../../../public/Halenoir-Black.otf"});

export default function Page() {
	return (
        <div className={`${Selaris.className} p-4 w-full h-screen flex flex-col items-center justify-center`} style={{
            height: "calc(100vh - 7rem)",
        }}>
            <div  className="absolute top-0 left-0 z-[-10]  w-full h-full"
                 style={{backgroundImage: "radial-gradient(circle, transparent, #0000ff30)"}}></div>

            <InfoBlock b={false} left={[
                <button className={"duration-100 transition-all w-6 h-6"}>
                    <img alt={"insta"} src={"/images/icons/insta.png"}/>
                </button>
            ]}
                       center={[
                           <button className={"duration-100 transition-all w-6 h-6"}><img
                               alt={"insta"} src={"/images/icons/linkedin.png"}/></button>]}
                       right={[
                           <button className={"duration-100 transition-all w-6 h-6"}><img
                               alt={"insta"} src={"/images/icons/github.png"}/></button>]}/>
            <div className="w-full h-full flex items-center gap-x-8 justify-center relative">
                {/* Rotated Text Left */}
                <div
                    className={`rotate-[270deg] flex-shrink-0  h-full flex items-end justify-center text-[150px] ${Selaris.className} leading-none`}
                    style={{transformOrigin: "center center"}}
                >
                    ContAcT
                </div>

                {/* Center Contact Form */}
                <div
                    className={`aspect-square flex-shrink-0 flex flex-col items-start gap-y-8 h-full rounded-2xl ${Halenoir.className} uppercase`}
                >
                    {/* Input Fields */}
                    <div className="h-20 w-full rounded-xl border border-1 border-[#A3A3A3]">
                        <input
                            className="w-full h-full rounded-xl p-8 "
                            type="text"
                            placeholder="NAME"
                        />
                    </div>
                    <div className="h-20 w-full rounded-xl border border-1 border-[#A3A3A3]">
                        <input
                            className="w-full h-full rounded-xl p-8 text-end"
                            type="email"
                            placeholder="EMAIL ADDRESS"
                        />
                    </div>

                    <div className="h-full w-full rounded-xl border border-1 border-[#A3A3A3]">
                        <textarea
                            className="w-full h-full rounded-xl p-8 resize-none"
                            placeholder="MESSAGE"
                        ></textarea>
                    </div>
                    <div className="h-28 w-full rounded-xl border border-1 border-[#A3A3A3]">
                        <button
                            className="w-full h-full flex items-center hover:pr-12 hover:bg-transparent bg-white hover:text-indigo-400 transition-all duration-100 text-indigo-600 justify-end pr-8 rounded-xl text-end"
                        >SUBMIT</button>
                    </div>
                </div>

                {/* Rotated Text Right */}
                <div
                    className={`rotate-[90deg] flex-shrink-0 flex items-end h-full justify-center text-[150px] ${Selaris.className} leading-none`}
                    style={{transformOrigin: "center center"}}
                >
                    ContAcT
                </div>
            </div>

            <InfoBlock b={true} left={[]} center={[]} right={[]}/>
        </div>
    );
};