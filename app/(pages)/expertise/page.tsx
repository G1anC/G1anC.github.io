import localFont from "next/font/local";
import FluidBack from "@/app/components/FluidBack";


const Selaris = localFont({src: "../../../public/dirtyline.woff"});
const Halenoir = localFont({src: "../../../public/Halenoir-Black.otf"});

export default function Expertise() {
    return (
        <div className={"w-full relative rounded-b-2xl overflow-y-scroll overflow-x-hidden"} style={{
            height: "calc(100vh - 7rem)"
        }}>
            <FluidBack/>
            <div className={"absolute top-0 left-0 h-[5000px] w-full"}>
                <div className={`w-full header-section text-6xl flex items-center justify-center text-start ${Halenoir.className} uppercase`} style={{
                    height: "calc(100vh - 7rem)"
                }}>
                    <div className={"w-1/2 h-auto flex items-center justify-center"}>
                        ExperTise
                        <br/>
                        <br/>
                        I'm a 3rd year student at epitech strasbourg, so i have a lot of base knowledge in different languages and technologies.
                        <br/>
                        <br/>
                        i mainly specify in web, more precisely front-end design and development.
                    </div>
                    <div className={"w-1/3 h-auto"}></div>
                </div>
                <div className={"h-screen w-full bg-red-400"}>a</div>
                <div className={"h-screen w-full bg-green-400"}>a</div>
                <div className={"h-screen w-full bg-yellow-400"}>a</div>
            </div>
        </div>
    )
}