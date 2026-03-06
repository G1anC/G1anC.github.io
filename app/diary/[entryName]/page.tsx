import Nav from "../../components/nav";
import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

const DIARY_DIR = path.join(process.cwd(), '/app/diary/entries');

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
        <div className="bg-[#EBF0F8] text-gray-800 text-[14px] min-h-screen relative">
            <img src='/left.png' className="fixed h-screen top-0 left-0 pointer-events-none z-0" alt="left branch" />
            <img src='/right.png' className="fixed h-screen top-0 right-0 pointer-events-none z-0" alt="right branch" />

            <div className="max-w-7xl bg-[#EBF0F8]/5 z-10 mx-auto min-h-screen py-16 relative">
                <Nav />
                <div className="w-full mt-16 flex-col flex h-full">
                    <div className="w-full gap-16 flex">
                        <div className="p-10 pt-12 w-full bg-[#EBF0F8] shadow-xl shadow-gray-300/50 backdrop-blur-sm border text-justify text-base relative z-10 border-black/10 rounded-lg diary-content">
                            <div className="mb-8 flex w-full items-center justify-between">
                                <h1 className="text-2xl mb-2">{entry.title}</h1>
                                <p className="text-[#565f89] text-sm">{formattedDate}</p>
                            </div>
                            <div className="prose max-w-none whitespace-pre-wrap  leading-relaxed">
                                {entry.content}
                            </div>
                            <div className="mt-8">
                                <a href="/diary" className="link text-[#7aa2f7]">
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
