import Head from "next/head";
import { useLanguage } from "@/context/LanguageContext";

export default function Seo({ 
  title, 
  description, 
  image = "/images/projects/porto/porto.png",
  url = "https://porto-fadlan.vercel.app"
}) {
  const { lang } = useLanguage();

  const siteTitle = title 
    ? `${title} | Fadlan`
    : "Fadlan - Software Engineer";

  const siteDesc = description || (lang === "id" 
    ? "Portfolio Muhammad Fadlansyah Zikri Akhiruddin Rawosi, Software Engineer yang berfokus pada produk web modern, clean, dan maintainable."
    : "Portfolio of Muhammad Fadlansyah Zikri Akhiruddin Rawosi, a Software Engineer focused on modern, clean, and maintainable web products.");

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDesc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDesc} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}
