import Image from "next/image";
import Link from 'next/link';
import ServicesCards from '@/components/ServicesCards';
import WhyChooseUsCard from '@/components/whyChooseUsCard';
import IndustriesWeServe from "@/components/IndustriesWeServe";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "Homepage - Aerialink Inc",
  description: "Homepage - Aerialink Inc",
};

export default function Home() {
  return (
    <>
      <div className="hero-section homeBanner">
        <div className="content-section border-[1px] border-[#ffffff66] gradient-background">
          <h1>IT Solutions Tailored to Your Business</h1>
          <p className="!font-medium">From day-to-day support to long term strategy, we deliver cost efficient, flexible IT services designed to match your goals and specific way of working</p>
          <div className="buttons-wrapper">
            <Link className="callUs" href="tel:+81788552760">Call us</Link>
            <Link href="/services" className="border-[1px] border-[#39ff14]">Check Services</Link>
            <Link href="/demo">Try Demo</Link>
          </div>
        </div>
        <div className="image-section">
          <Image src='/images/hero-image.png' width={516} height={444} alt="Hero Image"></Image>
        </div>
      </div>
      <div className="ServicesCardsWrapper homepageServices">
        <div className="ServicesCardsHeading gradient-background"><h2>Our Services</h2></div>
        <div className="ServicesCardsContent">
          <ServicesCards
            imageUrl="/images/landing_app.jpg"
            buttonText="Learn More"
            link="/services/custom-app-development/"
            heading="Custom App Development"
            description="Tailored software, mobile app and web applications turning your ideas into powerful digital solutions"
          />
          <ServicesCards
            imageUrl="/images/landing_web.jpg"
            buttonText="Learn More"
            link="/services/custom-website-development/"
            heading="Web Development"
            description="Responsive, SEO-friendly websites - from sleek portfolios to full-featured e-commerce stores - showcase your brand and drive real results."
          />
          <ServicesCards
            imageUrl="/images/landing_cloud.jpg"
            buttonText="Learn More"
            link="/services/cloud-migration-services/"
            heading="Cloud Migration & Storage"
            description="Seamlessly migrate to the cloud – boosting performance, security, and scalability."
          />
          <ServicesCards
            imageUrl="/images/landing_ai.png"
            buttonText="Learn More"
            link="/services/ai-powered-solutions/"
            heading="AI Powered Solutions"
            description="Leverage AI and machine learning to streamline operations, personalize experiences, and drive data-backed decisions"
          />
          <ServicesCards
            imageUrl="/images/landing_it.jpg"
            buttonText="Learn More"
            link="/services/managed-it-services-consulting/"
            heading="Managed IT Services & Consulting"
            description="Enterprise-grade IT management and strategic consulting to optimize operations"
          />
          <ServicesCards
            imageUrl="/images/landing_digital.png"
            buttonText="Learn More"
            link="/services/digital-marketing-services/"
            heading="Digital Marketing"
            description="From clicks to customers—grow fast with smart, effective digital marketing"
          />
        </div>
      </div>

      <div className="whyCHooseUsWrapper homeWhyChooseUS">
        <div className="whyChooseUsHeading gradient-background"><h2>Why Choose Us?</h2></div>
        <div className="whyChooseUsCardContents">
          <p className="wcu-heading">
            <span className="heading-1 block mb-2">Smart IT Solutions with Real Business Benefits</span>
            <span className="heading-2 !font-medium">We don’t just provide services – we deliver results. Here’s what you can expect when you partner with us.</span></p>
          <div className="cardWrappers">
            <WhyChooseUsCard
              imageUrl="/images/landing_performance.jpg"
              link=""
              title="Performance-Focused Solutions"
              tags={[]}
              description="We focus on measurable outcomes – we deliver solutions that drive real business value."
            />
            <WhyChooseUsCard
              imageUrl="/images/landing_expertise.jpg"
              link=""
              title="End-to-End Expertise"
              tags={[]}
              description="We off complete digital solutions – from strategy to launch – so you get everything under one roof."
            />
            <WhyChooseUsCard
              imageUrl="/images/landing_support.jpg"
              link=""
              title="Reliable Support & Partnership"
              tags={[]}
              description="We don’t just delivery projects – we build long-term relationships with proactive support and honest communication."
            />
          </div>
        </div>
        {/* <div className="whyChooseUsCardContents items-center justify-center">
          <WhyChooseUs />
        </div> */}
      </div>

      <div className="industriesServeMainWrapper">
        <div className="is-heading gradient-background"><h2>Industries We Serve</h2></div>
        <div className="isContent">
          <IndustriesWeServe />
          <div className="buttons-wrapper">
            <Link href="/resources">See Case Studies</Link>
            <Link href="/services#how-it-works">Explore How It Works</Link>
          </div>
        </div>
      </div>

      <div className="StillThinkingMainWrapper">
        <div className="st-heading gradient-background"><h2>Still Thinking?</h2></div>
        <div className="stContent">
          <p className="heading-1 mb-4">No problem! Explore our <Link href="/demo" className="link-text">Interactive Demo</Link></p>
          <p className="content !font-medium">
            Dive into real scenarios and see firsthand how our IT solutions work for your business. Whether you're testing cloud integration, exploring security features, or just curious, it's an easy and fun way to get familiar with what we offer—no commitment, just exploration.
          </p>
          <div className="buttons-wrapper">
            <Link href="/demo">Try the Demo</Link>
          </div>
        </div>
      </div>
    </>
  );
}
