import Image from 'next/image';
import Link from 'next/link';
import FeatureHighlights from '@/components/FeatureHighlights';
import FeatureHighlights2 from '@/components/FeatureHighlights2';
import { useEffect, useRef, useState } from 'react';


export default function CloudMigration() {

  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsReverse((prev) => !prev); // Toggle state
    }, 32000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.border-top');
    elements.forEach((el) => {
      if (isReverse) {
        el.classList.add('reverse');
      } else {
        el.classList.remove('reverse');
      }
    });

    const elements2 = document.querySelectorAll('.border-bottom');
    elements2.forEach((el2) => {
      if (isReverse) {
        el2.classList.add('reverse');
      } else {
        el2.classList.remove('reverse');
      }
    });

    const elements3 = document.querySelectorAll('.border-left');
    elements3.forEach((el3) => {
      if (isReverse) {
        el3.classList.add('reverse');
      } else {
        el3.classList.remove('reverse');
      }
    });

    const elements4 = document.querySelectorAll('.border-right');
    elements4.forEach((el4) => {
      if (isReverse) {
        el4.classList.add('reverse');
      } else {
        el4.classList.remove('reverse');
      }
    });

    const elements5 = document.querySelectorAll('.front-face span');
    elements5.forEach((el5) => {
      if (isReverse) {
        el5.classList.add('reverse');
      } else {
        el5.classList.remove('reverse');
      }
    });
  }, [isReverse]);
    return (
        <div>
            <div className="industriesServeMainWrapper webDev">
                <div className="is-heading gradient-background"><h3>Cloud Migration Made Simple, Secure, and Scalable</h3></div>
                <div className="isContent">
                    <div className="itemsWrapper">
                        <p className='!font-medium'>
                            We help businesses move to the cloud with confidence – minimizing disruption while maximizing long-term value.
                        </p>
                        <Image src="/images/cloud-image1.png" width={6000} height={6000} alt="cloud image" />
                    </div>
                </div>
            </div>
            <div className="industriesServeMainWrapper featuresHighlight">
                <div className="is-heading gradient-background"><h3>Key Features</h3></div>
                <div className="mt-5">
                    <div className="itemsWrapper">
                        <FeatureHighlights
                            imageUrl="/icons/downtime.png"
                            title="Zero Downtime Migration"
                            description="Our staged migration approach ensures business continuity throughout the process"
                        />
                        <FeatureHighlights
                            imageUrl="/icons/data-transfer.png"
                            title="Secure Data Transfer & Compliance"
                            description="We adhere to top security protocols and industry compliance standards like GDPR, HIPAA, and SOC 2"
                        />
                        <FeatureHighlights
                            imageUrl="/icons/cloud-platform.png"
                            title="Cloud Platform Flexibility"
                            description="We work across AWS, Azure, Google Cloud, and hybrid environments – you choose, we optimize"
                        />
                        <FeatureHighlights
                            imageUrl="/icons/optimization.png"
                            title="Post-Migration Optimization"
                            description="We fine-tune performance, cost, and security after deployment – not just lift and shift"
                        />
                    </div>
                </div>
            </div>
            <div className="industriesServeMainWrapper timelineWrapper">
                <div className="is-heading gradient-background"><h3>Migration Pathway</h3></div>
                <div className="isContentTimeLine">
                    <div className="itemsWrapper">
                        <div className='migrationPathWay'>
                            <div class="migration-box gradient-background">
                                <div class="top-face">
                                    <div className='border-left w-[2px] absolute top-0 left-0 h-[100%]'></div>
                                    <span>Provide post migration testing, validation,
                                        optimization and ongoing support to maximize the benefits of your cloud
                                        environment</span>
                                    <div className='border-right w-[2px] absolute top-0 right-0 h-[100%]'></div>
                                </div>
                                <div class="front-face">
                                    <div className='border-top h-[2px] absolute top-0 w-[100%]'></div>
                                    <span>Optimization & Ongoing Support</span>
                                    <div className='border-bottom absolute h-[2px] bottom-0 w-[100%]'></div>
                                </div>
                                <div class="left-face"></div>
                                <div class="left-face2"></div>
                                <div class="right-face"></div>
                            </div>
                            <div class="migration-box2 gradient-background">
                                <div class="top-face">
                                    <div className='border-left w-[2px] absolute top-0 left-0 h-[100%]'></div>
                                    <span>Implement migration with minimal disruptions, ensuring data
                                        integrity and security</span>
                                    <div className='border-right w-[2px] absolute top-0 right-0 h-[100%]'></div>
                                </div>
                                <div class="front-face">
                                    <div className='border-top h-[2px] absolute top-0 w-[100%]'></div>
                                    <span>Migration Execution</span>
                                    <div className='border-bottom absolute h-[2px] bottom-0 w-[100%]'></div>

                                </div>
                                <div class="left-face"></div>
                                <div class="left-face2"></div>
                                <div class="right-face"></div>
                            </div>
                            <div class="migration-box3 gradient-background">
                                <div class="top-face">
                                    <div className='border-left w-[2px] absolute top-0 left-0 h-[100%]'></div>
                                    <span>Develop a customized cloud architecture that aligns with
                                        your business goals and compliance requirements</span>
                                    <div className='border-right w-[2px] absolute top-0 right-0 h-[100%]'></div>
                                </div>
                                <div class="front-face">
                                    <div className='border-top h-[2px] absolute top-0 w-[100%]'></div>
                                    <span>Architecture & Strategy</span>
                                    <div className='border-bottom absolute h-[2px] bottom-0 w-[100%]'></div>
                                </div>
                                <div class="left-face"></div>
                                <div class="left-face2"></div>
                                <div class="right-face"></div>
                            </div>
                            <div class="migration-box4 gradient-background">
                                <div class="top-face">
                                    <div className='border-left w-[2px] absolute top-0 left-0 h-[100%]'></div>
                                    <span>Conduct a thorough analysis of your current
                                        infrastructure and define migration objectives</span>
                                    <div className='border-right w-[2px] absolute top-0 right-0 h-[100%]'></div>
                                </div>
                                <div class="front-face">
                                    <div className='border-top h-[2px] absolute top-0 w-[100%]'></div>
                                    <span>Assessment & Planning</span>
                                    <div className='border-bottom absolute h-[2px] bottom-0 w-[100%]'></div>
                                </div>
                                <div class="left-face"></div>
                                <div class="left-face2"></div>
                                <div class="right-face"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="industriesServeMainWrapper featuresHighlight migrationIcons cmsWork">
                <div className="is-heading gradient-background"><h3>Migration Scenarios</h3></div>
                <div className="">
                    <div className="itemsWrapper1 itemsWrapper">
                        <ul>
                            <li className='!font-medium'>Legacy System Modernization</li>
                            <li className='!font-medium'>On-Prem to Cloud Infrastructure</li>
                            <li className='!font-medium'>Cloud-to-Cloud Migrations</li>
                            <li className='!font-medium'>Hybrid Cloud Solutions</li>
                        </ul>
                    </div>
                    <div className="itemsWrapper">
                        <FeatureHighlights2
                            imageUrl="/icons/aws.png"
                            title="AWS"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/azure.png"
                            title="Azure"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/google-cloud.png"
                            title="Google Cloud"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/ibm-cloud.png"
                            title="IBM Cloud"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/vmware.png"
                            title="VMware"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/wheel.png"
                            title="Kubernetes"
                            description=""
                        />
                    </div>
                </div>
            </div>
            <div className="industriesServeMainWrapper letsBuildToghether">
                <div className="isContent">
                    <p className="content !font-medium">
                        Contact us to schedule a consultation and begin your cloud migration journey.
                    </p>
                    <div className="buttons-wrapper">
                        <Link href="#">Request a Compliance Consultation</Link>
                        <Link href="#">Book a Free Cloud Privacy Assessment</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}