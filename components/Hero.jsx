import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20">
      <div className="container mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Halo, aku Edo — pembuat visual dan motion yang tenang.
          </h1>
          <p className="mt-4 text-lg opacity-80">
            Aku merancang pengalaman visual penuh detail melalui ilustrasi, motion, dan desain modern. Portofolio ini menampilkan karya dan proses kreatifku.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contributions" className="btn-gradient">Lihat Kontribusi</a>
            <a href="#blog" className="btn-gradient">Lihat Blog</a>
          </div>
        </div>
        <div className="relative">
          <motion.img
            src="/images/hero-photo.webp"
            alt="Ilustrasi Edo bergaya pastel dengan latar blob organik lembut."
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md mx-auto rounded-[40px] shadow-soft"
            style={{
              WebkitMaskImage: 'url(/svg/blob/blob-hero-mask.svg)',
              maskImage: 'url(/svg/blob/blob-hero-mask.svg)',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
              backgroundColor: 'transparent'
            }}
          />
          {/* Decorative small blob */}
          <img style={{ WebkitMaskImage:'url(/svg/blob/blob-hero-mask.svg)', maskImage:'url(/svg/blob/blob-hero-mask.svg)', WebkitMaskSize:'contain', maskSize:'contain', WebkitMaskRepeat:'no-repeat', maskRepeat:'no-repeat', WebkitMaskPosition:'center', maskPosition:'center' }} src="/svg/blob/blob-deco-small.svg" alt="" className="absolute -z-10 anim-blob w-40 -top-6 -left-6 opacity-60" />
        </div>
      </div>
    
  <img src="/svg/blob/blob-about-cyan.svg" alt="" className="absolute -z-10 w-[28rem] opacity-40 -top-10 -right-10 hidden md:block anim-blob" />
  <img src="/svg/blob/blob-about-pink.svg" alt="" className="absolute -z-10 w-[24rem] opacity-40 bottom-0 left-0 hidden md:block anim-blob" />
</section>
  );
}
