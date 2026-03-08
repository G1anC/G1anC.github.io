import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import WritingListClient, { WritingEntry } from './WritingListClient';

const DIARIES_DIR = path.join(process.cwd(), '/app/writings/diaries');
const ESSAYS_DIR = path.join(process.cwd(), '/app/writings/essays');

// helper must match the slugify defined in the page component
function slugify(name: string): string {
    return name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/'/g, '')
        .replace(/[^a-z0-9\-]/g, '');
}

async function readEntries(dir: string): Promise<WritingEntry[]> {
    const files = await fs.readdir(dir);
    const markdownFiles = files.filter((f) => f.endsWith('.md'));
    if (markdownFiles.length === 0) return [];

    const entries = await Promise.all(
        markdownFiles.map(async (filename) => {
            const filepath = path.join(dir, filename);
            const content = await fs.readFile(filepath, 'utf-8');
            const { data } = matter(content);
            const name = filename.slice(0, -3);

            return {
                title: data.title,
                slug: slugify(name),
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
    const diaries = await readEntries(DIARIES_DIR);
    const essays = await readEntries(ESSAYS_DIR);

    return <WritingListClient diaries={diaries} essays={essays} />;
}
