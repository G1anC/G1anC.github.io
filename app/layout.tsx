import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import LayoutComponent from "@/app/components/layoutComponent";

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


