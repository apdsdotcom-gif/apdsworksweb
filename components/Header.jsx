export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#F2E5D6]/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight">APDSWorks</a>
        <nav className="flex items-center gap-3">
          <a href="/#about" className="px-3 py-1.5 rounded-full bg-white/60 hover:bg-white/80 text-sm">About</a>
          <a href="/#contributions" className="px-3 py-1.5 rounded-full bg-white/60 hover:bg-white/80 text-sm">Kontribusi</a>
          <a href="/#blog" className="px-3 py-1.5 rounded-full bg-white/60 hover:bg-white/80 text-sm">Blog</a>
        </nav>
      </div>
    </header>
  );
}
