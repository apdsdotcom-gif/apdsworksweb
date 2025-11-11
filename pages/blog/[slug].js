import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getAllPosts, markdownToHtml } from '../../lib/markdown';

import SEO from '../../components/SEO';
export default function BlogDetail({ post }) {
  return (
    <>
    <SEO title={`${post.title} – APDSWorks`} image={post.cover} />
  <>
  <Header />
  <main className="bg-cream min-h-screen py-16 container mx-auto px-6 prose prose-lg">
      <h1>{post.title}</h1>
      <img src={post.cover} alt={post.title} />
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  <Footer />
</>
  </>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return { paths: posts.map(p => ({ params: { slug: p.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getAllPosts().find(p => p.slug === params.slug);
  const contentHtml = await markdownToHtml(post.content);
  return { props: { post: { ...post, contentHtml } } };
}
