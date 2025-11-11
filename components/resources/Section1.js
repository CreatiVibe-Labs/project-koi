"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Section1 = ({lang, resources, ASSETS_URL}) => {

  // Import your JSON data (you can also fetch it or keep it in a separate file)
  const cardsData = {
    cards: [
      {
        id: 4,
        title: resources.content.faqs_text[lang] || "FAQs & Tutorials",
        icon: ASSETS_URL + resources.content.image_faqs_image[lang] || "/resources/questionAwnser1.png",
        textColor: "text-white",
      },
      {
        id: 2,
        title: resources.content.industry_text[lang] || "Industry news",
        icon: ASSETS_URL + resources.content.image_industry_image[lang] || "/resources/news.png",
        textColor: "text-white",
      },
      {
        id: 3,
        title: resources.content.quiz_text[lang] || "Interactive Quiz",
        icon: ASSETS_URL + resources.content.image_quiz_image[lang] || "/resources/quiz.png",
        textColor: "text-white",
      },
      {
        id: 1,
        title: resources.content.toolkits_text[lang] || "Toolkits & Templates",
        icon: ASSETS_URL + resources.content.image_toolkits_image[lang] || "/resources/toolbox-container.png",
        textColor: "text-white",
      },

    ],
  };

  // Default to FAQs active
  const [activeId, setActiveId] = useState("faqs");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionIds = ["toolkits", "news", "quiz", "faqs"];

    // If URL has a hash on load, override default
    const initHash = window.location.hash?.replace("#", "");
    if (initHash && sectionIds.includes(initHash)) {
      setActiveId(initHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveId(id);
          }
        });
      },
      { root: null, rootMargin: "-25% 0px -55% 0px", threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onHashChange = () => {
      const h = window.location.hash?.replace("#", "");
      if (h && sectionIds.includes(h)) setActiveId(h);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
    };
  }, []);
  const hrefMap = {
    "FAQs & Tutorials": "#faqs",
    "Toolkits & Templates": "#toolkits",
    "Industry news": "#news",
    "Interactive Quiz": "#quiz",

  };

  return (
    <section className="rounded-lg mt-4 md:mt-6">
      <div
        className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
      >
        {cardsData.cards.map((card) => {
          const href = hrefMap[card.title] || "#";
          const isActive =
            activeId && href.startsWith("#") && href === `#${activeId}`;

          return (
            <Link
              key={card.id}
              href={href}
              onClick={() => {
                if (href.startsWith("#")) setActiveId(href.replace("#", ""));
              }}
              className="flex items-center justify-start gap-2 xs:gap-3 md:gap-2 px-2 xs:px-3 sm:px-3 md:px-4 py-3 xs:py-4 sm:py-4 md:py-5 backdrop-blur-[15px] rounded-[18px] border border-white/40 cursor-pointer w-full"
            >
              <Image
                className="shrink-0 w-9 h-9 xs:w-10 xs:h-10 md:w-12 md:h-12 lg:w-[54px] lg:h-[54px]"
                src={card.icon}
                alt={card.title}
                width={54}
                height={54}
              />
              <span
                className={`font-bold text-left flex-1 min-w-0 whitespace-nowrap truncate tracking-tight leading-tight ${isActive ? "text-[#39FF14]" : "text-white"
                  } text-sm xs:text-base md:text-xl lg:text-xl`}
              >
                {card.title}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Section1;
