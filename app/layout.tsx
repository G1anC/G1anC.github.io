import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Background from "./components/Background";
import Menu from "./components/menu";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useGSAP} from "@gsap/react";
import LayoutComponent from "@/app/layoutComponent";

//[#0F0F0F]

export const metadata: Metadata = {
  title: "Noah Steiniger",
  description: "Portfolio of Noah Steiniger using Next, React and GSAP",
};



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode,  }>) {
    return (
        <html lang="en">
            <LayoutComponent>
                {children}
            </LayoutComponent>
        </html>
    );
}


