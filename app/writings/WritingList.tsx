import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import WritingListClient, { WritingEntry } from './WritingListClient';

const DIARIES_DIR = path.join(process.cwd(), '/app/writings/diaries');
const ESSAYS_DIR = path.join(process.cwd(), '/app/writings/essays');

async function readEntries(dir: string): Promise<WritingEntry[]> {
    const files = await fs.readdir(dir);
    const markdownFiles = files.filter((f) => f.endsWith('.md'));
    if (markdownFiles.length === 0) return [];

    const entries = await Promise.all(
        markdownFiles.map(async (filename) => {
            const filepath = path.join(dir, filename);
            const content = await fs.readFile(filepath, 'utf-8');
            const { data } = matter(content);

            return {
                title: data.title,
                num: filename.slice(0, -3),
                date: new Date(data.date).toISOString(),
                content,
            };
        })
    );

    return entries.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export default async function WritingList() {
    // filesystem access happens on the server at build time
    const diaries = await readEntries(DIARIES_DIR);
    const essays = await readEntries(ESSAYS_DIR);

    return <WritingListClient diaries={diaries} essays={essays} />;
}
