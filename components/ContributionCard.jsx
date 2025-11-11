export default function ContributionCard({ item }) {
  return (
    <a href={`/contributions/${item.slug}`} className="block card">
      <img src={item.cover} alt={item.title} className="rounded-xl mb-4" />
      <h3 className="font-semibold text-lg">{item.title}</h3>
      <p className="text-sm opacity-80 mt-1">{item.excerpt}</p>
      <div className="text-xs opacity-70 mt-3">{item.tools?.join(', ')}</div>
    </a>
  );
}
