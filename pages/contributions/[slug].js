import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getAllProjects, markdownToHtml } from '../../lib/markdown';

import SEO from '../../components/SEO';
export default function ContributionDetail({ project }) {
  return (
    <>
    <SEO title={`${project.title} – APDSWorks`} image={project.cover} />
  <>
  <Header />
  <main className="bg-cream min-h-screen py-16 container mx-auto px-6 prose prose-lg">
      <h1>{project.title}</h1>
      <img src={project.cover} alt={project.title} />
      <div className="opacity-70 text-sm mb-4">{project.tools?.join(', ')}</div>
      <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </main>
  <Footer />
</>
  </>
  );
}

export async function getStaticPaths() {
  const projs = getAllProjects();
  return { paths: projs.map(p => ({ params: { slug: p.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const proj = getAllProjects().find(p => p.slug === params.slug);
  const contentHtml = await markdownToHtml(proj.content);
  return { props: { project: { ...proj, contentHtml } } };
}
