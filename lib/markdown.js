import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDir = path.join(process.cwd(), 'content', 'blog');
const projDir = path.join(process.cwd(), 'content', 'projects');

export function getAllPosts() {
  const files = fs.readdirSync(blogDir);
  return files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const file = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data, content } = matter(file);
    return { slug, ...data, content };
  }).sort((a,b)=> new Date(b.date) - new Date(a.date));
}

export function getAllProjects() {
  const files = fs.readdirSync(projDir);
  return files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const file = fs.readFileSync(path.join(projDir, filename), 'utf-8');
    const { data, content } = matter(file);
    return { slug, ...data, content };
  });
}

export async function markdownToHtml(md) {
  const result = await remark().use(html).process(md);
  return result.toString();
}
