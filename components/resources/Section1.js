import React from "react";
import Image from "next/image";

// Import your JSON data (you can also fetch it or keep it in a separate file)
const cardsData = {
  cards: [
    {
      id: 1,
      title: "Toolkits & Templates",
      icon: "/resources/toolbox-container.png",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Industry news",
      icon: "/resources/news.png",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Interactive Quiz",
      icon: "/resources/quiz.png",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "FAQs & Tutorials",
      icon: "/resources/questionAwnser1.png",
      textColor: "text-[#39FF14]"
    },
    {
      id: 5,
      title: "subpages for future use",
      icon: "/resources/questionAwnser1.png",
      textColor: "text-white"
    },
    {
      id: 6,
      title: "subpages for future use",
      icon: "/resources/questionAwnser1.png",
      textColor: "text-white"
    }
  ]
};

const Section1 = () => {
  return (
    <section className="rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cardsData.cards.map((card) => (
          <div 
            key={card.id}
            className="flex items-center gap-3 px-4 py-10 backdrop-blur-[15px] rounded-[18px] border cursor-pointer w-full "
          >
            <Image 
              src={card.icon} 
              alt={card.title} 
              width={54} 
              height={54} 
            />
            <span className={`font-bold ${card.textColor} text-2xl`}>
              {card.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1;