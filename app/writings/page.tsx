
import Nav from "../components/nav";
import WritingList from './WritingList';
import React from 'react'

export default async function writing() {
    return (
        <div className="bg-[#EBF0F8] text-gray-800 text-[14px] min-h-screen relative">
            <img src='/left.png' className="fixed h-screen top-0 left-0 pointer-events-none z-0" alt="left branch" />
            <img src='/right.png' className="fixed h-screen top-0 right-0 pointer-events-none z-0" alt="right branch" />

            <div className="max-w-400 bg-[#EBF0F8] z-10 mx-auto min-h-screen p-32 py-24 relative">
                <img src='/ASCII.png' className="fixed scale-40 top-0 left-0 pointer-events-none -translate-1/3 z-0 opacity-7" alt="left branch" />
				<img src='/ASCII.png' className="fixed scale-40 bottom-40 right-0 pointer-events-none -scale-x-40 translate-1/3 z-0 opacity-7" alt="left branch" />
                <Nav />
                <div className="w-full mt-16 flex-col flex h-full">
                    <div className="w-full gap-16 flex">
                        <WritingList />
                    </div>
                </div>
            </div>
        </div>
    );
}