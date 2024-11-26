import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const HalenoirThin = localFont({
    src: "../../public/HalenoirCompact-Thin.otf",
});
const HalenoirBlack = localFont({
    src: "../../public/Halenoir-Black.otf",
});
const DirtyLine = localFont({
    src: "../../public/dirtyline.woff",
});
const Pixel = localFont({ src: "../../public/pixel.otf" });

const lists = [
    {
        name: "pages",
        links: [
            {title: "indeX", link: "/"},
            {title: "exPertise", link: "expertise/"},
            {title: "pRocess", link: "process"},
            {title: "Projects", link: "projects"},
            {title: "abOut", link: "about"},
            {title: "contaCt", link: "contact"}
        ]
    },
    {
        name: "Biggest projects",
        links: [
            {title: "arEa", link: "https://www.github.com/G1anC/AREA"},
            {title: "42sh", link: "https://www.github.com/G1anC/42sh"},
            {title: "rayTracer", link: "https://www.github.com/G1anC/rayTracer"},
            {title: "Camille_bC", link: "/camille_bc"},
            {title: "Eve_crea.", link: "https://evelynes-creation.webflow.io/"},
            {title: "glaDos", link: "https://www.github.com/G1anC/glados"}
        ]
    },
    {
        name: "Socials",
        links: [
            {title: "inSta", link: ""},
            {title: "LinkedIn", link: ""},
            {title: "gitHub", link: "https://www.github.com/G1anC"}
        ]
    }
]

export const Menu = ({toggleMenu}: {toggleMenu: () => void}) => (
    <div className="menu fixed top-0 text-[#777777] right-0 w-80 h-full">
        <div className="menu-wrapper py-8 px-4 flex flex-col justify-between items-start h-full">
            {lists.map((list, i) => (
                <div key={i} className="menu-list opacity-0">
                    <div className={`lowercase text-xl tracking-widest opacity-50  ${Pixel.className} mb-2`}>
                        {list.name}
                    </div>
                    {list.links.map((item, j) => (
                        <div key={j} className={`${DirtyLine.className} text-5xl cursor-pointer transition-all duration-100 hover:text-white hover:ml-2 flex items-start justify-start`} style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            <Link
                                className="link relative"
                                href={item.link}
                                onClick={toggleMenu}>
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

export default Menu;