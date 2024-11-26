'use client'

import localFont from "next/font/local";
import InfoBlock from "@/app/components/InfoBlock";
import React, { useState } from "react";
import FluidBack from "@/app/components/FluidBack";
import emailjs from "emailjs-com";

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
                "service_e15etcu", // Replace with your EmailJS service ID
                "template_6es4ylj", // Replace with your EmailJS template ID
                formData,
                "fQuArhqApZ_tdcYP0" // Replace with your EmailJS public key
            )
            .then(
                () => {
                    setLoading(false);
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" }); // Reset form
                },
                (error) => {
                    setLoading(false);
                    setStatus("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <div
            className={`${Selaris.className} p-4 w-full h-screen flex flex-col items-center justify-center`}
            style={{ height: "calc(100vh - 7rem)" }}
        >
            <div
                className="absolute top-0 left-0 z-[-10]  w-full h-full"
                style={{ backgroundImage: "radial-gradient(circle, transparent, #0000ff30)" }}
            ></div>

            <FluidBack />

            <InfoBlock
                b={false}
                left={[
                    <button className={"duration-100 transition-all w-6 h-6"}>
                        <img alt={"insta"} src={"/images/icons/insta.png"} />
                    </button>,
                ]}
                center={[
                    <button className={"duration-100 transition-all w-6 h-6"}>
                        <img alt={"linkedin"} src={"/images/icons/linkedin.png"} />
                    </button>,
                ]}
                right={[
                    <button className={"duration-100 transition-all w-6 h-6"}>
                        <img alt={"github"} src={"/images/icons/github.png"} />
                    </button>,
                ]}
            />

            <form
                onSubmit={handleSubmit}
                className="w-full h-full flex items-center gap-x-8 justify-center relative"
            >
                {/* Rotated Text Left */}
                <div
                    className={`rotate-[270deg] flex-shrink-0 h-full flex items-end justify-center text-[150px] ${Selaris.className} leading-none`}
                    style={{ transformOrigin: "center center" }}
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
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full h-full rounded-xl p-8 "
                            type="text"
                            placeholder="NAME"
                            required
                        />
                    </div>
                    <div className="h-20 w-full rounded-xl border border-1 border-[#A3A3A3]">
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full h-full rounded-xl p-8 text-end"
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            required
                        />
                    </div>

                    <div className="h-full w-full rounded-xl border border-1 border-[#A3A3A3]">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full h-full rounded-xl p-8 resize-none"
                            placeholder="MESSAGE"
                            required
                        ></textarea>
                    </div>
                    <div className="h-28 w-full rounded-xl border border-1 border-[#A3A3A3]">
                        <button
                            type="submit"
                            className="w-full h-full flex items-center hover:pr-12 hover:bg-transparent bg-white hover:text-indigo-400 transition-all duration-100 text-indigo-600 justify-end pr-8 rounded-xl text-end"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "SUBMIT"}
                        </button>
                    </div>
                    {status && <p className="text-center text-sm mt-2">{status}</p>}
                </div>

                {/* Rotated Text Right */}
                <div
                    className={`rotate-[90deg] flex-shrink-0 flex items-end h-full justify-center text-[150px] ${Selaris.className} leading-none`}
                    style={{ transformOrigin: "center center" }}
                >
                    ContAcT
                </div>
            </form>

            <InfoBlock b={true} left={[]} center={[]} right={[]} />
        </div>
    );
}
