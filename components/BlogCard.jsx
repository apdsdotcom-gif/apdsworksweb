export default function BlogCard({ post }) {
  return (
    <a href={`/blog/${post.slug}`} className="block card">
      <img src={post.cover} alt={post.title} className="rounded-xl mb-4" />
      <h3 className="font-semibold text-lg">{post.title}</h3>
      <p className="text-sm opacity-80 mt-1">{post.excerpt}</p>
      <div className="text-xs opacity-70 mt-3">{new Date(post.date).toLocaleDateString()}</div>
    </a>
  );
}
