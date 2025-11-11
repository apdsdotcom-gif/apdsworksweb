import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Blob from '@/components/Blob';
import WaveSeparator from '../components/WaveSeparator.jsx';
import ContributionCard from '../components/ContributionCard';
import BlogCard from '../components/BlogCard';
import CursorBubble from '../components/CursorBubble';
import { getAllPosts, getAllProjects } from '../lib/markdown';

import SEO from '../components/SEO';
export default function Home({ posts, projects }) {
  return (
          <>
    <SEO />
      <main className="bg-cream min-h-screen">
      <CursorBubble />
      <Header />
      <Hero />
      <WaveSeparator variant="hero" />

      <section id="contributions" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">Kontribusi</h2>
            <a href="/contributions" className="btn-gradient">Lihat Semua Kontribusi</a>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.slice(0,3).map(p => <ContributionCard key={p.slug} item={p} />)}
          </div>
        </div>
      </section>

      <WaveSeparator variant="blue" />

      <section id="blog" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">Blog</h2>
            <a href="/blog" className="btn-gradient">Lihat Semua Artikel</a>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {posts.slice(0,3).map(p => <BlogCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      <WaveSeparator variant="cream" />

      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold mb-4">About</h2>
            <p className="opacity-90 leading-8">
              APDSWorks menjadi tempat untuk mengarsipkan karya dan eksperimen yang aku kerjakan. Mulai dari ilustrasi,
              motion graphics, hingga konsep visual yang sedang aku kembangkan. Aku percaya bahwa desain terbaik adalah
              yang sederhana namun berkarakter, dan itu yang terus aku kejar dalam setiap projek.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p className="opacity-80 mb-4">Hubungi aku lewat platform di bawah ini.</p>
            <div className="flex flex-wrap gap-3 mb-6"><a href="mailto:apdsdotcom@gmail.com" className="btn-gradient">Email</a><a href="https://github.com/apdsdotcom-gif" target="_blank" className="btn-gradient">GitHub</a><a href="https://x.com/Agus_pamungkasS" target="_blank" className="btn-gradient">X / Twitter</a></div>
            <ul className="space-y-2">
              <li><a href="mailto:apdsdotcom@gmail.com" className="underline">apdsdotcom@gmail.com</a></li>
              <li><a href="https://github.com/apdsdotcom-gif" target="_blank" className="underline">github.com/apdsdotcom-gif</a></li>
              <li><a href="https://x.com/Agus_pamungkasS" target="_blank" className="underline">x.com/Agus_pamungkasS</a></li>
            </ul>
          </div>
        </div>
        {/* Decorative blobs behind */}
        <img src="/svg/blob/blob-about-cyan.svg" alt="" className="absolute -z-10 top-6 left-6 w-80 opacity-60 anim-blob" />
        <img src="/svg/blob/blob-about-pink.svg" alt="" className="absolute -z-10 bottom-6 right-6 w-96 opacity-60 anim-blob" />
      </section>

      <Footer />
    </main>
  </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  const projects = getAllProjects();
  return { props: { posts, projects } };
}
