"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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

  const correctAnswers = answers.filter(
    (a, i) => a === letterToIndex[questions[i]?.correct_choice]
  ).length;

  const handleNext = () => {
    if (currentQuestion === total - 1) setShowResult(true);
    else swiperRef.current.slideNext();
  };

  const handlePrev = () => swiperRef.current.slidePrev();

  return (
    <>
      {/* Heading */}
      <div className="relative w-full py-[15px] px-[18px] flex items-center justify-start mb-2 rounded-xl gradient-background">
        <h1 className="text-3xl xs:text-xl xxs:text-lg md:text-3xl font-bold text-[#C3F8D9]">
          <span className="text-[#46D3A7]">
            {resources.content.quiz_heading_1[lang] || "Test your IT skills"}
          </span>{" "}
          {resources.content.quiz_heading_2[lang] ||
            "or take a fun tech challenge!"}
        </h1>
      </div>

      <section className="flex justify-center items-center py-4 xs:py-10">
        <div className="w-full relative rounded-2xl xxs:p-5 xs:p-6 backdrop-blur-[15px] shadow-lg overflow-hidden border border-white/40 p-10">
          {showResult ? (
            // Result Section
            <div className="flex flex-col items-center justify-center w-[40%] m-auto min-h-[380px] xs:min-h-[403px] relative py-4 border border-white/40 rounded-2xl">
              <div className="absolute inset-0 bg-none blur-[15px] animate-pulse"></div>

              <div className="relative z-10 flex flex-col items-center text-center rounded-2xl p-10 transition-all duration-500">
                <h2 className="text-5xl font-bold text-[#46D3A7] mb-4">
                  {resources.content.great_job[lang] || "Great Job!"}
                </h2>
                <p className="text-[42px] text-white font-bold mb-6">
                  {resources.content.your_score[lang] || "You scored"}{" "}
                  <span className="text-[#46D3A7]">{correctAnswers}</span>{" "}
                  {resources.content.out_of[lang] || "out of"}{" "}
                  <span className="text-[#46D3A7]">{total}</span>!
                </p>

                <button
                  onClick={() => {
                    setAnswers(Array(total).fill(null));
                    setShowResult(false);
                    setCurrentQuestion(0);
                    swiperRef.current.slideTo(0);
                  }}
                  className="px-8 py-3 mt-4 bg-none border border-[#39ff14] backdrop-blur-[15px] custom-shadow text-[#39ff14] font-semibold rounded-full hover:bg-white/40 hover:text-white transition-all cursor-pointer"
                >
                  {resources.content.restart_quiz[lang] || "Restart Quiz"}
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Quiz Questions */}
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
                      <div className="w-full lg:w-[70%] md:w-[70%] relative py-6 xxs:h-[388px] xs:h-[403px] md:h-[400px] backdrop-blur-[15px] rounded-2xl border border-white/40 flex flex-col items-center justify-center mx-auto px-4 lg:px-8">
                        <h2 className="text-[18px] mb-8 xxs:text-[19px] xs:text-[20px] md:text-[27px] font-bold text-[#46D3A7] text-center">
                          
                          <span className="text-white">
                            {q[`question_${lang}`] || q.question_en}
                          </span>
                        </h2>

                        <div className="flex flex-col gap-6 xs:gap-4 w-full max-w-2xl px-1 xxs:px-2">
                          {options.map((opt, idx) => (
                            <div
                              key={idx}
                              onClick={() => handleSelect(i, idx)}
                              className={`rounded-full border px-5 py-3 text-[16px] md:text-[17px] font-bold text-center cursor-pointer transition-all duration-200 custom-shadow ${
                                answers[i] === idx
                                  ? "bg-white/40 text-white border-[#39ff14]"
                                  : "text-[#39ff14] border-[#39ff14] hover:bg-white/40 hover:text-white"
                              }`}
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

              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                disabled={currentQuestion <= 0}
                className={`absolute left-30 top-1/2 -translate-y-1/2 z-50 ${
                  currentQuestion > 0
                    ? "cursor-pointer text-[#46D3A7]"
                    : "text-[#929292] cursor-pointer"
                }`}
              >
                <svg
                  width="53"
                  height="101"
                  viewBox="0 0 53 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 w-[53px] h-[101px]"
                >
                  <path
                    d="M36.5 1.5L2.34157 45.4962C2.0759 45.8173 1.86416 46.2052 1.71942 46.6358C1.57468 47.0664 1.5 47.5307 1.5 48C1.5 48.4693 1.57468 48.9336 1.71942 49.3642C1.86416 49.7948 2.0759 50.1827 2.34157 50.5038L36.5 94.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                aria-label={
                  currentQuestion === total - 1 ? "Submit quiz" : "Next"
                }
                className="absolute right-26 top-1/2 -translate-y-1/2 z-50 text-[#46D3A7] cursor-pointer"
              >
                <svg
                  width="53"
                  height="101"
                  viewBox="0 0 53 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 w-[53px] h-[101px]"
                >
                  <path
                    d="M1.5 1.5L35.6584 45.4962C35.9241 45.8173 36.1358 46.2052 36.2806 46.6358C36.4253 47.0664 36.5 47.5307 36.5 48C36.5 48.4693 36.4253 48.9336 36.2806 49.3642C36.1358 49.7948 35.9241 50.1827 35.6584 50.5038L1.5 94.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* NEW Figma-style Progress Bar */}
              <div className="w-full mt-12 flex justify-center">
                <div className="relative w-[87%] h-[8px] xs:h-[10px] md:h-[12px] rounded-full bg-[white]/40 overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-[#64F0C4] transition-all duration-700 ease-out"
                    style={{
                      width: `${((currentQuestion + 1) / total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Quiz;
