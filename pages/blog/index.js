import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { getAllPosts } from '../../lib/markdown';
import BlogCard from '../../components/BlogCard';

export default function Blog({ posts }) {
  return (
    <>
    <SEO title="Blog – APDSWorks" />
  <>
  <Header />
  <main className="bg-cream min-h-screen py-16 container mx-auto px-6">
      <h1 className="text-3xl font-semibold mb-8">Blog</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map(p => <BlogCard key={p.slug} post={p} />)}
      </div>
    </main>
  <Footer />
</>
  </>
  );
}

export function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}
