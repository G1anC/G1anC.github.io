
import Nav from "../components/nav";
import { promises as fs } from 'fs';
import path from 'path';

interface DiaryEntry {
    title: string;
    date: Date;
    content: string;
}

const DIARY_DIR = path.join(process.cwd(), '/app/diary/entries'); // chemin absolu fiable

async function getDiaryEntries(dir: string): Promise<DiaryEntry[]> {
    const files = await fs.readdir(dir);
    const markdownFiles = files.filter(f => f.endsWith('.md'));

    const entries = await Promise.all(
        markdownFiles.map(async (filename): Promise<DiaryEntry> => {
            const filepath = path.join(dir, filename);
            const content = await fs.readFile(filepath, 'utf-8');

            const rawDate = filename.slice(-11, -3);
            const day   = rawDate.slice(0, 2);
            const month = rawDate.slice(2, 4);
            const year  = rawDate.slice(4);
            const date  = new Date(`${year}-${month}-${day}`);
            return {
                title: filename.slice(0, -12),
                date,
                content,
            };
        })
    );

    return entries.sort((a, b) => b.date.getTime() - a.date.getTime());
}

const DiaryLink = ({ entry }: { entry: DiaryEntry }) => {
    const label = entry.date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const slug = encodeURIComponent(entry.title);

    return (
        <li>
            <a className="link w-full flex justify-between uppercase py-4 items-center" href={`/diary/${slug}`}>
                <h1>{entry.title}</h1>
                <span className="text-gray-400 lowercase">{label}</span>
            </a>
        </li>
    );
};

export default async function Diary() {
    const entries = await getDiaryEntries(DIARY_DIR);

    return (
        <div className="bg-[#e1e6ec] text-gray-800 text-[14px] min-h-screen relative">
            <img src='/left.png' className="fixed h-screen top-0 left-0 pointer-events-none z-0" alt="left branch" />
            <img src='/right.png' className="fixed h-screen top-0 right-0 pointer-events-none z-0" alt="right branch" />

            <div className="max-w-7xl z-10 mx-auto min-h-screen py-16 relative">
                <Nav />
                <div className="w-full mt-16 flex-col flex h-full">
                    <div className="w-full gap-16 flex">
                        <div className="py-6 px-10 w-full bg-[#e1e6ec] shadow-xl shadow-gray-300/50 backdrop-blur-sm border text-justify relative z-10 border-black/10 rounded-lg">
                            <ul className="flex flex-col gap-2">
                                {entries.map((entry, index) => (
									<>
                                    	<DiaryLink key={entry.title} entry={entry} />
										{index < entries.length - 1 && <div className="w-full h-px bg-black/10" />}
									</>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}