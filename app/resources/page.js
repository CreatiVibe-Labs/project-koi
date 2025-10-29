import Link from 'next/link';
import Section1 from '@/components/resources/Section1';
import FAQsAndTutorials from "@/components/resources/FAQsAndTutorials";


import Section3 from '@/components/resources/Section3';
import Section4 from '@/components/resources/Section4';
import Section5 from '@/components/resources/Section5';

export const metadata = {
  title: "Resources - Aerialink Inc",
  description: "Resources - Aerialink Inc",
};

export default function ResourcesPage() {
    return (
        <>
             <main className="relative">
      {/* Background blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[15px] -z-10" />

      {/* Content area — width controlled by parent layout (1300px) */}
      <div className="px-6 py- space-y-20">
        <Section1 />
        <FAQsAndTutorials />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </main>
        </>
    );
}