import Breadcrumb from '@/components/Breadcrumb';
import FeatureHighlights from '@/components/FeatureHighlights';
import FeatureHighlights2 from '@/components/FeatureHighlights2';
import SideBar from '@/components/Sidebar';
import Platforms from '@/components/sliders/Platforms';
import SliderCards from '@/components/sliders/SliderCards';
import { CalendlyLink } from '@/constant/constants';
import Image from 'next/image';
import Link from 'next/link';
import { getAIPoweredData, getSideBarData } from "@/constant/ContentApi";

import { cookies } from "next/headers";

export const metadata = {
    title: "AI Powered Solutions & Machine Learning - Aerialink Inc",
    description: "AI Powered Solutions & Machine Learning - Aerialink Inc",
};

export default async function AiPoweredSolutions() {

    const cookieStore = await cookies();
    const lang = cookieStore.get("lang")?.value ?? 'en';
    const ASSETS_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
    const apiData = await getAIPoweredData();

    const sideBarData = await getSideBarData();

    const services = [
        {
            imageUrl: "/icons/tensorflow.png",
            title: "TensorFlow",
            description: "",
        },
        {
            imageUrl: "/icons/pytorch.png",
            title: "PyTorch",
            description: "",
        },
        {
            imageUrl: "/icons/scikit.png",
            title: "Scikit Learn",
            description: "",
        },
        {
            imageUrl: "/icons/opencv.png",
            title: "OpenCV",
            description: "",
        },
        {
            imageUrl: "/icons/face.png",
            title: "Hugging Face",
            description: "",
        },
        {
            imageUrl: "/icons/aws.png",
            title: "AWS SageMaker",
            description: "",
        },
        {
            imageUrl: "/icons/vertex.png",
            title: "Google Vertex AI",
            description: "",
        },
        {
            imageUrl: "/icons/azure.png",
            title: "Microsoft Azure AI",
            description: "",
        }
    ];

    const keyFeatures1 = [
        {
            imageUrl: "",
            title: apiData?.content?.custom_machine_learning_heading?.[lang] || "Custom Machine Learning Models",
            description: apiData?.content?.custom_machine_learning_description?.[lang] || "We build and train machine learning models on your data to deliver tailored predictions and classifications.",
        },
        {
            imageUrl: "",
            title: apiData?.content?.natural_language_heading?.[lang] || "Natural Language Processing (NLP)",
            description: apiData?.content?.natural_language_description?.[lang] || "Extract meaning from conversations, documents, and user inputs. We design chatbots, smart search, and content analysis tools that understand human language.",
        },
        {
            imageUrl: "",
            title: apiData?.content?.computer_vision_heading?.[lang] || "Computer Vision",
            description: apiData?.content?.computer_vision_description?.[lang] || "From quality checks on assembly lines to image-based authentication, we use deep learning to help machines “see” and act in real-world scenarios.",
        },
        {
            imageUrl: "",
            title: apiData?.content?.AI_powered_automation_heading?.[lang] || "AI-Powered Automation",
            description: apiData?.content?.AI_powered_automation_description?.[lang] || "We create intelligent systems that act on real-time data — automating repetitive workflows, surfacing insights, and reducing human error.",
        }
    ];

    const keyFeatures2 = [
        {
            imageUrl: "",
            title: apiData?.content?.retail_and_ecommerce_heading?.[lang] || "Retail & E-Commerce",
            description: apiData?.content?.retail_and_ecommerce_description?.[lang] || "Demand forecasting, dynamic pricing, personalized recommendations, and inventory predictions.",
        },
        {
            imageUrl: "",
            title: apiData?.content?.healthcare_heading?.[lang] || "Healthcare",
            description: apiData?.content?.healthcare_description?.[lang] || "Predictive diagnosis, automated chart review, medical record extraction.",
        },
        {
            imageUrl: "",
            title: apiData?.content?.finance_heading?.[lang] || "Finance",
            description: apiData?.content?.finance_description?.[lang] || "Fraud detection, real-time credit scoring, NLP-powered compliance scanning and sentiment analysis",
        },
        {
            imageUrl: "",
            title: apiData?.content?.logistics_heading?.[lang] || "Manufacturing & Logistics",
            description: apiData?.content?.logistics_description?.[lang] || "Defects detection, AI assisted route optimization, inventory management.",
        }
    ];

    return (
        <div>
            {/* <Breadcrumb /> */}
            <div className='servicePageWrapper'>
                <div className='sideBarWrapper'>
                    <SideBar lang={lang} sideBarData={sideBarData} />
                </div>
                <div className='serviceContentWrapper singleSerivce aiPoweredSolutions'>
                    <div className="industriesServeMainWrapper webDev">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.possible_with_AI_heading?.[lang] || "Reimagine What’s Possible with AI"}</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <p className='!font-medium'>
                                    {apiData?.content?.possible_with_AI_description_1?.[lang] || "From automation to advanced insights, we design custom AI solutions that solve real-world problems — powered by machine learning, computer vision, and natural language understanding."}
                                </p>
                                <br />
                                <p className='!font-medium'>
                                    {apiData?.content?.possible_with_AI_description_2?.[lang] || "We help you unlock the true value of your data with AI solutions that go beyond automation — delivering real-time insights, scalable decision-making, and intelligent tools that grow with your business. From predictive analytics to natural language processing, we custom-build AI that solves your specific challenges"}
                                </p>
                                {/* <Image src="/images/web-dev-image1.png" width={6000} height={6000}/> */}
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight featuresHighlight2">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.feature_highlights_heading?.[lang] || "Feature Hightlights"}</h3></div>
                        <div className="mt-5">
                            <p className='subHeadings'>{apiData?.content?.what_we_deliver_heading?.[lang] || "What We Deliver"}</p>
                            <SliderCards
                                slides={keyFeatures1}
                            />
                            <p className='subHeadings pt-5'>{apiData?.content?.industry_specific_use_cases_heading?.[lang] || "Industry-Specific Use Cases"}</p>
                            <div className='industry-Specific'>
                                <SliderCards
                                    slides={keyFeatures2}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper ai-cta letsBuildToghether featuresHighlight cmsWork">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.AI_to_your_business_heading?.[lang] || "Bring AI to Your Business — On Your Terms"}</h3></div>
                        <div className="isContent">
                            <p className="content !font-medium">
                                {apiData?.content?.AI_to_your_business_description?.[lang] || "Whether you’re just starting with AI or ready to scale a solution, we design around your data, goals, and industry."}
                            </p>
                            <Platforms
                                features={services}
                            />
                            <div className="buttons-wrapper">
                                <Link href={CalendlyLink}>{apiData?.content?.AI_to_your_business_button?.[lang] || "Talk to an AI Consultant"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}