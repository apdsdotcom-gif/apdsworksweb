import Head from 'next/head';

export default function SEO({
  title = 'APDSWorks',
  description = 'Portofolio pastel modern oleh Edo – desain, ilustrasi, dan motion yang tenang.',
  url = 'https://apdsworks.xyz',
  image = '/images/og-default.webp'
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href="/favicon-32.png" sizes="32x32" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#FFF8F1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
    </Head>
  );
}
