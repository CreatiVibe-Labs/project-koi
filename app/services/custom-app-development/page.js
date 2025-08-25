import Breadcrumb from '@/components/Breadcrumb';
import AppFeatureHigh from '@/components/sliders/AppFeatureHigh';
import SideBar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Custom App Development - Aerialink Inc",
    description: "Custom App Development - Aerialink Inc",
};

export default function CustomAppDevelopment() {
    return (
        <div>
            {/* <Breadcrumb /> */}
            <div className='servicePageWrapper singleSerivce'>
                <div className='sideBarWrapper'>
                    <SideBar />
                </div>
                <div className='serviceContentWrapper'>
                    {/* <div className='bannerImage'>
                        <Image src="/images/custom-app-development.png" width={6000} height={6000} alt="Logo" />
                    </div> */}
                    <div className="industriesServeMainWrapper md:mt0 !mt-2">
                        <div className="is-heading gradient-background"><h3>Tailored Solutions That Work the Way You Do</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <p className='!font-medium'>
                                    From ideas to deployment, we design and build high-performance web, mobile,
                                    and desktop applications that fit your business—no bloat, no guesswork.
                                    Whether you’re automating workflows, launching a customer-facing app, or
                                    modernizing legacy systems, we align technology with your vision to deliver real
                                    results.
                                </p>
                                {/* <Image src="/images/app-dev-image2.jpg" width={6000} height={6000} alt="banner image"/> */}
                                <video className='mt-4' width="100%" height="240" loop muted autoPlay preload="none">
                                    <source src="/videos/subpage_app_custom.mp4" type="video/mp4" />
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
                        <div className="is-heading gradient-background"><h3>Feature Highlights</h3></div>
                        <div className="mt-5">
                            <AppFeatureHigh />
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper letsBuildToghether">
                        <div className="is-heading gradient-background"><h3>Let’s Build Yours</h3></div>
                        <div className="isContent">
                            <p className="content !font-medium">
                                Whether you need an internal tool, a customer portal, or a full-scale SaaS platform, we’re here to turn your ideas into powerful, working software.
                            </p>
                            <div className="buttons-wrapper">
                                <Link href="/scheduler/custom-app-development">Book a Free Consultation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}