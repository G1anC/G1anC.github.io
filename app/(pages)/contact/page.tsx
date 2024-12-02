'use client'

import localFont from "next/font/local";
import InfoBlock from "@/app/components/InfoBlock";
import React, { useState } from "react";
import FluidBack from "@/app/components/FluidBack";
import emailjs from "emailjs-com";
import LayoutComponent from "@/app/components/layoutComponent";

const Selaris = localFont({ src: "../../../public/dirtyline.woff" });
const Halenoir = localFont({ src: "../../../public/Halenoir-Black.otf" });

export default function Page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_e15etcu",
                "template_6es4ylj",
                formData,
                "fQuArhqApZ_tdcYP0"
            )
            .then(
                () => {
                    setLoading(false);
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    setLoading(false);
                    setStatus("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <LayoutComponent name={"contaCt"}>
        <div
            className={`${Halenoir.className} text-lg p-4 w-full flex flex-col items-center  overflow-hidden`}
            style={{height: "calc(100vh - 7rem)"}}
        >
            <div
                className="absolute top-0 left-0 z-[-10]  w-full h-full"
                style={{backgroundImage: "radial-gradient(circle, transparent, #0000ff30)"}}
            ></div>

            {/*<FluidBack/>*/}
            <div className={"w-full"}>
                <InfoBlock
                    b={false}
                    left={[
                        <button className={"duration-100 transition-all w-6 h-6"} onClick={() => {
                            window.open("https://www.instagram.com/webbygian", "_blank");
                        }}>
                            <img alt={"insta"} src={"/images/icons/insta.png"}/>
                        </button>,
                    ]}
                    center={[
                        <button className={"duration-100 transition-all w-6 h-6"} onClick={() => {
                            window.open("https://www.linkedin.com/in/noah", "_blank");
                        }}>
                            <img alt={"linkedin"} src={"/images/icons/linkedin.png"}/>
                        </button>,
                    ]}
                    right={[
                        <button className={"duration-100 transition-all w-6 h-6"} onClick={() => {
                            window.open("https://www.github.com/G1anC", "_blank");
                        }}>
                            <img alt={"github"} src={"/images/icons/github.png"}/>
                        </button>,
                    ]}
                />
            </div>


            <form onSubmit={handleSubmit} className="w-full h-full top-0 left-0 flex items-center gap-x-8 justify-center">
                <div
                    className={`rotate-[270deg] flex-shrink-0  aspect-square flex items-end justify-center text-[120px] ${Selaris.className} leading-none`}
                    style={{transformOrigin: "center center"}}>
                    ContAcT
                </div>

                <div className={`aspect-square flex-shrink-0 bg-white rounded-xl flex flex-col items-start h-full ${Halenoir.className} uppercase`} style={{
                    boxShadow: "5px 5px 20px #00000030",
                }}>
                    <div className="h-20 w-full rounded-t-xl border border-1 border-[#A3A3A3]">
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full h-full rounded-t-xl p-8 outline-none"
                            type="text"
                            placeholder="NAME"
                            required
                        />
                    </div>

                    <div className="h-20 w-full border-x border-x-1 border-x-[#A3A3A3] outline-none">
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full h-full p-8 text-end outline-none"
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            required
                        />
                    </div>

                    <div className="h-full w-full border border-1 border-[#A3A3A3]">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full h-full p-8 resize-none outline-none"
                            placeholder="MESSAGE"
                            required
                        ></textarea>
                    </div>

                    <div
                        className="h-32 w-full uppercase rounded-b-xl border-b-1 border border-x-1 border-x-[#A3A3A3] border-b-[#A3A3A3]">
                        <button
                            type="submit"
                            className={`w-full h-full flex outline-none items-center uppercase hover:bg-transparent bg-white ${!status ? "bg-white text-indigo-600 hover:text-indigo-400" : (status === "Message sent successfully!" ? "bg-green-600/30 text-black hover:text-green-600" : "bg-red-600/30 text-black hover:text-red-600")}  transition-all duration-100 justify-end pr-8 rounded-b-xl text-end`}
                            disabled={loading}
                        >
                            {status ? status : (loading ? "SENDING..." : "SUBMIT")}
                        </button>
                    </div>
                </div>

                {/* Rotated Text Right */}
                <div
                    className={`rotate-[90deg] flex-shrink-0 flex items-end aspect-square justify-center text-[120px] ${Selaris.className} leading-none`}
                    style={{transformOrigin: "center center"}}
                >
                    ContAcT
                </div>
            </form>
            <div className={"w-full pt-4"}>
                <InfoBlock
                    b={true}
                    left={["+33 7 68 88 48 18"]}
                    center={["Send me a message ;)"]}
                    right={[<button className="text-center py-3 px-4 justify-center items-center flex bg-white border-1 border border-[#A3A3A3] rounded-xl" style={{boxShadow: "5px 5px 20px #00000030"}} onClick={() => {}}>COPY EMAIL</button>]}/>
            </div>
        </div>
        </LayoutComponent>
    );
}
