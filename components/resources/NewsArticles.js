"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NewsArticles = ({ blogData, lang, resources }) => {
  const [articlesData] = useState(blogData?.data || []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const progressBarRef = useRef(null);

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

  // Compute arrow availability
  const maxDesktopIndex = useMemo(
    () => Math.max(0, (articlesData?.length || 0) - visibleSlides),
    [articlesData.length]
  );
  const hasPrev = currentSlide > 0;
  const hasNext = isMdUp
    ? currentSlide < maxDesktopIndex
    : currentSlide < Math.max(0, articlesData.length - 1);

  // Clamp current slide when viewport or data length changes
  useEffect(() => {
    const maxIdx = isMdUp ? maxDesktopIndex : Math.max(0, articlesData.length - 1);
    setCurrentSlide((prev) => Math.min(prev, maxIdx));
  }, [isMdUp, maxDesktopIndex, articlesData.length]);

  const nextSlide = () => {
    if (!articlesData.length) return;
    if (isMdUp) {
      setCurrentSlide((prev) => Math.min(prev + 1, maxDesktopIndex));
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
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    } else {
      const prev = Math.max(currentSlide - 1, 0);
      scrollToIndexMobile(prev);
    }
  };

  // Calculate thumb width in pixels
  const getThumbWidthInPixels = () => {
    if (!progressBarRef.current) return 0;
    const barWidth = progressBarRef.current.offsetWidth;
    const totalPages = isMdUp
      ? Math.ceil(articlesData.length / visibleSlides)
      : articlesData.length;
    return (barWidth / totalPages) - 5;
  };

  // Draggable slider functionality
  const handleSliderMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches?.[0]?.clientX);
  };

  const handleSliderMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const bar = progressBarRef.current;
    if (!bar) return;

    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const rect = bar.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));

    const maxIdx = isMdUp
      ? Math.max(0, Math.ceil(articlesData.length / visibleSlides) - 1)
      : Math.max(0, articlesData.length - 1);

    const newIndex = Math.round(percentage * maxIdx);

    if (isMdUp) {
      setCurrentSlide(newIndex);
    } else {
      scrollToIndexMobile(newIndex);
    }
  };

  const handleSliderMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleSliderMouseMove);
      document.addEventListener('mouseup', handleSliderMouseUp);
      document.addEventListener('touchmove', handleSliderMouseMove);
      document.addEventListener('touchend', handleSliderMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleSliderMouseMove);
        document.removeEventListener('mouseup', handleSliderMouseUp);
        document.removeEventListener('touchmove', handleSliderMouseMove);
        document.removeEventListener('touchend', handleSliderMouseUp);
      };
    }
  }, [isDragging, isMdUp, articlesData.length]);

  return (
    <section className="relative bg-none rounded-2xl border border-white/40 px-3 xxs:px-3 xs:px-4 md:px-22 py-6 xs:py-7 md:py-8 shadow-lg backdrop-blur-[15px]">
      {/* Header with Page Number */}
      <div className="flex items-center justify-between mb-5 xs:mb-6 md:mb-8">
        <h2 className="text-xl xxs:text-2xl xs:text-3xl md:text-3xl font-bold text-[#C3F8D9]">
          {resources.content.news_heading[lang] || "News & Articles"}
        </h2>
        {/* Page Number (optional) */}
        {articlesData.length > visibleSlides && (
          <div className="text-white/80 text-lg md:text-xl font-medium">
            {currentSlide + 1} | {isMdUp ? Math.ceil(articlesData.length / visibleSlides) : articlesData.length}
          </div>
        )}
      </div>

      {/* Slider Container */}
      <div className="relative">

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
              <Link
                href={`/resources/${article.slug || ""}`}
                key={article.id}
                ref={(el) => (slideRefs.current[index] = el)}
                className="flex-shrink-0 basis-full md:basis-auto min-w-full md:min-w-0 px-0 md:px-2 snap-start w-full md:w-1/2 lg:w-1/3 flex justify-center"
              >

                <div className="bg-none border border-white/40 rounded-[14px] shadow-md backdrop-blur-[15px] w-full md:w-[320px] lg:w-[340px] h-full flex justify-between flex-col p-1.5">
                  {/* Image */}
                  <div className="relative w-full h-full min-h-40 xxs:min-h-44 xs:min-h-48 md:min-h-[240px] lg:min-h-[250px] mb-2 xs:mb-3 rounded-[7px] overflow-hidden">
                    <Image
                      src={article.featured_image || article.image}
                      alt={article[`title_${lang}`] || article.title_en}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between h-full md:min-h-[132px] lg:min-h-[105px] gap-1 px-2.5 xs:px-2 text-left ">
                    <h3 className="text-[13px] xxs:text-[14px] xs:text-[15px] md:text-[16px] lg:text-[17px] font-bold text-white leading-tight line-clamp-2">
                      {article[`title_${lang}`] || article.title_en}
                    </h3>
                    <p className="text-[12px] xxs:text-[12.5px] xs:text-[13px]  md:text-[14px] lg:text-[15px] text-white font-medium leading-relaxed line-clamp-2">
                      {article[`content_${lang}`] || article.content_en}
                    </p>

                    {/* <Link
                      href={`/resources/${article.slug || ""}`}
                      className="w-full mt-1 xs:mt-2 md:mt-2.5 py-1.5 xs:py-2 text-[#98C1A9] text-[14px] xxs:text-[14px] xs:text-[16px] md:text-[18px] lg:text-[20px] flex items-center gap-1.5 xs:gap-2 group"
                    >
                      <span className="leading-none">Learn More</span>
                      <Image
                        src="/resources/button-arrow.png"
                        alt="→"
                        width={22}
                        height={22}
                        className="block shrink-0 w-[18px] h-[18px] xs:w-[20px] xs:h-[20px] md:w-[22px] md:h-[22px] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Proportional Slider Bar with Arrows - Same for all devices */}
      <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-5 mt-6 md:mt-8 px-4 md:px-8 lg:px-12">
        {/* Left Arrow - All devices */}
        <button
          onClick={prevSlide}
          disabled={!hasPrev}
          aria-label="Previous"
          className={`flex items-center justify-center transition-all duration-300 ${hasPrev ? "text-[#46D3A7] cursor-pointer hover:text-[#5FE8C1]" : "text-[#929292] pointer-events-none opacity-50"
            }`}
        >
          <svg
            width="53"
            height="101"
            viewBox="0 0 53 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-12 md:w-8 md:h-16 lg:w-10 lg:h-20"
          >
            <path d="M48.6505 3.57812L4.66188 47.5667C4.31976 47.8878 4.04709 48.2756 3.86069 48.7062C3.67429 49.1368 3.57812 49.601 3.57812 50.0702C3.57812 50.5393 3.67429 51.0036 3.86069 51.4341C4.04709 51.8647 4.31976 52.2525 4.66188 52.5736L48.6505 96.5622" stroke="currentColor" strokeWidth="7.15262" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Draggable Proportional Progress Bar */}
        <div
          ref={progressBarRef}
          className="relative flex-1 max-w-xl h-8 bg-white/20 rounded-lg overflow-hidden cursor-pointer select-none"
          onMouseDown={handleSliderMouseDown}
          onTouchStart={handleSliderMouseDown}
          role="slider"
          aria-valuemin="0"
          aria-valuemax={isMdUp ? Math.ceil(articlesData.length / visibleSlides) - 1 : articlesData.length - 1}
          aria-valuenow={currentSlide}
          tabIndex={0}
        >
          {/* Active portion - width shows progress */}
          <div
            className={`absolute bg-transparent left-0 top-0 h-full rounded-full ${isDragging ? '' : 'transition-all duration-300'}`}
            style={{
              width: isMdUp
                ? `${((currentSlide + 1) / Math.ceil(articlesData.length / visibleSlides)) * 100}%`
                : `${((currentSlide + 1) / articlesData.length) * 100}%`
            }}
          >
            {/* Draggable handle/thumb - proportional width in pixels */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 h-6 bg-[#46D3A7] rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
              style={{
                width: `${getThumbWidthInPixels()}px`
              }}
            />
          </div>
        </div>

        {/* Right Arrow - All devices */}
        <button
          onClick={nextSlide}
          disabled={!hasNext}
          aria-label="Next"
          className={`flex items-center justify-center transition-all duration-300 ${hasNext ? "text-[#46D3A7] cursor-pointer hover:text-[#5FE8C1]" : "text-[#929292] pointer-events-none opacity-50"
            }`}
        >
          <svg
            width="53"
            height="101"
            viewBox="0 0 53 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-12 md:w-8 md:h-16 lg:w-10 lg:h-20"
          >
            <path d="M3.57812 3.57812L47.5667 47.5667C47.9089 47.8878 48.1815 48.2756 48.3679 48.7062C48.5543 49.1368 48.6505 49.601 48.6505 50.0702C48.6505 50.5393 48.5543 51.0036 48.3679 51.4341C48.1815 51.8647 47.9089 52.2525 47.5667 52.5736L3.57812 96.5622" stroke="currentColor" strokeWidth="7.15262" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default NewsArticles;
