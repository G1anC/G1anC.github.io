'use client';

import React, {useEffect, useState, useRef} from "react";
import localFont from "next/font/local";
import {gsap} from "gsap";
import LayoutComponent from "@/app/components/layoutComponent";
import {useGSAP} from "@gsap/react";

const DirtyLine = localFont({src: "../../../public/dirtyline.woff"});
const HalenoirDemi = localFont({src: "../../../public/Halenoir-DemiBold.otf"});
const HalenoirBlack = localFont({src: "../../../public/Halenoir-Black.otf"})
const Pixel = localFont({src: "../../../public/pixel.otf"});

enum Side {
    LEFT="text-start justify-start",
    RIGHT="text-end justify-end",
    CENTER="text-center justify-center"
}

const Block = ({children, side}: { children: React.ReactNode, side: Side }) => {
    return (
        <div className={`w-full h-[50vh] flex items-center ${side}`}>
            <div className={"p-12 border border-[#A3A3A3] rounded-2xl bg-white"} style={{boxShadow: "10px 10px 20px #00000030"}}>
                {children}
            </div>
        </div>
     
    )
}

const iconPath = "/images/icons/";
const projects = [
    {
        title: "Eve_crea.",
        secondTitle: "EvelYne cReationS",
        content: [

            <Block side={Side.CENTER}>
                <div className={"txt"}>Evelyne Creations is a young and inspired designer</div>
                <div className={"txt"}>from France.</div>
            </Block>,
            <Block side={Side.LEFT}>
                <div className={"txt"}>This website is her way</div>
                <div className={"txt"}>to make herself known</div>
                <div className={"txt"}>by introducing the user to her world.</div>
            </Block>,
            <div className={"w-full h-[60vh] flex items-center justify-start"}>
                <div className={"p-12 bg-white border border-[#A3A3A3] rounded-3xl"}
                     style={{boxShadow: "10px 10px 20px #00000030"}}>
                    <div>the goal was to recreate as we</div>
                    <div>wanted the functionality of</div>
                    <div>the website IFTTT.</div>
                    <br/>
                    <div>Creating webhooks and easily</div>
                    <div>connecting to multiple</div>
                    <div>platforms was the main</div>
                    <div>purpose here.</div>
                </div>
            </div>,

            <div className={"w-full h-[60vh] flex items-center justify-end"}>
                <div className={"w-30"}></div>
                <div className={"p-12 bg-white border text-end border-[#A3A3A3] rounded-3xl"}
                     style={{boxShadow: "10px 10px 20px #00000030"}}>
                    <div className={"txt"}>This project can be</div>
                    <div className={"txt"}>restructured into 3 parts:</div>
                    <br/>
                    <div className={"txt"}>backend, mobile and frontend.</div>
                </div>
            </div>,

            <div className={"w-full h-[60vh] flex items-center justify-center"}>
                <div className={"text-center p-12"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>We used Next as base.</div>
                    <div className={"txt"}>React and Native for front (web and mobile)</div>
                    <div className={"txt"}>Postgressql for DB language, Mango as DB</div>
                    <div>and Typescript as language.</div>
                </div>
            </div>,
            <div className={"w-full flex items-center justify-start h-[60vh]"}>
                <div className={"p-12 text-start"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>My part was everything</div>
                    <div className={"txt"}>that surrounded the</div>
                    <div className={"txt"}>front.</div>
                    <br/>
                    <br/>
                    <div className={"txt"}>From creating the mockups</div>
                    <div className={"txt"}>with Figma :</div>
                </div>
            </div>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/mockup.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,

            <div className={"w-full flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/mobile.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,

            <div className={"w-full h-[60vh] flex items-center  justify-center"}>
                <div className={"text-start p-12"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>To developing it:</div>
                </div>
            </div>
            ,
            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-fit"} src={"/images/projects/area.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>


        ],
    },
    {
        title: "Camille_Bc",
        secondTitle: "caMillE bOnnet creVel",
        content: [

            <Block side={Side.CENTER}>
                <div className={"txt"}>Camille Bonnet Crevel</div>
                <div className={"txt"}>is a young and inspired designer</div>
                <div className={"txt"}>from France.</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/Cami.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,


            <Block side={Side.LEFT}>
                <div className={"txt"}>This website is her way</div>
                <div className={"txt"}>to make herself known</div>
                <div className={"txt"}>by introducing the user to her world.</div>
            </Block>,
        

            <Block side={Side.RIGHT}>
                <div className={"txt"}>Coming from Basel Switzerland</div>
                <div className={"txt"}><div className={"txt"}>Swiss design was definitely the way to go</div></div>
                <br/>
                <div className={"txt"}>So i started researching for ideas and inspirations.</div>
            </Block>,

            <Block side={Side.CENTER}>
                <div className={"txt"}>Discussing with her for the font choices,</div>
                <div className={"txt"}>Color scheme and overall look</div>
                <div className={"txt"}>was the first step.</div>
                <div className={"txt"}>Interesting myself in what she accomplished</div>
                <div className={"txt"}>what she envisioned for the future and what was to come</div>
            </Block>,


            <Block side={Side.LEFT}>
                <div className={"txt"}>This is the starting case study</div>
                <div className={"txt"}>i could work on :</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/Cami.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,

            <Block side={Side.RIGHT}>
                <div className={"txt"}>I started creating the design on Figma :</div>
            </Block>,


            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/mockup.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,

            <Block side={Side.CENTER}>
                <div className={"txt"}>And after being pretty confident</div>
                <div className={"txt"}>about the design</div>
                <div className={"txt"}>i started deleveloping it</div>
                <div className={"txt"}>since the majority of my ideas come as i develop</div>
            </Block>,

            <Block side={Side.LEFT}>
                <div className={"txt"}>And after a little shorter than a month and a half</div>
                <div className={"txt"}>this is the final project :</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-fit"} src={"/images/projects/area.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>


        ],
    },
    {
        title: "arEa",
        secondTitle: "arEa aPplicaTion",
        content: [


            <Block side={Side.CENTER}>
                <div className={"txt"}>AREA or Action-REaction</div>
                <div className={"txt"}>is a 3rd year web project</div>
                <div className={"txt"}>from EPITECH.</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/area.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,

            <Block side={Side.LEFT}>
                <div className={"txt"}>The goal was to recreate as we</div>
                <div className={"txt"}>wanted the functionality of</div>
                <div className={"txt"}>the website IFTTT.</div>
                </Block>,

            <Block side={Side.RIGHT}>
                <div className={"txt"}>Creating webhooks and easily</div>
                <div className={"txt"}>connecting to multiple</div>
                <div className={"txt"}>platforms was the main</div>
                <div className={"txt"}>purpose here.</div>
            </Block>,

            <Block side={Side.CENTER}>
                <div className={"txt"}>This project can be</div>
                <div className={"txt"}>restructured into 3 parts:</div>
                <br/>
                <div className={"txt"}>backend, mobile and frontend.</div>
            </Block>,

            <Block side={Side.LEFT}>
                <div className={"txt"}>We used Next as base.</div>
                <div className={"txt"}>React and Native for front (web and mobile)</div>
                <div className={"txt"}>Postgressql for DB language, Mango as DB</div>
                <div>and Typescript as language.</div>
            </Block>,
            
            <Block side={Side.RIGHT}>
                <div className={"txt"}>My part was everything</div>
                <div className={"txt"}>that surrounded the</div>
                <div className={"txt"}>front.</div>
                <br/>
                <br/>
                <div className={"txt"}>From creating the mockups</div>
                <div className={"txt"}>with Figma :</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/mockup.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,

            <div className={"w-full flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/mobile.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,

            <Block side={Side.CENTER}>
                <div className={"txt"}>To developing it:</div>
            </Block>,

            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-fit"} src={"/images/projects/area.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>


        ],
    },
    {
        title: "42sh",
        secondTitle: "42sheLl",
        content: [
            <Block side={Side.CENTER}>
                <div className={"txt"}>42shell is my first year final project at EPITECH Strasbourg.</div>
                <div className={"txt"}>Written in C only, this group project was the first</div>
                <div className="txt">I've made and one of the toughest still.</div>
            </Block>,
            <div className={"w-full mb-12 flex items-center justify-center"}>
            <img className={"w-5/6 h-auto object-fit"} src={"/images/projects/42sh.png"} style={{
                backgroundColor: "white",
                border: "1px #A3A3A3 solid",
                borderRadius: "16px",
                boxShadow: "10px 10px 20px #00000030"
            }}/>
        </div>,
            <Block side={Side.LEFT}>
                <div className={"txt"}>
                    It is a shell that can execute commands, manage environment variables and handle signals.
                </div>
                <div className={"txt"}>
                    I was in charge of the environment variables, parsing and built-in functions (setenv, env, unsetenv, cd and echo).
                </div>
            </Block>,
            <div className={"w-full mb-12 flex items-center justify-center"}>
            <img className={"w-1/2 h-auto object-fit"} src={"/images/projects/myStrToWordArray.png"} style={{
                backgroundColor: "white",
                border: "1px #A3A3A3 solid",
                borderRadius: "16px",
                boxShadow: "10px 10px 20px #00000030"
            }}/>
        </div>,
            <Block side={Side.RIGHT}>
                <div className={"txt"}>
                    Not so fun fact: <br/>I wrote one of the most hideous functions I've made...<br/><br/>
                    </div>                <div className={"txt"}>

                    Don't blame me, I love coding fun stuff :D
                </div>
                </Block>,
            <Block side={Side.CENTER}>
                <div className={"txt"}>
                    More seriously, I've learned a lot from this project<br/>
                    </div>

                    <div className={"txt"}>
                    (especially writing readable code), and I'm really proud of the result.
                    </div>
            </Block>
        ],
    },
    {
        title: "rayTracer",
        secondTitle: "Home cooKed rayTraCer",
        content: [

                    <Block side={Side.CENTER}>
                        <div className={"txt"}>Raytracer is my favorite project.</div>
                        <div className={"txt"}>It is the reason I got into EPITECH.</div>
                    </Block>,
                    <div className={"w-full mb-12 flex items-center justify-center"}>
                        <img className={"w-5/6 h-auto object-fit"} src={"/images/projects/twoCercles.png"} style={{
                            backgroundColor: "white",
                            border: "1px #A3A3A3 solid",
                            borderRadius: "16px",
                            boxShadow: "10px 10px 20px #00000030"
                        }}/>
                    </div>,
                    <div className={"w-full mb-12 flex items-center justify-center"}>
                    <img className={"w-5/6 h-auto object-fit"} src={"/images/projects/bands.png"} style={{
                        backgroundColor: "white",
                        border: "1px #A3A3A3 solid",
                        borderRadius: "16px",
                        boxShadow: "10px 10px 20px #00000030"
                    }}/>
                </div>,

                    <Block side={Side.RIGHT}>
                        <div className={"txt"}>It is a second year group project written in C++.</div>
                        <div className={"txt"}>We were 3, and since I loved this project so much,</div>
                        <div className={"txt"}>I decided to do it almost entirely alone x)</div>                                
                    </Block>,
                    <Block side={Side.LEFT}>
                        <div className={"txt"}>The goal was to create a so called "raytracer",</div>
                        <div className={"txt"}>a program that can render 3D scenes into 2D images.</div>
                    </Block>,
                    <Block side={Side.LEFT}>
                            <div className={"txt"}>Calculating the casts of lights</div>
                            <div className={"txt"}>and shadows on objects</div>
                    </Block>,
                    <div className={"w-full mb-12 flex items-center justify-center"}>
                    <img className={"w-5/6 h-auto object-fit"} src={"/images/projects/redLine.png"} style={{
                        backgroundColor: "white",
                        border: "1px #A3A3A3 solid",
                        borderRadius: "16px",
                        boxShadow: "10px 10px 20px #00000030"
                    }}/>
                </div>,
                    <Block side={Side.CENTER}>
                            <div className={"txt"}>This project is maybe the cleanest</div>
                            <div className={"txt"}>architecture I've ever made.</div>
                            <div className={"txt"}>It was a real pleasure to work on it.</div>
                    </Block>,
                    <Block side={Side.RIGHT}>
                            <div className={"txt"}>Going into technical</div>
                            <div className={"txt"}>stuff would not be of</div>
                            <div className={"txt"}>much interest, so I'll just</div>
                            <div className={"txt"}>leave it at that.</div>
                            <div className={"txt"}>Check out the repository to gain more</div>
                            <div className={"txt"}>insight on the project.</div>
                    </Block>
                ],
    },
    {
        title: "pRev_Folio",
        secondTitle: "pReVious PortFolio",
        content: [
            <div className={"w-full h-[40vh] flex items-center justify-center"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-center"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>The Portfolio project is an entangled one.</div>
                    <div className={"txt"}>5 versions of it were made,</div>
                    <div className={"txt"}>each one different from the others.</div>
                </div>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-start"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-start"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>1.<br/> The starting point is the discovery of HTML, CSS and JS.<br/></div>
                    <div className={"txt"}>Truly a mess but a fun one.</div>
                </div>
            </div>,
            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/portfolio1.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-center"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-center"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>Yeah...</div>
                </div>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-end"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-end"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>2.</div>
                    <div className={"txt"}>Next, i found my weapon of choice: Figma.</div>
                    <div className={"txt"}>From there, i discovered everything i could do with this wonder</div>
                    <div className={"txt"}>and started trying out new things.</div>
                </div>
            </div>,
            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/portfolio2.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-start"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-start"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>A bit better but a lot to learn.</div>
                </div>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-end"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-end"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>I never coded it because i knew i could design something way better.</div>
                </div>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-center"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-center"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>3.<br/> At this point, i really wanted to do something that fitted me better.
                    </div>
                    <div className={"txt"}>So i tried designing more unique ideas.</div>
                </div>
            </div>,
            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/portfolio3.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,
            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/portfolio3works.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,
            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/portfolio3rpg.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-end"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-end"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>I really liked this one.</div>
                    <div className={"txt"}>But...</div>
                </div>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-center"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-center"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>There was an ick.</div>
                    <div className={"txt"}>I absolutely did not have the capacity</div>
                    <div className={"txt"}>to code this portfolio</div>
                    <div className={"txt"}>And i abandoned it.</div>
                    <div className={"txt"}>Yeah, i know, shame...</div>
                </div>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-start"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-start"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>4.</div>
                    <div className={"txt"}>I learned React.</div>
                    <div className={"txt"}>Took me a while but i finally did it.</div>
                    <div className={"txt"}>And with that, i learned Typescript,</div>
                    <div className={"txt"}>Next.js and finally G. S. A. P. (my beloved)</div>
                </div>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-end"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-end"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>This was the last boost i needed</div>
                    <div className={"txt"}>to finally code this project</div>
                </div>
            </div>,
            <div className={"w-full mb-12 flex items-center justify-center"}>
                <img className={"w-5/6 h-auto object-cover"} src={"/images/projects/portfolio.png"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}/>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-end"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-end"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>I loved it, really, but</div>
                    <div className={"txt"}>with everything i've learned</div>
                    <div className={"txt"}>i once more knew that</div>
                    <div className={"txt"}>i could do way more</div>
                </div>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-center"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-center"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className={"txt"}>And half way through,</div>
                    <div className={"txt"}>i reimagined the design</div>
                    <div className="txt">to come up with this one</div>
                    <div className="txt">and i can't be more proud.</div>
                </div>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-start"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-start"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className="txt">i've never put this much effort</div>
                    <div className="txt">in building something i truly loved</div>
                    <div className="txt">excepte maybe the raytracer and my relationship lmao</div>
                </div>
            </div>,
            <div className={"w-full h-[40vh] flex items-center justify-center"}>
                <div className={"p-8 border border-[#A3A3A3] rounded-3xl text-center"} style={{
                    backgroundColor: "white",
                    border: "1px #A3A3A3 solid",
                    borderRadius: "16px",
                    boxShadow: "10px 10px 20px #00000030"
                }}>
                    <div className="txt">Hope you'll love it too ;)</div>
                </div>
            </div>,
        ],
    },
    {
        title: "aVen inC.",
        secondTitle: "deVign inC. website",
        content: [
            <Block side={Side.CENTER}>
                <div className={"txt"}>Aven Inc.</div>
                <div className={"txt"}>in coming</div>
            </Block>,
        ],

    }
]

export default function Projects() {
    const tl = useRef<gsap.core.Timeline>()
    const [active, setActive] = useState<number>(2);
    const projectRef = useRef(null);
    const dontTouch = useRef(null);
    const [open, setOpen] = useState(false);
    let menuTl = gsap.timeline();
    let menuCloseTl = gsap.timeline();
    const projectContentRef = useRef(null);

    useEffect(() => {
        gsap.set(".link", { y: 200 });
        menuTl = gsap.timeline({ paused: true })
            .to(".menu", { left: "2px", ease: "power2.out" })
            .to(".link", { y: 0, stagger: 0.05, duration: 0.5, delay: -1 });
    
        menuCloseTl = gsap.timeline({ paused: true })
            .to(".link", { y: 200, stagger: 0.05, duration: 0.5 })
            .to(".menu", { left: "-400px", ease: "power2.out", delay: "-1" });
    
    }, []);
    
    React.useEffect(() => {
        if (!menuTl.current || !menuCloseTl.current) return;
        if (open) {
            if (!menuTl.current.isActive()) {
                menuTl.current.play();
            }
        } else {
            if (!menuCloseTl.current.isActive()) {
                menuCloseTl.current.play();
            }
        }
    }, [open]);

    useEffect(() => {
        tl.current = gsap.timeline()
            .to(".titleLetters", {duration: 1, opacity: 1, y: 0, stagger: 0.05, delay: 1, ease: "power4.inOut"})
            .to(".titleLetters", {opacity: 0, y: 10, stagger: 0.05, duration: 1, ease: "power4.inOut"})
            .to(".menu-items", {opacity: 1, stagger: 0.1, duration: 0.5})
            .to("project-image", {opacity: 1, duration: 0.5})
            .to(dontTouch.current, {display: "none"}, "<");
    }, [])

    const toggleMenu = (): void => {
        setOpen(!open) }

    return (
        <LayoutComponent name={"Projects"}>
            <div className={"w-full flex h-full items-center justify-center relative"}>
                    <div className="menu left-[-400px] absolute w-80 top-2 bg-white rounded-xl z-10 border border-[#A3A3A3]" style={{ boxShadow: "10px 10px 20px #00000020" }}>
                        <div className="p-4 flex flex-col relative items-end justify-end w-full">
                            <button className={"w-8 h-8 absolute top-4 right-4"} onClick={toggleMenu}>
                                <svg className="fill-indigo-600 hover:fill-indigo-300 duration-100 transition-all" height="32px" width="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "/></svg>
                            </button>
                            {projects.map((item, i) => (
                                <div key={i} className={`w-full flex items-start justify-start ${DirtyLine.className} text-4xl text-indigo-600 `}>
                                    <button className={`cursor-pointer transition-all duration-100 hover:pl-2 hover:text-indigo-400 text-indigo-600 hover:mr-2`}
                                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", }}
                                        onClick={() => {
                                            setActive(i)
                                            if (projectContentRef.current)
                                                window.scrollTo(0, projectContentRef.current);
                                            toggleMenu()
                                        }}
                                    >
                                        <div className={"link relative"}>{item.title}</div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className={"menu-button bg-white p-2 top-2 left-2 absolute z-[5] rounded-xl"} onClick={toggleMenu}>
                        <img src={"/images/menu(1).png"} width={32} height={32} />
                    </button>
                <div className={"w-full overflow-hidden flex flex-col items-center justify-center"} style={{height: "calc(100vh - 7rem)"}}>
                    <div ref={projectRef} className={"w-full h-full overflow-y-scroll relative"}>
                        <div className={"sticky z-[-1] px-48 pb-12 w-full flex items-start justify-center h-full top-0 left-0"}>
                            <div className={"w-full h-full border-b px-2 pb-2 border-x border-[#A3A3A3] rounded-b-2xl"}>
                                <div className={"w-full h-full rounded-b-xl"} style={{background: "linear-gradient(to bottom, rgba(79, 70, 229, 0.1), rgba(79, 70, 229, 0.5))"}}></div>
                            </div>
                        </div>
                        <div className={"absolute top-0 left-0 w-full h-full"}>
                            <div className={`w-full h-[40vh] flex flex-col items-center justify-center text-black ${DirtyLine.className} text-[140px]`}>
                                <div className={"pt-24 pb-16 px-16 rounded-3xl bg-white border border-[#A3A3A3] text-center"}
                                     style={{boxShadow: "10px 10px 20px #00000030"}}>{projects[active].secondTitle}
                                </div>
                            </div>
                            <div ref={projectContentRef} className={`w-full h-full sm:text-3xl ${HalenoirDemi.className} text-gray-600 text-base uppercase relative p-4 px-32`}>
                                {projects[active].content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutComponent>
    );
}
