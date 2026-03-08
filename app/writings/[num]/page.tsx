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

// simple slugify that mirrors the one used by the listing component
function slugify(name: string): string {
    return name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')   // spaces to hyphen
        .replace(/'/g, '')       // drop apostrophes
        .replace(/[^a-z0-9\-]/g, ''); // remove anything else
}

async function getEntryBySlug(slug: string): Promise<WritingEntry | null> {
    for (const dir of [DIARIES_DIR, ESSAYS_DIR]) {
        try {
            const files = await fs.readdir(dir);
            const matchingFile = files.find((f) => {
                const base = f.replace('.md', '');
                return slugify(base) === slug;
            });
            if (matchingFile) {
                const filepath = path.join(dir, matchingFile);
                const fileContent = await fs.readFile(filepath, 'utf-8');
                const { data, content } = matter(fileContent);
                const base = matchingFile.replace('.md', '');
                return {
                    title: data.title || base,
                    date: new Date(data.date),
                    content,
                };
            }
        } catch (e) {
            // ignore errors and try next directory
        }
    }
    return null;
}

export async function generateStaticParams(): Promise<{ num: string }[]> {
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

    // return slugs rather than raw filenames; slugs are URL‑safe and
    // deterministic so the exporter can create valid directories
    return all.map((filename) => {
        const name = filename.slice(0, -3);
        const slug = slugify(name);
        return { num: slug };
    });
}

export default async function WritingEntry({ params }: { params: { num: string } | Promise<{ num: string }> }) {
    // during client-side RSC navigation Next sometimes hands us a promise
    // for `params`. awaiting it is safe on server and ensures we unwrap
    // the value before destructuring.
    const { num } = await params;
    // `num` is a slug; convert back to a real entry
    const entry = await getEntryBySlug(num);

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
