import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { getAllProjects } from '../../lib/markdown';
import ContributionCard from '../../components/ContributionCard';

export default function Contributions({ projects }) {
  return (
    <>
    <SEO title="Kontribusi – APDSWorks" />
  <>
  <Header />
  <main className="bg-cream min-h-screen py-16 container mx-auto px-6">
      <h1 className="text-3xl font-semibold mb-8">Kontribusi</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map(p => <ContributionCard key={p.slug} item={p} />)}
      </div>
    </main>
  <Footer />
</>
  </>
  );
}

export function getStaticProps() {
  return { props: { projects: getAllProjects() } };
}
