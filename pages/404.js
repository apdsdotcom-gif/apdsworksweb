import SEO from '@/components/SEO';
export default function NotFound() {
  return (
    <main className="bg-cream min-h-screen flex items-center justify-center text-center p-10">
      <SEO title="Halaman tidak ditemukan – APDSWorks" />
      <div>
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="opacity-80 mb-6">Halaman yang kamu cari tidak ditemukan.</p>
        <a href="/" className="btn-gradient">Kembali ke Beranda</a>
      </div>
    </main>
  )
}
