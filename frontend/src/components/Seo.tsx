import Head from 'next/head';

export default function Seo({
  title = 'Omkar Cloud',
  description = 'Get the Data You Want - Effortlessly',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/twitter-card.png" />
      <meta property="og:url" content="/images/twitter-card.png" />
    </Head>
  )
}