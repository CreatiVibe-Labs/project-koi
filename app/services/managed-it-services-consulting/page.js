import Breadcrumb from '@/components/Breadcrumb';
import FeatureHighlights from '@/components/FeatureHighlights';
import ReviewSlider from '@/components/ReviewSlider';
import SideBar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';

export default function managedItServices() {
    const quotes = [
        {
            name: "Ayesha Khan",
            review: "Working here has been an incredible journey — the team is supportive, and every project pushes me to grow.",
            designation: "Frontend Developer"
        },
        {
            name: "Usman Raza",
            review: "I love how we prioritize creativity and collaboration. It\'s more than a job — it feels like a shared mission.",
            designation: " UX Designer",
        },
        {
            name: "Fatima Ali",
            review: "Every day brings a new challenge, and that\'s exactly what keeps me motivated.The energy here is unmatched.",
            designation: "Project Manager",

        }
    ];
    return (
        <div>
            {/* <Breadcrumb /> */}
            <div className='servicePageWrapper'>
                <div className='sideBarWrapper'>
                    <SideBar />
                </div>
                <div className='serviceContentWrapper'>
                    <div className="industriesServeMainWrapper webDev">
                        <div className="is-heading gradient-background"><h3>Reliable IT, Strategic Insight — Without the Overhead</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <p className='!font-medium'>
                                    We help businesses stay focused on what they do best by taking care of their
                                    technology — from hands-on support to long-term planning. Whether you need a
                                    full-service IT partner or expert guidance for a specific challenge, we’re here to keep
                                    your systems secure, efficient, and future-ready.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper">
                        <div className="is-heading gradient-background "><h3>Service Highlight</h3></div>
                        <div className="mt-5">
                            <div className="itemsWrapper manageIT ServiceHighlight">
                                <div className='duoColumns gap-3'>
                                    <div className='duoColumn1 isContent border rounded-xl shadow-sm p-3'>
                                        <div className='contentWrapper'>
                                            <div className='border rounded-xl shadow-sm p-3 font-bold mb-2.5'><h3>Stress-Free IT Support for Small and Midsize Teams</h3></div>
                                            <div className='p-3'>
                                                <h4 className='font-bold'>Key Features:</h4>
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title="24/7 Monitoring & Support"
                                                    description="Our team proactively monitors your infrastructure to catch issues before they cause downtime. When something breaks, we’re just a call or clickaway"
                                                />
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title="Endpoint Management"
                                                    description="We manage updates, patches, antivirus, and backups across every user device — ensuring your workforce stays protected and productive."
                                                />
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title="Server & Network Administration"
                                                    description="From cloud servers to office networks, we ensure your systems run fast, stay secure, and scale smoothly as your business grows."
                                                />
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title="Helpdesk Services"
                                                    description="Get fast, reliable support from real technicians — no phone trees or long waits. We resolve most user issues in minutes, not hours."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lineglow"></div>
                                    <div className='duoColumn2 isContent border rounded-xl shadow-sm p-3'>
                                        <div className='contentWrapper'>
                                            <div className='border rounded-xl shadow-sm p-3 font-bold mb-2.5'><h3>Expert Guidance for Smarter IT Decisions
                                            </h3></div>
                                            <div className='p-3'>
                                                <h4 className='font-bold'>Key Features:</h4>
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title="Technology Strategy & Planning"
                                                    description="We align your IT infrastructure with your business goals — helping you plan smarter, budget better, and avoid tech debt."
                                                />
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title="Infrastructure Audits"
                                                    description="Get a detailed view of what's working, what's not, and how to strengthen your systems for reliability and compliance."
                                                />
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title="Vendor & Tool Selection"
                                                    description="From software platforms to cloud providers, we help you choose solutions that fit your business — and avoid the ones that don’t."
                                                />
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title="Cybersecurity Advisory"
                                                    description="Stay ahead of risks with expert assessments, compliance support (like HIPAA or ISO 27001), and actionable risk mitigation strategies."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="whyCHooseUsWrapper coreValues">
                        <div className="whyChooseUsHeading gradient-background"><h2>What Our Clients Say</h2></div>
                        <div className="whyChooseUsCardContents">
                            <div className="cardWrappers">
                                <ReviewSlider
                                    reviews={quotes}
                                    color={'text-[#FF5F1F]'}
                                />
                                {/* <div className="review-container ">
                                    <div key={0} className="review  text-white">
                                        <p className="text-2xl  mb-2">
                                            <span className="italic digital7 text-[#FF5F1F]">Working here has been an incredible journey — the team is supportive, and every project pushes me to grow.</span>
                                        </p>
                                        <p className="text-2xl mt-2 digital7 text-right italic mr-2 text-[#FF5F1F]">Ayesha Khan</p>
                                        <p className="text-lg digital7 text-right italic mr-2 text-[#FF5F1F]">Frontend Developer</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper letsBuildToghether">
                        <div className="is-heading gradient-background">
                            <h4 className='font-bold text-[26px]'>Flexible Plans That Fit Your Business — Let’s Make IT Your Advantage</h4>
                        </div>
                        <div className="isContent">
                            <p className="content !font-medium">
                                Choose a plan or customize your own. Pay only for what you need
                            </p>
                            <div className="buttons-wrapper">
                                <Link href="#">Talk To a Consultant</Link>
                                <Link href="#">Request a Free Assessment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}