
import Nav from "../components/nav";
import WritingList from './WritingList';
import React from 'react'

export default async function writing() {
    return (
        <div className="bg-[#e1e6ec] text-gray-800 text-[14px] min-h-screen relative">
            <img src='/left.png' className="fixed h-screen top-0 left-0 pointer-events-none z-0" alt="left branch" />
            <img src='/right.png' className="fixed h-screen top-0 right-0 pointer-events-none z-0" alt="right branch" />

            <div className="max-w-400 bg-[#e1e6ec] z-10 mx-auto min-h-screen p-32 py-24 relative">
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