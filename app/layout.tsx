import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Background from "./components/Background";
import Menu from "./components/menu";
import React from "react";
import Image from "next/image";



const PPul = localFont({
    src: "../public/Halenoir-DemiBold.otf",
});

//[#0F0F0F]

export const metadata: Metadata = {
  title: "Noah Steiniger",
  description: "Portfolio of Noah Steiniger using Next, React and GSAP",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode,  }>) {
    const Box = ({ children, supp }: {children: React.ReactNode | null, supp: string}) => {
        return (
            <div className={`p-6 h-full text-[1.2rem] flex items-center justify-start ${supp}`}>
                {children}
            </div>
        )
    }
    return (
        <html lang="en">
            <body className={`w-screen h-screen ${PPul.className} tracking-tighter p-8 flex justify-center overflow-hidden text-black items-center bg-white text-xl antialiased`}>
            <div className={"h-full w-full relative z-2 rounded-2xl flex items-center flex-col justify-center border border-[#A3A3A3]"}>
                <div className={"w-full text-[3.2rem] border-b-1 border-b border-b-[#A3A3A3]"}>
                    <div className="flex h-full w-full">
                        <Box supp={"flex-1 border-r border-r-1 border-r-[#A3A3A3]"}>Portfolio</Box>
                        <Box supp={"flex-[0.25] border-r border-r-1 border-r-[#A3A3A3]"}>
                            <div className={"w-full h-full flex items-center justify-around"}>
                                <Image src={"/images/icons/github.svg"} width={30} height={30} alt={"github"} />
                                <Image src={"/images/icons/insta.png"} width={40} height={40} alt={"github"} />
                                <Image src={"/images/icons/linkedin.png"} width={30} height={30} alt={"github"} />
                            </div>
                        </Box>
                        <Box supp={"flex-1 border-r border-r-1 border-r-[#A3A3A3]"} children={null} />
                        <Box supp={"flex-[0.25] justify-end"}>
                            &#x2014;
                        </Box>
                    </div>
                </div>
                <div className={"w-full h-full"}>
                    {children}
                </div>
            </div>
            </body>
        </html>
    );
}


