
import Image from "next/image";
import Link from 'next/link';
import ServicesCards from '@/components/ServicesCards';
import IndustriesWeServe from "@/components/IndustriesWeServe";
import HomeWhyChooseUs from "@/components/sliders/HomeWhyChooseUs";
import { getHomePageData, getIndustriesData } from "@/constant/ContentApi";

import { cookies } from "next/headers";

export const metadata = {
  title: "Aerialink | Web Development & Digital Marketing Experts",
  description: "Aerialink offers professional web development, custom solutions, and digital marketing services. Grow your business online with Aerialink today!",
  keywords: "web development Japan, custom software development, digital marketing, cloud migration, AI solutions, IT consulting Kobe",
  openGraph: {
    title: "Aerialink | Web Development & Digital Marketing Experts in Japan",
    description: "Leading IT solutions provider in Japan. Expert web development, custom software, cloud migration & AI solutions.",
    url: "https://www.aerialink.jp",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  alternates: {
    canonical: "https://www.aerialink.jp",
  },
};

export default async function Home() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value ?? 'en';
  const ASSETS_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
  const apiData = await getHomePageData();
  const industriesData = await getIndustriesData();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aerialink",
    url: "https://www.aerialink.jp",
    description:
      "Aerialink offers professional web development, custom solutions, and digital marketing services to help businesses grow online.",
    publisher: {
      "@type": "Organization",
      name: "Aerialink",
      url: "https://www.aerialink.jp",
      logo: {
        "@type": "ImageObject",
        url: "https://www.aerialink.jp/images/logo.png",
      },
      sameAs: [
        "https://www.facebook.com/aerialink",
        "https://www.instagram.com/aerialink",
        "https://www.linkedin.com/company/aerialink",
        "https://twitter.com/aerialink",
      ],
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.aerialink.jp/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <div className="hero-section homeBanner">
        <div className="content-section border-[1px] border-[#ffffff66] gradient-background">
          <h1>{apiData?.content?.hero_section_heading?.[lang] || "IT Solutions Tailored to Your Business"}</h1>
          <p className="!font-medium">{apiData?.content?.hero_section_description?.[lang] || "From day-to-day support to long term strategy, we deliver cost efficient, flexible IT services designed to match your goals and specific way of working"}</p>
          <div className="buttons-wrapper">
            <Link className="callUs" href="tel:+81788552760">{apiData?.content?.cta_1?.[lang] || "Call us"}</Link>
            <Link href="/services" className="border-[1px] border-[#39ff14]">{apiData?.content?.cta_2?.[lang] || "Check Services"}</Link>
            <Link href="/demo">{apiData?.content?.cta_3?.[lang] || "Try Demo"}</Link>
          </div>
        </div>
        <div className="image-section">
          <Image
            src={(apiData?.content?.image_hero_section_image?.[lang])
              ? (ASSETS_URL + apiData.content.image_hero_section_image?.[lang])
              : '/images/hero-image.png'}
            width={516}
            height={444}
            alt="Hero Image"
            priority={true}
            quality={85}
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='516' height='444'%3E%3Crect width='516' height='444' fill='%23f0f0f0'/%3E%3C/svg%3E"
          />
        </div>
      </div>
      <div className="ServicesCardsWrapper homepageServices">
        <div className="ServicesCardsHeading gradient-background"><h2>{apiData?.content?.our_services_heading?.[lang] || "Our Services"}</h2></div>
        <div className="ServicesCardsContent">
          <ServicesCards
            imageUrl={(apiData?.content?.image_service_1_image?.[lang]) ? (ASSETS_URL + apiData.content.image_service_1_image?.[lang]) : "/images/landing_app.jpg"}
            buttonText={apiData?.content?.service_1_button?.[lang] || "Learn More"}
            link="/services/custom-app-development/"
            heading={apiData?.content?.service_1_heading?.[lang] || "Custom App Development"}
            description={apiData?.content?.service_1_description?.[lang] || "Tailored software, mobile app and web applications turning your ideas into powerful digital solutions"}
          />
          <ServicesCards
            imageUrl={(apiData?.content?.image_service_2_image?.[lang]) ? (ASSETS_URL + apiData.content.image_service_2_image?.[lang]) : "/images/landing_web.jpg"}
            buttonText={apiData?.content?.service_2_button?.[lang] || "Learn More"}
            link="/services/custom-website-development/"
            heading={apiData?.content?.service_2_heading?.[lang] || "Web Development"}
            description={apiData?.content?.service_2_description?.[lang] || "Responsive, SEO-friendly websites - from sleek portfolios to full-featured e-commerce stores - showcase your brand and drive real results."}
          />
          <ServicesCards
            imageUrl={(apiData?.content?.image_service_3_image?.[lang]) ? (ASSETS_URL + apiData.content.image_service_3_image?.[lang]) : "/images/landing_cloud.jpg"}
            buttonText={apiData?.content?.service_3_button?.[lang] || "Learn More"}
            link="/services/cloud-migration-services/"
            heading={apiData?.content?.service_3_heading?.[lang] || "Cloud Migration & Storage"}
            description={apiData?.content?.service_3_description?.[lang] || "Seamlessly migrate to the cloud – boosting performance, security, and scalability."}
          />
          <ServicesCards
            imageUrl={(apiData?.content?.image_service_4_image?.[lang]) ? (ASSETS_URL + apiData.content.image_service_4_image?.[lang]) : "/images/landing_ai.png"}
            buttonText={apiData?.content?.service_4_button?.[lang] || "Learn More"}
            link="/services/ai-powered-solutions/"
            heading={apiData?.content?.service_4_heading?.[lang] || "AI Powered Solutions"}
            description={apiData?.content?.service_4_description?.[lang] || "Leverage AI and machine learning to streamline operations, personalize experiences, and drive data-backed decisions"}
          />
          <ServicesCards
            imageUrl={(apiData?.content?.image_service_5_image?.[lang]) ? (ASSETS_URL + apiData.content.image_service_5_image?.[lang]) : "/images/landing_it.jpg"}
            buttonText={apiData?.content?.service_5_button?.[lang] || "Learn More"}
            link="/services/managed-it-services-consulting/"
            heading={apiData?.content?.service_5_heading?.[lang] || "Managed IT Services & Consulting"}
            description={apiData?.content?.service_5_description?.[lang] || "Enterprise-grade IT management and strategic consulting to optimize operations"}
          />
          <ServicesCards
            imageUrl={(apiData?.content?.image_service_6_image?.[lang]) ? (ASSETS_URL + apiData.content.image_service_6_image?.[lang]) : "/images/landing_digital.png"}
            buttonText={apiData?.content?.service_6_button?.[lang] || "Learn More"}
            link="/services/digital-marketing-services/"
            heading={apiData?.content?.service_6_heading?.[lang] || "Digital Marketing"}
            description={apiData?.content?.service_6_description?.[lang] || "From clicks to customers—grow fast with smart, effective digital marketing"}
          />
        </div>
      </div>

      <div className="whyCHooseUsWrapper homeWhyChooseUS">
        <div className="whyChooseUsHeading gradient-background"><h2>{apiData?.content?.why_choose_us_heading?.[lang] || "Why Choose Us?"}</h2></div>
        <div className="whyChooseUsCardContents">
          <p className="wcu-heading">
            <span className="heading-1 block mb-2">{apiData?.content?.why_choose_us_sub_heading?.[lang] || "Smart IT Solutions with Real Business Benefits"}</span>
            <span className="heading-2 !font-medium">{apiData?.content?.why_choose_us_description?.[lang] || "We don’t just provide services – we deliver results. Here’s what you can expect when you partner with us."}</span>
          </p>
          <HomeWhyChooseUs apiData={apiData} lang={lang} ASSETS_URL={ASSETS_URL} />
        </div>
        {/* <div className="whyChooseUsCardContents items-center justify-center">
          <WhyChooseUs />
        </div> */}
      </div>

      <div className="industriesServeMainWrapper">
        <div className="is-heading gradient-background"><h2>{apiData?.content?.industries_we_serve_heading?.[lang] || "Industries We Serve"}</h2></div>
        <div className="isContent">
          <IndustriesWeServe apiData={industriesData} lang={lang} ASSETS_URL={ASSETS_URL} />
          <div className="buttons-wrapper">
            <Link href="/resources">{apiData?.content?.industries_we_serve_cta_1?.[lang] || "See Case Studies"}</Link>
            <Link href="/services#how-it-works">{apiData?.content?.industries_we_serve_cta_2?.[lang] || "Explore How It Works"}</Link>
          </div>
        </div>
      </div>

      <div className="StillThinkingMainWrapper">
        <div className="st-heading gradient-background"><h2>{apiData?.content?.still_thinking_heading?.[lang] || "Still Thinking?"}</h2></div>
        <div className="stContent">
          <p className="heading-1 mb-4 lg:text-start text-center">{apiData?.content?.still_thinking_sub_heading?.[lang] || "No problem! Explore our"}<Link href="/demo" className="link-text"> {apiData?.content?.still_thinking_sub_heading_link?.[lang] || "Interactive Demo"}</Link></p>
          <p className="content !font-medium lg:text-start text-center">
            {apiData?.content?.still_thinking_description?.[lang] || "Dive into real scenarios and see firsthand how our IT solutions work for your business. Whether you're testing cloud integration, exploring security features, or just curious, it's an easy and fun way to get familiar with what we offer—no commitment, just exploration."}
          </p>
          <div className="buttons-wrapper">
            <Link href="/demo">{apiData?.content?.still_thinking_cta?.[lang] || "Try the Demo"}</Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}