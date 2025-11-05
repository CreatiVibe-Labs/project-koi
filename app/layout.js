import { Public_Sans } from 'next/font/google';
import "./globals.css";
import "./desktop.css";
import "./responsive.css";
import RipplesBackground from '@/components/RipplesBackground';
// import ChatWrapper from "@/components/ChatWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import { getHeaderData, getFooterData } from '@/constant/ContentApi';

// Load Swiper CSS only where needed, not globally
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  weight: ['300', '400', '500', '600', '700'], // Optional: choose weights you need
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.aerialink.jp'),
  title: {
    default: "Aerialink | Web Development & Digital Marketing Experts",
    template: "%s | Aerialink Inc"
  },
  description: "Leading IT solutions provider in Japan. Expert web development, custom software, cloud migration, AI solutions & digital marketing services. Transform your business with Aerialink.",
  keywords: [
    "Aerialink",
    "Web Development",
    "Custom Web Development",
    "Digital Marketing Services",
    "SEO Services Japan",
    "Website Design",
    "Cloud Solutions",
    "Cloud Migration",
    "AI Solutions",
    "IT Consulting",
    "Custom App Development",
    "E-commerce Development",
    "Kobe IT Services",
    "Japan Web Development",
  ],
  authors: [{ name: "Aerialink Inc" }],
  creator: "Aerialink Inc",
  publisher: "Aerialink Inc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Aerialink | Web Development & Digital Marketing Experts",
    description:
      "Leading IT solutions provider in Japan. Expert web development, custom software, cloud migration, AI solutions & digital marketing services.",
    url: "https://www.aerialink.jp",
    siteName: "Aerialink",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aerialink - IT Solutions & Web Development"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerialink | Web Development & Digital Marketing Experts",
    description:
      "Leading IT solutions provider in Japan. Expert web development, custom software & digital marketing services.",
    images: ["/images/og-image.jpg"],
    creator: "@aerialink",
    site: "@aerialink",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.aerialink.jp",
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default async function RootLayout({ children }) {

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value ?? 'en';
  const ASSETS_URL_LAYOUT = process.env.NEXT_PUBLIC_DASHBOARD_URL;
  const headerData = await getHeaderData();
  const footerData = await getFooterData();

  return (
    <html lang={lang === 'ja' ? 'ja' : 'en'} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#39ff14" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={publicSans.variable}>
        <div id="root">
          <div className="transition-opacity duration-700 opacity-100 background-image"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              width: '100%',
              height: '100vh',
              overflow: 'hidden',
              overflowY: 'auto',
              position: 'static',
            }}>
            <RipplesBackground />
            <Header lang={lang} ASSETS_URL={ASSETS_URL_LAYOUT} apiData={headerData} />
            <div className="content-wrapper">{children}</div>
            <Footer lang={lang} ASSETS_URL={ASSETS_URL_LAYOUT} apiData={footerData} />
          </div>
        </div>
      </body>
    </html>
  );
}


