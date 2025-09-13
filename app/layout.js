import { Public_Sans } from 'next/font/google';
import "./globals.css";
import "./desktop.css";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./responsive.css";
import RipplesBackground from '@/components/RipplesBackground';
// import ChatWrapper from "@/components/ChatWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import { getHeaderData, getFooterData } from '@/constant/ContentApi';

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  weight: ['300', '400', '500', '600', '700'], // Optional: choose weights you need
  display: 'swap',
});

export const metadata = {
  title: "Default - Aerialink Inc",
  description: "Default - Aerialink Inc",
};

export default async function RootLayout({ children }) {

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value ?? 'en';
  const ASSETS_URL_LAYOUT = process.env.NEXT_PUBLIC_DASHBOARD_URL;
  const headerData = await getHeaderData();
  const footerData = await getFooterData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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


