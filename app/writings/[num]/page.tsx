import Nav from "../../components/nav";
import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/base16/gruvbox-light-medium.css';

// look in both subfolders of writings
const DIARIES_DIR = path.join(process.cwd(), '/app/writings/diaries');
const ESSAYS_DIR = path.join(process.cwd(), '/app/writings/essays');

interface WritingEntry {
    title: string;
    date: Date;
    content: string;
}

async function getEntryByName(entryName: string): Promise<WritingEntry | null> {
    for (const dir of [DIARIES_DIR, ESSAYS_DIR]) {
        try {
            const files = await fs.readdir(dir);
            const matchingFile = files.find((f) => f.replace('.md', '') === entryName);
            if (matchingFile) {
                const filepath = path.join(dir, matchingFile);
                const fileContent = await fs.readFile(filepath, 'utf-8');
                const { data, content } = matter(fileContent);
                return {
                    title: data.title || entryName,
                    date: new Date(data.date),
                    content,
                };
            }
        } catch (e) {
            return null;
        }
    }
    return null;
}

export async function generateStaticParams() {
    const collect = async (dir: string) => {
        try {
            const files = await fs.readdir(dir);
            return files.filter((f) => f.endsWith('.md'));
        } catch {
            return [];
        }
    };

    const diaryFiles = await collect(DIARIES_DIR);
    const essayFiles = await collect(ESSAYS_DIR);

    const all = [...diaryFiles, ...essayFiles];

    return all.map((filename) => {
        const num = filename.slice(0, -3);
        return { num };
    });
}

export default async function WritingEntry({ params }: { params: Promise<{ num: string }> }) {
    const { num } = await params;
    const decodedName = decodeURIComponent(num);
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
        <div className="text-gray-800 bg-[#EBF0F8] min-h-screen relative">
            <img src='/left.png' className="fixed h-screen top-0 left-0 pointer-events-none z-0" alt="left branch" />
            <img src='/right.png' className="fixed h-screen top-0 right-0 pointer-events-none z-0" alt="right branch" />

            <div className="max-w-400 bg-[#EBF0F8] z-10 mx-auto p-32 py-24 relative">
                <img src='/ASCII.png' className="fixed scale-40 top-0 left-0 pointer-events-none -translate-1/3 z-0 opacity-7" alt="left branch" />
                <img src='/ASCII.png' className="fixed scale-40 bottom-40 right-0 pointer-events-none -scale-x-40 translate-1/3 z-0 opacity-7" alt="left branch" />

                <Nav />

                <div className="w-full mt-16 flex-col flex h-full">
                        <a href='/writings' className="hover:cursor-pointer w-full hover:pl-1 mb-6 text-[#4B7AA7]/50 hover:text-[#4B7AA7] duration-200 transition-all flex gap-12 items-center justify-between">
                            <p>← Return to writings</p>
                        </a>
                    <article className="w-full relativ p-12 border shadow-2xl shadow-gray-400/10 border-black/20 bg-[#EBF0F8] z-10 rounded-lg">
                        <header className="mb-12 flex w-full justify-between items-center">
                            <h1 className="text-3xl uppercase mb-4 leading-tight text-[#222222]">{entry.title}</h1>
                            <p className="text-sm text-black/50">{formattedDate}</p>
                        </header>
                        <div className="writing-content text-justify overflow-y-scroll bg-[#EBF0F8] py-4 px-4">
                            <MDXRemote
                                source={entry.content}
                                options={{
                                    mdxOptions: {
                                        remarkPlugins: [],
                                        rehypePlugins: [rehypeHighlight],
                                        format: 'md',
                                    },
                                }}
                            />
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
