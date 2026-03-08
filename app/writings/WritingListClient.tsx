'use client';

import React from 'react';

export interface WritingEntry {
    title: string;
    slug: string;            // URL‑safe slug generated on server
    date: string; // ISO string so it serializes cleanly
    content: string;
}

const WritingLink = ({ entry }: { entry: WritingEntry }) => {
    const date = new Date(entry.date);
    const label = date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    // slug was computed server‑side; it's already safe to inject into href
    const slug = entry.slug;

    return (
        <li className="w-full border-b py-6 first:pt-0 last:pb-0 border-black/20 last:border-0 list-none">
            <a
                className="link w-full flex justify-between uppercase py-4 items-center"
                href={`/writings/${slug}`}
            >
                <h1>{entry.title}</h1>
                <span className="text-gray-400 lowercase">{label}</span>
            </a>
        </li>
    );
};

interface Props {
    diaries: WritingEntry[];
    essays: WritingEntry[];
}

export default function WritingListClient({ diaries, essays }: Props) {
    const [mode, setMode] = React.useState<'diaries' | 'essays'>('diaries');
    const entries = mode === 'diaries' ? diaries : essays;

    return (
        <div
            className={`p-12 h-full w-full shrink-0 border shadow-2xl shadow-gray-400/10 text-justify relative bg-[#EBF0F8] backdrop-blur-3xl z-50 border-black/20 rounded-lg`}
        >
            <div className="absolute -top-7 left-42 -translate-x-1/2 inline-flex items-center px-8">
                <>
                    <img
                        src={mode === 'diaries' ? '/diary.svg' : '/essay.svg'}
                        alt="writings"
                        className="pointer-events-none opacity-66 w-12"
                    />
                    <h1 className="ml-4 shrink-0">
                        <button
                            onClick={() => setMode('essays')}
                            className={`px-3 py-2 rounded-md  ${mode !== 'essays' && 'opacity-50'}`}
                        >
                            ESSAYS
                        </button>
                        <span className="mx-2 opacity-50">|</span>
                        <button
                            onClick={() => setMode('diaries')}
                            className={`px-3 py-2 rounded-md ${mode !== 'diaries' && 'opacity-50'}`}
                        >
                            DIARIES
                        </button>
                    </h1>
                </>
                <div className="absolute inset-0 h-10 bg-[#EBF0F8] -z-10" />
            </div>
            <ul className="list-none m-0 p-0">
                {entries.map((entry) => (
                    <WritingLink key={entry.slug} entry={entry} />
                ))}
            </ul>
        </div>
    );
}
