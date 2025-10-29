'use client'

import React from "react";
import Image from "next/image";

// JSON Data
const faqData = {
  header: {
    title: "FAQs & Tutorials",
    searchPlaceholder: "Search",
    sortOptions: ["Latest", "Most Popular", "A-Z"]
  },
  sections: [
    {
      title: "General",
      type: "faq",
      items: [
        {
          question: "Q: What is this service about?",
          answer: "This is a sample FAQ section designed to show how frequently asked questions might look on your website."
        },
        {
          question: "Q: How can I sign up?",
          answer: ""
        },
        {
          question: "Q: Is this service free?",
          answer: ""
        },
        {
          question: "Q: How do I reset my password?",
          answer: ""
        }
      ]
    },
    {
      title: "",
      type: "billing",
      items: [
        {
          title: "Billing",
          description: ""
        },
        {
          title: "Technical",
          description: "817 Fill × 90"
        },
        {
          title: "Support",
          description: ""
        }
      ]
    }
  ],
  imageSection: {
    images: [
      {
        id: 1,
        imageUrl: "/resources/fram-image.png",
        title: "Written step-by-step guides",
        width: 399,
        height: 208
      },
      {
        id: 2,
        imageUrl: "/resources/fram-image.png",
        title: "Video tutorials",
        width: 399,
        height: 208
      },
      {
        id: 3,
        imageUrl: "/resources/fram-image.png",
        title: "Setup and troubleshooting walkthroughs",
        width: 399,
        height: 208
      }
    ]
  }
};

const FAQsAndTutorials = () => {
  return (
    <>
      {/* Main Section with backdrop blur */}
      <section className="relative rounded-[16px] bg-none backdrop-blur-[15px] p-5 border border-white/40">
        
        {/* Content Area */}
        <div className="flex gap-6 w-full">
          
          {/* Left Section - FAQs (67% width) */}
          <div className="w-[67%]">
            
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#C3F8D9] mb-6">
                {faqData.header.title}
              </h1>
              
              {/* Search and Sort */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder={faqData.header.searchPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-none text-white"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white">Sort By</span>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-none text-white">
                    {faqData.header.sortOptions.map((option, index) => (
                      <option key={index} className="text-gray-800">{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="border-t border-gray-300"></div>
            </div>

            {/* FAQ Sections */}
            <div className="space-y-8">
              {faqData.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  {/* Section Title */}
                  {section.title && (
                    <h2 className="text-xl font-semibold text-[#C3F8D9] mb-6">
                      {section.title}
                    </h2>
                  )}

                  {/* FAQ Items */}
                  {section.type === "faq" && (
                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {item.question}
                          </h3>
                          {item.answer && (
                            <p className="text-white ml-4 opacity-90">
                              {item.answer}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Billing, Technical, Support Items with individual borders */}
                  {section.type === "billing" && (
                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="border border-white/40 rounded-[16px] p-4 backdrop-blur-[15px]"
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-white">
                              {item.title}
                            </h3>
                            {item.description && (
                              <span className="text-white text-sm opacity-80">
                                {item.description}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Divider between sections except last one */}
                  {sectionIndex < faqData.sections.length - 1 && (
                    <div className="border-t border-gray-300 px-8 py- my-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Images (33% width) */}
          <div className="w-[33%] pt-15">
            
            {/* Image Boxes - Direct Content Display */}
            <div className="space-y-3">
              {faqData.imageSection.images.map((image) => (
                <div key={image.id} className="space-y-3">
                  {/* Image Box - Direct Display with bg-none and backdrop-blur */}
                  <div className="bg-none backdrop-blur-[15px] rounded-[16px] w-full flex items-center justify-center relative p-4 border border-white/40">
                    {/* Actual Image Display with specific dimensions */}
                    <div className="text-center w-full">
                      <Image 
                        src={image.imageUrl} 
                        alt={image.title}
                        width={image.width}
                        height={image.height}
                        className="mx-auto object-cover rounded-lg"
                      />
                      {/* Title displayed below image instead of "Content Display" */}
                      <h3 className="text-lg font-semibold text-white mt-3 text-left">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQsAndTutorials;