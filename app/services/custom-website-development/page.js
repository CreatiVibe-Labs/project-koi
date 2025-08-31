import Breadcrumb from '@/components/Breadcrumb';
import WebCms from '@/components/sliders/WebCms';
import SideBar from '@/components/Sidebar';
import WebTypesWebsite from '@/components/sliders/WebTypesWebsite';
import WebWebsite from '@/components/sliders/WebWebsite';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Custom Website Development - Aerialink Inc",
    description: "Custom Website Development - Aerialink Inc",
};

export default function CustomWebsiteDevelopment() {
    return (
        <div>
            {/* <Breadcrumb /> */}
            <div className='servicePageWrapper'>
                <div className='sideBarWrapper'>
                    <SideBar />
                </div>
                <div className='serviceContentWrapper singleSerivce'>
                    <div className="industriesServeMainWrapper webDev">
                        <div className="is-heading gradient-background"><h3>Custom Websites That Do More Than Look Good</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <p className='!font-medium'>
                                    Your website is more than a digital brochure – it’s your band’s first impression, your
                                    24/7 sales team, and a key driver of trust. We build responsive high-performance
                                    websites that are optimized for search engines and crafted to convert visitors into
                                    customers.
                                </p>
                                <br />
                                <p className='!font-medium'>
                                    Whether you're launching a product, building a brand presence, or scaling your
                                    business online, we deliver web experiences that blend design excellence with
                                    technical precision.
                                </p>
                                {/* <Image src="/images/web-dev-image1.png" width={6000} height={6000} alt="banner image" /> */}
                                <video className='mt-4' width="100%" height="240" loop autoPlay muted preload="none">
                                    <source src="/videos/subpage_web_custom.mp4" type="video/mp4" />
                                    <track
                                        kind="subtitles"
                                        srcLang="en"
                                        label="English"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight">
                        <div className="is-heading gradient-background"><h3>What Sets Our Websites Apart</h3></div>
                        <div className="mt-5">
                            <WebWebsite />
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight">
                        <div className="is-heading gradient-background"><h3>Types of Websites We Build</h3></div>
                        <div className="mt-5">
                            <WebTypesWebsite />
                            
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight cmsWork">
                        <div className="is-heading gradient-background"><h3>CMS & Technology Options</h3></div>
                        <div className="techIcon">
                            <WebCms />
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper letsBuildToghether">
                        <div className="is-heading gradient-background"><h3>Your Project Start Here</h3></div>
                        <div className="isContent">
                            <p className="content !font-medium">
                                Whether you're starting from scratch or rebuilding with purpose, we’ll help you create a site that not only looks great — it performs where it counts.
                            </p>
                            <div className="buttons-wrapper">
                                <Link href="/scheduler/custom-website-development">Get a Free Website Audit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}