import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Background from "./components/Background";

const SelarisFont = localFont({
    src: "../public/Selaris.woff",
});

const LovelaceFont = localFont({
    src: "../public/Lovelace.woff",
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`w-screen h-full ${LovelaceFont.className} text-3xl antialiased`} >
                {children}
            </body>
        </html>
    );
}