"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getFAQsData } from "@/constant/ContentApi";

const FAQsAndTutorials = ({ faqsData, lang }) => {
  const [faqFinalData, setFaqFinalData] = useState(
    faqsData && faqsData.length > 0 ? faqsData : []
  );

  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    const apiData = await getFAQsData(search);
    setFaqFinalData(apiData);
  };

  const faqData = {
    header: {
      title: "FAQs & Tutorials",
      searchPlaceholder: "Search",
      sortOptions: ["Sort by", "Most Popular", "A-Z"],
    },
    sections: [
      {
        title: "General Questions",
        items: [
          {
            question: "What is your return policy?",
            answer:
              "We offer a 30-day money-back guarantee on all purchases. Contact support to initiate a return.",
          },
          {
            question: "What is your return policy?",
            answer:
              "We offer a 30-day money-back guarantee on all purchases. Contact support to initiate a return.",
          },
          {
            question: "What is your return policy?",
            answer:
              "We offer a 30-day money-back guarantee on all purchases. Contact support to initiate a return.",
          },
          {
            question: "Do you offer customer support?",
            answer:
              "Yes! Our support team is available 24/7 via email and live chat.",
          },
        ],
      },
      {
        title: "Billing & Payments",
        items: [
          {
            question: "Which payment methods are accepted?",
            answer: "We accept Visa, MasterCard, PayPal, and bank transfers.",
          },
          {
            question: "Can I get an invoice for my purchase?",
            answer:
              "Absolutely. Invoices are automatically emailed after checkout.",
          },
        ],
      },
      {
        title: "Technical",
        items: [
          {
            question: "Is my data secure?",
            answer:
              "Yes, all data is encrypted and stored securely according to GDPR standards.",
          },
          {
            question: "Do you offer API integration?",
            answer: "Yes, our API allows full integration with your systems.",
          },
        ],
      },
      {
        title: "Account",
        items: [
          {
            question: "How can I reset my password?",
            answer:
              "Click 'Forgot Password' on the login page and follow the instructions.",
          },
          {
            question: "Can I delete my account?",
            answer:
              "Yes, contact our support team to permanently delete your account.",
          },
        ],
      },
    ],
    imageSection: {
      images: [
        {
          id: 1,
          imageUrl: "/resources/fram-image.png",
          title: "Written step-by-step guides",
          width: 399,
          height: 208,
        },
        {
          id: 2,
          imageUrl: "/resources/fram-image.png",
          title: "Video tutorials",
          width: 399,
          height: 208,
        },
        {
          id: 3,
          imageUrl: "/resources/fram-image.png",
          title: "Setup and troubleshooting walkthroughs",
          width: 399,
          height: 208,
        },
      ],
    },
  };

  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState({});

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenQuestion({});
  };

  const toggleQuestion = (categoryIndex, questionIndex) => {
    setOpenQuestion((prev) => ({
      ...prev,
      [`${categoryIndex}-${questionIndex}`]:
        !prev[`${categoryIndex}-${questionIndex}`],
    }));
  };

  return (
    <section className="relative rounded-[16px] bg-none backdrop-blur-[15px] p-3 xxs:p-3 md:p-4 border border-white/40">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
        {/* LEFT SECTION */}
        <div className="w-full md:w-[67%] space-y-5 md:space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-2xl xs:text-xl xxs:text-lg md:text-3xl font-bold text-[#C3F8D9] mb-3">
              {faqData.header.title}
            </h1>

            <div className="flex flex-col xs:flex-col xxs:flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder={faqData.header.searchPlaceholder}
                  className="w-full px-4 py-3 border border-white/30 rounded-lg focus:outline-none bg-transparent text-white placeholder:text-white/60"
                />
              </div>
              <div className="flex items-center gap-1 mt-2 md:mt-0">
                <button onClick={handleSearch} className="cursor-pointer border border-white/40 px-4 py-3 rounded-lg text-white font-medium bg-none backdrop-blur-[15px] ">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Accordion FAQ Section */}
          <div className="border border-b-0 border-white/40">
            {faqFinalData.length > 0 &&
              faqFinalData.map((faqData, faqIndex) => (
                <div key={faqIndex} className="border-b border-white/40">
                  <button
                    onClick={() => toggleCategory(faqIndex)}
                    className="cursor-pointer w-full flex justify-between items-center py-4 xs:py-3 xxs:py-2.5 px-5 text-left transition"
                  >
                    <h2 className="text-[22px] xs:text-[20px] xxs:text-[18px] font-bold text-white">
                      {faqData[`name_${lang}`]}
                    </h2>
                  </button>

                  {/* Questions List */}
                  {openCategory === faqIndex && (
                    <div>
                      {faqData.faqs.map((item, index) => {
                        const isOpen = openQuestion[`${faqIndex}-${index}`];
                        return (
                          <div
                            key={index}
                            className="border-t border-white/40 transition-all"
                          >
                            <button
                              onClick={() => toggleQuestion(faqIndex, index)}
                              className="w-full flex justify-between items-center px-5 py-4 xs:py-3 xxs:py-2 text-left cursor-pointer transition"
                            >
                              <h3 className="text-[18px] xs:text-[16px] xxs:text-[14px] font-semibold text-white leading-[1.6]">
                                {item[`question_${lang}`]}
                              </h3>
                            </button>

                            {/* Answer */}
                            {isOpen && (
                              <p className="text-white/80 text-[14px] xs:text-[13px] xxs:text-[12px] leading-[1.7] px-5 pb-4 mt-[-15px]">
                                {item[`answer_${lang}`]}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-[33%] pt-12 mt-4 md:mt-0">
          <div className="space-y-3 md:space-y-4">
            {faqData.imageSection.images.map((image) => (
              <div
                key={image.id}
                className="border border-white/30 backdrop-blur-[10px] p-3 md:p-4 rounded-2xl"
              >
                <Image
                  src={image.imageUrl}
                  alt={image.title}
                  width={image.width}
                  height={image.height}
                  className="rounded-lg mx-auto w-full h-auto"
                />
                <h3 className="text-lg xs:text-base xxs:text-sm font-semibold text-white mt-3 text-left leading-[1.4]">
                  {image.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsAndTutorials;
