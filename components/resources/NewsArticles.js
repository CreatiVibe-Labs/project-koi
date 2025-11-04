"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NewsArticles = ({ blogData, lang, resources }) => {
  const [articlesData] = useState(blogData?.data || []);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Desktop default visible slides
  const visibleSlides = 3;

  // Detect if viewport is md and above to keep desktop behavior unchanged
  const [isMdUp, setIsMdUp] = useState(false);
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => setIsMdUp(e.matches);
    setIsMdUp(mql.matches);
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  // Keep currentSlide in sync with scroll position on mobile (xs/xxs)
  useEffect(() => {
    const el = trackRef.current;
    if (!el || isMdUp) return;
    const onScroll = () => {
      const firstSlide = slideRefs.current[0];
      const slideW = firstSlide ? firstSlide.clientWidth : el.clientWidth;
      const nextIndex = Math.round(el.scrollLeft / (slideW || 1));
      // Bound within range
      const clamped = Math.max(
        0,
        Math.min(nextIndex, Math.max(0, articlesData.length - 1))
      );
      setCurrentSlide(clamped);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [isMdUp, articlesData.length]);

  const scrollToIndexMobile = (index) => {
    const el = trackRef.current;
    const target = slideRefs.current[index];
    if (!el || !target) return;
    target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const nextSlide = () => {
    if (!articlesData.length) return;
    if (isMdUp) {
      setCurrentSlide((prev) => (prev + 1) % articlesData.length);
    } else {
      const next = Math.min(
        currentSlide + 1,
        Math.max(0, articlesData.length - 1)
      );
      scrollToIndexMobile(next);
    }
  };

  const prevSlide = () => {
    if (!articlesData.length) return;
    if (isMdUp) {
      setCurrentSlide(
        (prev) => (prev - 1 + articlesData.length) % articlesData.length
      );
    } else {
      const prev = Math.max(currentSlide - 1, 0);
      scrollToIndexMobile(prev);
    }
  };

  return (
    <section className="relative bg-none rounded-2xl border border-white/40 px-3 xxs:px-3 xs:px-4 md:px-22 py-6 xs:py-7 md:py-8 shadow-lg backdrop-blur-[15px]">
      {/* Header */}
      <div className="flex items-center justify-start mb-5 xs:mb-6 md:mb-8">
        <h2 className="text-xl xxs:text-2xl xs:text-3xl md:text-3xl font-bold text-[#C3F8D9]">
          { resources.content.news_heading[lang] || "News & Articles"}
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="flex absolute left-2 xs:left-3 md:-left-17 top-1/2 -translate-y-1/2 items-center justify-center z-10"
        >
          <Image
            src="/resources/Vector.png"
            alt="Previous Slide"
            width={46}
            height={96}
            className="opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
          />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="flex absolute right-2 xs:right-3 md:-right-17 top-1/2 -translate-y-1/2 items-center justify-center z-10"
        >
          <Image
            src="/resources/Vector-2.png"
            alt="Next Slide"
            width={46}
            height={96}
            className="opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
          />
        </button>

        {/* Slider */}
        <div
          ref={trackRef}
          className="relative overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none no-scrollbar overscroll-x-contain scroll-smooth"
        >
          <div
            className="flex md:transition-transform md:duration-500 md:ease-in-out"
            style={
              isMdUp
                ? { transform: `translateX(-${currentSlide * 100}%)` }
                : undefined
            }
          >
            {articlesData.map((article, index) => (
              <div
                key={article.id}
                ref={(el) => (slideRefs.current[index] = el)}
                className="flex-shrink-0 basis-full md:basis-auto min-w-full md:min-w-0 px-0 md:px-2 snap-start w-full md:w-1/2 lg:w-1/3 flex justify-center"
              >
                <div className="bg-none border border-white/40 rounded-[14px] shadow-md backdrop-blur-[15px] w-full md:w-[320px] lg:w-[340px] h-auto md:h-[460px] lg:h-[470px] flex flex-col p-1.5">
                  {/* Image */}
                  <div className="relative w-full h-40 xxs:h-44 xs:h-48 md:h-[62%] lg:h-[65%] mb-2 xs:mb-3 rounded-[7px] overflow-hidden">
                    <Image
                      src={article.featured_image || article.image}
                      alt={article[`title_${lang}`] || article.title_en}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between h-auto md:h-[38%] lg:h-[35%] gap-1 px-2.5 xs:px-2">
                    <h3 className="text-[13px] xxs:text-[14px] xs:text-[15px] md:text-[16px] lg:text-[17px] font-bold text-white leading-tight line-clamp-2">
                      {article[`title_${lang}`] || article.title_en}
                    </h3>
                    <p className="text-[12px] xxs:text-[12.5px] xs:text-[13px]  md:text-[14px] lg:text-[15px] text-white font-medium leading-relaxed line-clamp-2">
                      {article[`content_${lang}`] || article.content_en}
                    </p>

                    <Link
                      href={`/resources/${article.slug || ""}?lang=${encodeURIComponent(lang || "en")}`}
                      className="w-full mt-2 xs:mt-2.5 py-1.5 xs:py-2 text-[#98C1A9] text-[14px] xxs:text-[15px] xs:text-[16px] md:text-[18px] lg:text-[20px] flex items-start gap-2 group"
                    >
                      <span>Learn More</span>
                      <Image
                        src="/resources/button-arrow.png"
                        alt="→"
                        width={24}
                        height={24}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="hidden md:flex justify-center mt-6 md:mt-8 space-x-2">
        {articlesData
          .slice(0, articlesData.length - visibleSlides + 1)
          .map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#C3F8D9] w-6" : "bg-white/30"
              }`}
            />
          ))}
      </div>
    </section>
  );
};

export default NewsArticles;
