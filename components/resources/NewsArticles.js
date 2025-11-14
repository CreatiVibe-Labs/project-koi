"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NewsArticles = ({ blogData, lang, resources }) => {
  const [articlesData] = useState(blogData?.data || []);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isMdUp, setIsMdUp] = useState(false);
  const [isLgUp, setIsLgUp] = useState(false);
  const trackRef = useRef(null);
  const slideRefs = useRef([]);

  // ✅ Detect breakpoints
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mqlMd = window.matchMedia("(min-width: 768px)");
    const onMdChange = (e) => setIsMdUp(e.matches);
    setIsMdUp(mqlMd.matches);
    mqlMd.addEventListener?.("change", onMdChange);
    return () => mqlMd.removeEventListener?.("change", onMdChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mqlLg = window.matchMedia("(min-width: 1024px)");
    const onLgChange = (e) => setIsLgUp(e.matches);
    setIsLgUp(mqlLg.matches);
    mqlLg.addEventListener?.("change", onLgChange);
    return () => mqlLg.removeEventListener?.("change", onLgChange);
  }, []);

  // ✅ Determine visible slides
  const effectiveVisibleSlides = isLgUp ? 4 : isMdUp ? 2 : 1;

  const maxDesktopIndex = useMemo(
    () => Math.max(0, (articlesData.length || 0) - effectiveVisibleSlides),
    [articlesData.length, effectiveVisibleSlides]
  );

  // ✅ Scroll sync (mobile)
  useEffect(() => {
    const el = trackRef.current;
    if (!el || isMdUp) return;

    const onScroll = () => {
      const firstSlide = slideRefs.current[0];
      const slideW = firstSlide ? firstSlide.clientWidth : el.clientWidth;
      const nextIndex = Math.round(el.scrollLeft / (slideW || 1));
      const clamped = Math.max(
        0,
        Math.min(nextIndex, Math.max(0, articlesData.length - 1))
      );
      setCurrentSlide(clamped);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [isMdUp, articlesData.length]);

  // ✅ Scroll to a slide (mobile)
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

  // ✅ Clamp index if articlesData changes
  useEffect(() => {
    const maxIdx = isMdUp ? maxDesktopIndex : Math.max(0, articlesData.length - 1);
    setCurrentSlide((prev) => Math.min(prev, maxIdx));
  }, [isMdUp, maxDesktopIndex, articlesData.length]);

  // ✅ Navigation
  const nextSlide = () => {
    if (!articlesData.length) return;
    if (isMdUp) {
      setCurrentSlide((prev) => Math.min(prev + 1, maxDesktopIndex));
    } else {
      const next = Math.min(currentSlide + 1, Math.max(0, articlesData.length - 1));
      scrollToIndexMobile(next);
    }
  };

  const prevSlide = () => {
    if (!articlesData.length) return;
    if (isMdUp) {
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    } else {
      const prev = Math.max(currentSlide - 1, 0);
      scrollToIndexMobile(prev);
    }
  };

  const hasPrev = currentSlide > 0;
  const hasNext = isMdUp
    ? currentSlide < maxDesktopIndex
    : currentSlide < Math.max(0, articlesData.length - 1);

  // ✅ FIXED PAGINATION LOGIC
  const pages = useMemo(() => {
    if (!articlesData || articlesData.length === 0) return [];

    const totalItems = articlesData.length;
    const slidesPerPage = effectiveVisibleSlides;
    const totalPages = Math.ceil(totalItems / slidesPerPage);

    // hide pagination if only one page
    if (totalPages <= 1) return [];

    return Array.from({ length: totalPages }, (_, i) => i);
  }, [articlesData, effectiveVisibleSlides]);

  const showPagination = pages.length > 1;

  return (
    <>
      {/* Heading */}
      <div className="relative w-full py-[15px] px-[18px] flex items-center justify-start mb-6 rounded-xl gradient-background">
        <h1 className="text-3xl xs:text-xl xxs:text-lg md:text-3xl font-bold text-[#C3F8D9]">
          {resources.content.news_heading[lang] || "News & Articles"}
        </h1>
      </div>

      {/* Articles Section */}
      <section className="relative rounded-2xl border border-white/40 px-3 xxs:px-3 xs:px-4 md:px-6 py-6 xs:py-7 md:py-8 shadow-lg backdrop-blur-[15px]">
        <div className="relative">
          <div
            ref={trackRef}
            className="relative overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none no-scrollbar scroll-smooth"
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
                <Link
                  href={`/resources/${article.slug || ""}`}
                  key={article.id}
                  ref={(el) => (slideRefs.current[index] = el)}
                  className="flex-shrink-0 basis-full md:basis-auto min-w-full md:min-w-0 px-0 md:px-2 snap-start w-full md:w-1/2 lg:w-1/4 flex justify-center"
                >
                  <div className="border border-white/40 rounded-[14px] shadow-md backdrop-blur-[15px] w-full md:w-[320px] lg:w-[340px] h-full flex justify-between flex-col p-1.5">
                    <div className="relative w-full h-full min-h-40 xxs:min-h-44 xs:min-h-48 md:min-h-[240px] lg:min-h-[250px] mb-2 xs:mb-3 rounded-[7px] overflow-hidden">
                      <Image
                        src={article.featured_image || article.image}
                        alt={article[`title_${lang}`] || article.title_en}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between h-full md:min-h-[132px] lg:min-h-[105px] gap-1 px-2.5 xs:px-2 text-left">
                      <h3 className="text-[13px] xxs:text-[14px] xs:text-[15px] md:text-[16px] lg:text-[17px] font-bold text-white leading-tight line-clamp-2">
                        {article[`title_${lang}`] || article.title_en}
                      </h3>
                      <p className="text-[12px] xxs:text-[12.5px] xs:text-[13px] md:text-[14px] lg:text-[15px] text-white font-medium leading-relaxed line-clamp-2">
                        {article[`content_${lang}`] || article.content_en}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Responsive Ellipsis Pagination */}
        {showPagination && (
          <div className="flex items-center justify-center gap-3 mt-6">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              disabled={!hasPrev}
              aria-label="Previous"
              className={`flex items-center justify-center w-7 h-7 rounded-md transition-all duration-300 cursor-pointer ${
                hasPrev
                  ? "text-[#46D3A7] hover:text-[#5FE8C1]"
                  : "text-[#777] opacity-40 cursor-not-allowed"
              }`}
            >
              <svg
                width="10"
                height="22"
                viewBox="0 0 10 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 0.75L0.942359 10.2115C0.881635 10.2806 0.833239 10.364 0.800154 10.4566C0.767069 10.5492 0.75 10.6491 0.75 10.75C0.75 10.8509 0.767069 10.9508 0.800154 11.0434C0.833239 11.136 0.881635 11.2194 0.942359 11.2885L8.75 20.75"
                  stroke={hasPrev ? "#46D3A7" : "#777"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Page Numbers with Ellipsis */}
            <div className="flex items-center gap-2 text-sm">
              {(() => {
                const totalPages = pages.length;
                const currentPage = currentSlide;
                const visibleCount = isLgUp ? 5 : isMdUp ? 3 : 1;

                const pagination = [];
                const startPage = Math.max(
                  0,
                  Math.min(
                    currentPage - Math.floor(visibleCount / 2),
                    totalPages - visibleCount
                  )
                );
                const endPage = Math.min(totalPages - 1, startPage + visibleCount - 1);

                if (startPage > 0) {
                  pagination.push(0);
                  if (startPage > 1) pagination.push("...");
                }

                for (let i = startPage; i <= endPage; i++) {
                  pagination.push(i);
                }

                if (endPage < totalPages - 1) {
                  if (endPage < totalPages - 2) pagination.push("...");
                  pagination.push(totalPages - 1);
                }

                return pagination.map((p, i) =>
                  p === "..." ? (
                    <span key={`ellipsis-${i}`} className="text-white/70 px-2">
                      ...
                    </span>
                  ) : (
                    <button
                      key={`page-${p}`}
                      onClick={() =>
                        isMdUp ? setCurrentSlide(p) : scrollToIndexMobile(p)
                      }
                      aria-label={`Go to page ${p + 1}`}
                      className={`w-8 h-8 flex items-center justify-center text-sm transition-colors duration-200 cursor-pointer ${
                        currentSlide === p
                          ? "bg-gradient-to-t from-black/10 to-white/10 text-[#46D3A7] font-semibold rounded-md border-[0.5px] border-[#46D3A7]"
                          : "text-white/80 hover:text-[#46D3A7]"
                      }`}
                    >
                      {p + 1}
                    </button>
                  )
                );
              })()}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              disabled={!hasNext}
              aria-label="Next"
              className={`flex items-center justify-center w-7 h-7 rounded-md transition-all duration-300 cursor-pointer ${
                hasNext
                  ? "text-[#46D3A7] hover:text-[#5FE8C1]"
                  : "text-[#777] opacity-40 cursor-not-allowed"
              }`}
            >
              <svg
                width="10"
                height="22"
                viewBox="0 0 10 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 0.75L8.55763 10.2115C8.61837 10.2806 8.66676 10.364 8.69984 10.4566C8.73293 10.5492 8.75 10.6491 8.75 10.75C8.75 10.8509 8.73293 10.9508 8.69984 11.0434C8.66676 11.136 8.61837 11.2194 8.55763 11.2885L0.75 20.75"
                  stroke={hasNext ? "#46D3A7" : "#777"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default NewsArticles;
