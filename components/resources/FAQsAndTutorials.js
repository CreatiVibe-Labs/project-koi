"use client";

import React, { useState, useEffect, useRef } from "react";
import { getFAQsData } from "@/constant/ContentApi";

const FAQsAndTutorials = ({ faqsData, lang, resources, ASSETS_URL }) => {
  const [faqFinalData, setFaqFinalData] = useState(
    faqsData && faqsData.length > 0 ? faqsData : []
  );

  const [search, setSearch] = useState("");

  // Auto-search as user types (debounced). Clearing input restores all.
  useEffect(() => {
    const term = search.trim();
    // If empty, reset immediately
    if (term === "") {
      setFaqFinalData(faqsData || []);
      setOpenCategory(null);
      setOpenQuestion({});
      return;
    }

    const timer = setTimeout(async () => {
      const apiData = await getFAQsData(term);
      setFaqFinalData(apiData || []);
      setOpenCategory(null);
      setOpenQuestion({});
    }, 350); // debounce

    return () => clearTimeout(timer);
  }, [search, faqsData]);

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

  const hasTutorial1 =
    Object.values(resources.content.tutorial_1_text || {}).some(Boolean) &&
    Object.values(resources.content.video_tutorial_1_video || {}).some(Boolean);

  const hasTutorial2 =
    Object.values(resources.content.tutorial_2_text || {}).some(Boolean) &&
    Object.values(resources.content.video_tutorial_2_video || {}).some(Boolean);

  const hasTutorial3 =
    Object.values(resources.content.tutorial_3_text || {}).some(Boolean) &&
    Object.values(resources.content.video_tutorial_3_video || {}).some(Boolean);

  const hasTutorial4 =
    Object.values(resources.content.tutorial_4_text || {}).some(Boolean) &&
    Object.values(resources.content.video_tutorial_4_video || {}).some(Boolean);

  // Build slider items (only one displayed at a time)
  const tutorials = [
    hasTutorial1 && {
      id: 1,
      src:
        ASSETS_URL +
        (resources.content.video_tutorial_1_video[lang] ||
          resources.content.video_tutorial_1_video["en"]),
      title:
        resources.content.tutorial_1_text[lang] ||
        resources.content.tutorial_1_text["en"] || 'abc',
    },
    hasTutorial2 && {
      id: 2,
      src:
        ASSETS_URL +
        (resources.content.video_tutorial_2_video[lang] ||
          resources.content.video_tutorial_2_video["en"]),
      title:
        resources.content.tutorial_2_text[lang] ||
        resources.content.tutorial_2_text["en"] || 'abc',
    },
    hasTutorial3 && {
      id: 3,
      src:
        ASSETS_URL +
        (resources.content.video_tutorial_3_video[lang] ||
          resources.content.video_tutorial_3_video["en"]),
      title:
        resources.content.tutorial_3_text[lang] ||
        resources.content.tutorial_3_text["en"] || 'abc',
    },
    hasTutorial4 && {
      id: 4,
      src:
        ASSETS_URL +
        (resources.content.video_tutorial_4_video[lang] ||
          resources.content.video_tutorial_4_video["en"]),
      title:
        resources.content.tutorial_4_text[lang] ||
        resources.content.tutorial_4_text["en"] || 'abc',
    },
  ].filter(Boolean);

  const [current, setCurrent] = useState(0);
  const progressRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // NEW: swipe state for the video container
  const swipeRef = useRef({ active: false, startX: 0 });

  // Ensure current stays in bounds if tutorials change
  useEffect(() => {
    setCurrent((c) => {
      if (tutorials.length === 0) return 0;
      return Math.min(Math.max(0, c), tutorials.length - 1);
    });
  }, [/* tutorials length change */ tutorials.length]);

  // non-looping navigation (like News & Articles)
  const canPrev = current > 0;
  const canNext = current < tutorials.length - 1;

  const goPrev = () => {
    if (!canPrev) return;
    setCurrent((p) => Math.max(0, p - 1));
  };
  const goNext = () => {
    if (!canNext) return;
    setCurrent((p) => Math.min(tutorials.length - 1, p + 1));
  };

  // Handle click/drag on progress bar
  const setIndexFromClientX = (clientX) => {
    if (!progressRef.current || tutorials.length === 0) return;
    const rect = progressRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const ratio = rect.width ? x / rect.width : 0;
    const newIndex = Math.min(
      tutorials.length - 1,
      Math.floor(ratio * tutorials.length)
    );
    setCurrent(newIndex);
  };

  const onProgressPointerDown = (e) => {
    if (!progressRef.current) return;
    setIsDragging(true);
    progressRef.current.setPointerCapture?.(e.pointerId);
    setIndexFromClientX(e.clientX);
  };

  const onProgressPointerMove = (e) => {
    if (!isDragging) return;
    setIndexFromClientX(e.clientX);
  };

  const onProgressPointerUp = (e) => {
    setIsDragging(false);
    progressRef.current?.releasePointerCapture?.(e.pointerId);
  };

  // NEW: swipe handlers (like Articles)
  const onSwipeDown = (e) => {
    swipeRef.current.active = true;
    swipeRef.current.startX = e.clientX;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onSwipeMove = (e) => {
    if (!swipeRef.current.active) return;
    const dx = e.clientX - swipeRef.current.startX;
    const threshold = 45; // pixels
    if (dx <= -threshold) {
      swipeRef.current.active = false;
      goNext();
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } else if (dx >= threshold) {
      swipeRef.current.active = false;
      goPrev();
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    }
  };

  const onSwipeUp = (e) => {
    swipeRef.current.active = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  // Keyboard arrows support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);  
    return () => window.removeEventListener("keydown", onKey);
  }, [canPrev, canNext]);

  return (
    <>
    <div className="relative w-full py-[15px] px-[18px] bg-none bg-cover bg-center flex items-center justify-start  mb-6 gradient-background rounded-xl ">
<h1 className="text-3xl xs:text-xl xxs:text-lg md:text-3xl font-bold text-[#C3F8D9]  ">
              {resources.content.faqs_heading[lang] || "FAQs & Tutorials"}
            </h1>
    </div>
    <section className="relative rounded-[16px] bg-none backdrop-blur-[15px] p-3 xxs:p-3 md:p-4 border border-white/40">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
        {/* LEFT SECTION */}
        <div className="w-full md:w-[67%] space-y-5 md:space-y-6">
          {/* Header */}
          <div>
            

            {/* Search input: live filtering onChange; clear to reset */}
            <div className="w-full">
              <div className="relative w-full">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  type="text"
                  placeholder={resources.content.search[lang] || "Search"}
                  className="w-full pl-10 pr-12 py-3 border border-white/40 rounded-full focus:outline-none bg-transparent text-white placeholder:text-white/40"
                />
                {/* Decorative search icon (no click) */}
                <span className="absolute inset-y-0 left-3 flex items-center text-white/70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m1.1-4.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Accordion FAQ Section */}
          <div className="border border-b-0 border-white/40">
            {faqFinalData.length > 0 &&
              faqFinalData.map((faqData, faqIndex) => {
                const isActiveCat = openCategory === faqIndex;
                const panelId = `category-panel-${faqIndex}`;

                return (
                  <div
                    key={faqIndex}
                    className={`border-b border-white/40 transition-colors ${
                      isActiveCat ? "bg-white/5" : ""
                    }`}
                  >
                    <button
                      onClick={() => toggleCategory(faqIndex)}
                      aria-expanded={isActiveCat}
                      aria-controls={panelId}
                      className="cursor-pointer w-full flex justify-between items-center py-4 xs:py-3 xxs:py-2.5 px-5 text-left"
                    >
                      <h2
                        className={`text-[22px] xs:text-[20px] xxs:text-[18px] font-bold leading-tight ${
                          isActiveCat ? "text-[#39FF14]" : "text-white"
                        }`}
                      >
                        {faqData[`name_${lang}`]}
                      </h2>
                    </button>

                    {/* Questions List */}
                    {isActiveCat && (
                      <div id={panelId}>
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
                );
              })}
          </div>
        </div>

        {/* RIGHT SECTION — single card with slider */}
        <div className="w-full  md:w-[33%]   ">
          {tutorials.length > 0 && (
            <div className="space-y-3 md:space-y-4">
              {console.log({tutorials})}
              {/* Video container with swipe */}
              <div
                className="border border-white/30 backdrop-blur-[10px] p-3 md:p-4 rounded-2xl select-none touch-pan-y cursor-grab active:cursor-grabbing"
                onPointerDown={onSwipeDown}
                onPointerMove={onSwipeMove}
                onPointerUp={onSwipeUp}
              >
                <video
                  key={tutorials[current].id}
                  src={tutorials[current].src}
                  title={tutorials[current].title}
                  className="rounded-lg mx-auto w-full h-auto"
                  controls
                  autoPlay={false}
                  loop={false}
                  muted={false}
                />
                <h3 className="text-lg xs:text-base xxs:text-sm font-semibold text-white mt-3 text-left leading-[1.4]">
                  {tutorials[current].title}
                </h3>
              </div>

              {/* Slider below the container — green pill like Articles */}
              <div className="mt-6 flex items-center gap-6 select-none ">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous video"
                  aria-disabled={!canPrev}
                  className={`pl-3 rounded-md transition-colors  ${
                    canPrev ? "text-[#64F0C4] cursor-pointer" : "text-white/30 cursor-default"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 11"
                    className="w-[8px] h-[14px] md:w-[8px] md:h-[14px] lg:w-[8px] lg:h-[14px]" fill="none" stroke="currentColor"
                    strokeWidth="" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 10.5L0.5 5.5L4.5 0.5" />
                  </svg>
                </button>

                {/* Track */}
                <div
                  ref={progressRef}
                  role="slider"
                  aria-label="Video slider"
                  aria-valuemin={tutorials.length ? 1 : 0}
                  aria-valuemax={tutorials.length}
                  aria-valuenow={current + 1}
                  tabIndex={0}
                  onPointerDown={onProgressPointerDown}
                  onPointerMove={onProgressPointerMove}
                  onPointerUp={onProgressPointerUp}
                  onClick={(e) => setIndexFromClientX(e.clientX)}
                  className={`relative flex-1 h-[10px] rounded-full bg-white/15 backdrop-blur-sm overflow-hidden  ${
                    isDragging ? "cursor-grabbing" : "cursor-grab"
                  }`}
                >
                  {/* Moving green pill (one segment wide) */}
                  <div
                    className="absolute top-0 bottom-0 rounded-full bg-[#64F0C4] shadow-[0_0_0_1px_rgba(0,0,0,.05)_inset] transition-[left] duration-200"
                    style={{
                      width: `${100 / tutorials.length}%`,
                      left: `${(100 / tutorials.length) * current}%`,
                    }}
                  />
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next video"
                  aria-disabled={!canNext}
                  className={`pr-3 rounded-md transition-colors  ${
                    canNext ? "text-[#64F0C4] cursor-pointer" : "text-white/30 cursor-default"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 11"
                    className="w-[8px] h-[14px] md:w-[8px] md:h-[14px]" fill="none" stroke="currentColor"
                    strokeWidth="" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M0.5 0.5L4.5 5.5L0.5 10.5" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default FAQsAndTutorials;
