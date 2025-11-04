import Link from 'next/link';
import Section1 from '@/components/resources/Section1';
import FAQsAndTutorials from "@/components/resources/FAQsAndTutorials";
import NewsArticles from '@/components/resources/NewsArticles';
import Quiz from '@/components/resources/Quiz';
import ToolkitsTemplates from '@/components/resources/ToolKitTemplates';
import { getFAQsData, getQuizData, getBlogsData, getToolkit, getResourcesPage } from "@/constant/ContentApi";

import { cookies } from "next/headers";

export const metadata = {
  title: "Resources - Aerialink Inc",
  description: "Resources - Aerialink Inc",
};

export default async function ResourcesPage() {

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value ?? 'en';
  const ASSETS_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
  const apiData = await getFAQsData('');
  const quizData = await getQuizData();
  const blogData = await getBlogsData();
  const toolkit = await getToolkit();
  const resources = await getResourcesPage();

  return (
    <>
      <main className="relative xl:mb-[-50px] lg:mb-[-50px] md:mb-[-30px] sm:mb-[-30px] xs:mb-[-20px]">
        {/* Background blur overlay */} 
        <div className="absolute inset-0 backdrop-blur-[15px] -z-10" />

        {/* Content area — width controlled by parent layout (1300px) */}
        <div className="m-0 mt-6 xs:-mt-10 md:-mt-14 xxl:-mt-16 xxs:px-2 xs:px-4 md:px-6 -py-6 md:py-8 space-y-6 md:space-y-8">
          <Section1 />
          <div id="faqs" className="scroll-mt-10 md:scroll-mt-28 md:mb-20 ">
            <FAQsAndTutorials faqsData={apiData} lang={lang} resources={resources} ASSETS_URL={ASSETS_URL} />
          </div>
          <div id="news" className="scroll-mt-10 md:scroll-mt-28 mt-10">
            <NewsArticles blogData={blogData} lang={lang} resources={resources} />
          </div>
          <div id="quiz" className="scroll-mt-10 md:scroll-mt-8">
            <Quiz quizData={quizData} lang={lang} resources={resources} />
          </div>
          <div id="toolkits" className="scroll-mt-10 md:scroll-mt-8">
            <ToolkitsTemplates toolkit={toolkit} lang={lang} resources={resources} />
          </div>
        </div>
      </main>
    </>
  );
}