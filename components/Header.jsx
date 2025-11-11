export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight">APDSWorks</a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#about" className="hover:underline">About</a>
          <a href="/#contributions" className="hover:underline">Kontribusi</a>
          <a href="/#blog" className="hover:underline">Blog</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com/apdsdotcom-gif" aria-label="GitHub" className="p-2 rounded-full hover:bg-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.11-.02-2.01-3.05.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.18.9.1-.71.38-1.19.7-1.46-2.43-.28-4.99-1.21-4.99-5.4 0-1.19.43-2.16 1.13-2.93-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.02 1.12A10.6 10.6 0 0 1 12 6.84c.93.01 1.86.13 2.74.38 2.1-1.41 3.01-1.12 3.01-1.12.6 1.53.22 2.66.11 2.94.71.77 1.13 1.74 1.13 2.93 0 4.2-2.56 5.12-5 5.39.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.75.53 4.36-1.45 7.51-5.56 7.51-10.41C23.02 5.24 18.27.5 12 .5z"/></svg>
          </a>
          <a href="https://x.com/Agus_pamungkasS" aria-label="Twitter/X" className="p-2 rounded-full hover:bg-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.53 3h3.02l-6.59 7.53L22 21h-6.2l-4.85-6.36L5.3 21H2.28l7.06-8.06L2 3h6.3l4.38 5.79L17.53 3zm-1.09 16h1.67L7.62 4h-1.7L16.44 19z"/></svg>
          </a>
        </div>
      </div>
    </header>
  );
}
