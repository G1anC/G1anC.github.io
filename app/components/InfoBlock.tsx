import React, {ReactNode} from "react";

const InfoBlock = ({b, left, center, right}: {
    b: boolean,
    left: ReactNode[],
    center: ReactNode[],
    right: ReactNode[]
}) => (
    <div className={`w-full text-base uppercase flex ${b ? "justify-end items-end mt-4" : "mb-4"}`}>
        {/* Left Section */}
        <div className="flex-shrink-0 flex flex-col text-start mr-4">
            {left.map((text, i) => (
                <div className="txt" key={i}>{text}</div>
            ))}
        </div>

        {/* Line and Dot (Left) */}
        <div className={"flex items-start w-full justify-center"}>
            <div className={"flex w-full items-center"}>
                <div className={"bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"}></div>
                <div className="w-full h-[1px] bg-black"></div>
            </div>
        </div>

        {/* Center Section */}
        <div className="mx-8 flex-shrink-0 flex flex-col items-center text-center">
            {center.map((text, i) => (
                <div className="txt" key={i}>{text}</div>
            ))}
        </div>

        {/* Line and Dot (Right) */}
        <div className={"flex items-start w-full justify-center"}>
            <div className={"flex w-full items-center"}>
                <div className="w-full h-[1px] bg-black"></div>
                <div className={"bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"}></div>
            </div>
        </div>

        {/* Right Section */}
        <div className="flex-shrink-0 flex flex-col text-end ml-4">
            {right.map((text, i) => (
                <div className="txt" key={i}>{text}</div>
            ))}
        </div>
    </div>
);

export default InfoBlock;