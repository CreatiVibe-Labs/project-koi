"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Quiz = ({ quizData, lang, resources }) => {
  const questions = quizData?.[0]?.questions || [];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const swiperRef = useRef(null);

  const letterToIndex = { A: 0, B: 1, C: 2, D: 3 };
  const total = questions.length;

  const handleSelect = (qIndex, optionIndex) => {
    const updated = [...answers];
    updated[qIndex] = optionIndex;
    setAnswers(updated);
  };

  const correctAnswers = answers.filter((a, i) => a === letterToIndex[questions[i]?.correct_choice]).length;

  const handleNext = () => {
    if (currentQuestion === total - 1) {
      setShowResult(true);
    } else {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <section className="flex justify-center items-center py-4 xs:py-10 md:py-12">
      <div className="w-full relative rounded-2xl border border-white/40 p-5 xxs:p-5 xs:p-6 md:p-8 backdrop-blur-[15px] bg-none shadow-lg overflow-hidden">

        <h1 className="text-2xl xxs:text-3xl md:text-4xl font-bold text-white mb-7 xs:mb-8 md:mb-10 text-center">
          <span className="text-[#46D3A7]">{resources.content.quiz_heading_1[lang] || 'Test your IT skills'}</span> {resources.content.quiz_heading_2[lang] || "or take a fun tech challenge!"}
        </h1>

        {showResult ? (
          <div className="flex flex-col items-center justify-center min-h-[380px] xs:min-h-[403px] relative overflow-visible py-4 xs:py-5">
            <div className="absolute inset-0 bg-none blur-[15px] animate-pulse"></div>

            <div className="relative z-10 flex flex-col items-center text-center backdrop-blur-[15px] border border-white/40 rounded-2xl p-10 shadow-[0_0_40px_#46D3A7]/10 transition-all duration-500">
              <h2 className="text-5xl font-bold text-[#46D3A7] mb-4">{resources.content.great_job[lang] || "Great Job!"}</h2>
              <p className="text-[42px] text-white font-bold mb-6">
                {resources.content.your_score[lang] || "You scored"} <span className="text-[#46D3A7]">{correctAnswers}</span> {resources.content.out_of[lang] || "out of"}{" "}
                <span className="text-[#46D3A7]">{total}</span>!
              </p>

              <button
                onClick={() => {
                  setAnswers(Array(total).fill(null));
                  setShowResult(false);
                  setCurrentQuestion(0);
                  swiperRef.current.slideTo(0);
                }}
                className="px-8 py-3 mt-4 bg-[#46D3A7] text-white font-semibold rounded-full hover:bg-[#3cb28b] transition-all cursor-pointer"
              >
                {resources.content.restart_quiz[lang] || "Restart Quiz"}
              </button>
            </div>
          </div>
        ) : (
          <>
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(s) => setCurrentQuestion(s.activeIndex)}
              className="relative"
            >
              {questions.map((q, i) => {
                const options = [
                  q[`choice_a_${lang}`] || q.choice_a,
                  q[`choice_b_${lang}`] || q.choice_b,
                  q[`choice_c_${lang}`] || q.choice_c,
                  q[`choice_d_${lang}`] || q.choice_d,
                ];

                return (
                  <SwiperSlide key={i}>
                    <div className="w-full md:w-[1086px] h-[370px] xxs:h-[388px] xs:h-[403px] md:h-[403px] bg-none backdrop-blur-[15px] rounded-2xl border border-white/20 flex flex-col items-center justify-center mx-auto px-4 md:px-8">
                      <h2 className="text-[18px] xxs:text-[19px] xs:text-[20px] md:text-[27px] font-bold text-[#46D3A7] mb-6 xs:mb-7 md:mb-8 text-center">
                        {resources.content.question_prefix[lang] || "Q:"}{i + 1} <span className="text-white">{q[`question_${lang}`] || q.question_en}</span>
                      </h2>

                      <div className="flex flex-col gap-3 xs:gap-4 w-full max-w-2xl px-1 xxs:px-2">
                        {options.map((opt, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleSelect(i, idx)}
                            className={`rounded-full border px-5 xxs:px-6 py-2.5 xs:py-3 text-[15px] xxs:text-[16px] md:text-[17px] font-bold text-center text-white cursor-pointer transition-all duration-200
                              ${answers[i] === idx ? "bg-[#306E53] border-[#46D3A7]" : "border-white/40"}`}
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Navigation arrows with dynamic color */}
            <button
              onClick={handlePrev}
              disabled={currentQuestion <= 0}
              aria-disabled={currentQuestion <= 0}
              className={`absolute left-2 xs:left-3 md:left-4 top-1/2 -translate-y-1/2 z-50 ${currentQuestion > 0 ? "cursor-pointer text-[#46D3A7]" : "text-[#929292] pointer-events-none"
                }`}
            >
              <svg
                width="53"
                height="101"
                viewBox="0 0 53 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[30px] h-[60px] xs:w-8 xs:h-16 md:w-[53px] md:h-[101px] opacity-90 transition-all"
              >
                <path d="M48.6505 3.57812L4.66188 47.5667C4.31976 47.8878 4.04709 48.2756 3.86069 48.7062C3.67429 49.1368 3.57812 49.601 3.57812 50.0702C3.57812 50.5393 3.67429 51.0036 3.86069 51.4341C4.04709 51.8647 4.31976 52.2525 4.66188 52.5736L48.6505 96.5622" stroke="currentColor" strokeWidth="7.15262" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label={currentQuestion === total - 1 ? "Submit quiz" : "Next"}
              className="cursor-pointer absolute right-2 xs:right-3 md:right-4 top-1/2 -translate-y-1/2 z-50 text-[#46D3A7]"
            >
              <svg
                width="53"
                height="101"
                viewBox="0 0 53 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[30px] h-[60px] xs:w-8 xs:h-16 md:w-[53px] md:h-[101px] opacity-90 transition-all"
              >
                <path d="M3.57812 3.57812L47.5667 47.5667C47.9089 47.8878 48.1815 48.2756 48.3679 48.7062C48.5543 49.1368 48.6505 49.601 48.6505 50.0702C48.6505 50.5393 48.5543 51.0036 48.3679 51.4341C48.1815 51.8647 47.9089 52.2525 47.5667 52.5736L3.57812 96.5622" stroke="currentColor" strokeWidth="7.15262" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Progress Bar */}
            <div className="relative mt-12 xs:mt-16 md:mt-20">
              <div className="flex gap-1.5 xs:gap-2 w-full">
                {Array.from({ length: total }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-3 flex-1 rounded-full border border-[#46D3A7]/40 transition-all duration-300 ${idx <= currentQuestion ? "bg-[#46D3A7]" : "bg-transparent"
                      }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* No separate submit button; right arrow submits on last question. */}
          </>
        )}
      </div>
    </section>
  );
};

export default Quiz;
