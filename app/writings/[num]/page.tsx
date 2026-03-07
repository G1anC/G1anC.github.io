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
    // check both directories; return the first match
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
            // ignore missing folder (shouldn't happen)
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
        <div className="text-gray-800 bg-[#e1e6ec] min-h-screen relative">
            <img src='/left.png' className="fixed h-screen top-0 left-0 pointer-events-none z-0" alt="left branch" />
            <img src='/right.png' className="fixed h-screen top-0 right-0 pointer-events-none z-0" alt="right branch" />

            <div className="max-w-400 bg-[#e1e6ec] z-10 mx-auto p-32 py-24  relative">
                <Nav />
                <div className="w-full bg-[#eceff3] mt-16 flex-col flex h-full">
                        <article className="w-full relative bg-[#e1e6ec] z-10 rounded-lg">
                            <a href='/writings' className="hover:cursor-pointer w-full hover:pl-1 text-[#4B7AA7]/50 hover:text-[#4B7AA7] duration-200 transition-all mb-2 flex gap-12 items-center justify-between">
                                <p>← Return to writings</p>
                            </a>
                            <header className="mb-12 flex w-full justify-between items-center">
                                <h1 className="text-3xl uppercase mb-4 leading-tight text-[#222222]">{entry.title}</h1>
                                <p className="text-sm text-black/50">{formattedDate}</p>
                            </header>
                            <div className="writing-content overflow-y-scroll bg-[#e1e6ec] py-4 px-8">
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
