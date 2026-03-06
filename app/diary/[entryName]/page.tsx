import Nav from "../../components/nav";
import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

const DIARY_DIR = path.join(process.cwd(), '/app/entries');

interface DiaryEntry {
    title: string;
    date: Date;
    content: string;
}

async function getEntryByName(entryName: string): Promise<DiaryEntry | null> {
    try {
        const files = await fs.readdir(DIARY_DIR);
        const matchingFile = files.find(f => {
            if (!f.endsWith('.md')) return false;
            const titlePart = f.slice(0, -12);
            return titlePart === entryName;
        });

        if (!matchingFile) return null;

        const filepath = path.join(DIARY_DIR, matchingFile);
        const content = await fs.readFile(filepath, 'utf-8');

        const rawDate = matchingFile.slice(-11, -3);
        const day = rawDate.slice(0, 2);
        const month = rawDate.slice(2, 4);
        const year = rawDate.slice(4);
        const date = new Date(`${year}-${month}-${day}`);

        return {
            title: entryName,
            date,
            content,
        };
    } catch (error) {
        return null;
    }
}

export async function generateStaticParams() {
    const files = await fs.readdir(DIARY_DIR);
    const markdownFiles = files.filter(f => f.endsWith('.md'));

    return markdownFiles.map((filename) => {
        const title = filename.slice(0, -12);
        return {
            entryName: encodeURIComponent(title),
        };
    });
}

export default async function DiaryEntry({ params }: { params: Promise<{ entryName: string }> }) {
    const { entryName } = await params;
    const decodedName = decodeURIComponent(entryName);
    const entry = await getEntryByName(decodedName);

    if (!entry) {
        notFound();
    }

    const formattedDate = entry.date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="bg-[#EBF0F8] text-gray-800 text-[14px] min-h-screen">
            <img src="/ASCII.png" alt="ASCII branch" className="absolute opacity-12 w-9xl z-0 top-20 left-0 scale-50 -translate-1/4 pointer-events-none" />
            <img src="/flowers.png" alt="ASCII branch" className="absolute opacity-50 w-9xl z-0 top-20 left-0 scale-50 -translate-1/4 pointer-events-none" />
            <img src="/ASCII.png" alt="ASCII branch" className="absolute opacity-12 w-9xl bottom-20 right-0 scale-50 scale-x-[-0.5] translate-1/4 pointer-events-none z-0" />
            <img src="/flowers.png" alt="ASCII branch" className="absolute opacity-50 w-9xl bottom-20 right-0 scale-50 scale-x-[-0.5] translate-1/4 pointer-events-none z-0" />

            <div className="max-w-7xl bg-[#EBF0F8]/5 z-20 mx-auto min-h-screen py-16">
                <Nav />
                <div className="w-full mt-16 flex-col flex h-full">
                    <div className="w-full gap-16 flex">
                        <div className="p-10 pt-12 w-full bg-[#EBF0F8]/50 backdrop-blur-sm border text-justify text-2xl relative border-black/33 rounded-lg">
                            <div className="mb-8 flex w-full items-center justify-between">
                                <h1 className="text-3xl font-bold mb-2">{entry.title}</h1>
                                <p className="text-gray-400">{formattedDate}</p>
                            </div>
                            <div className="prose prose-sm max-w-none whitespace-pre-wrap">
                                {entry.content}
                            </div>
                            <div className="mt-8">
                                <a href="/diary" className="link text-blue-600">
                                    ← Return to diaries
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
