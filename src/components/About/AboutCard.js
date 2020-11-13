import React from "react";

const AboutCard = ({ card }) => {
  return (
    <div className="shadow-lg" className="bg-white rounded-sm">
      <div className="max-w-sm overflow-hidden h-auto">
        <div className="flex justify-center">
          <img className="block h-auto w-1/2" src={card.image} alt="rocket" />
        </div>
        <div className="px-2 pb-4">
          <div className="static font-bold text-2xl mb-4 flex justify-center">
            {card.title}
          </div>
          <p className="relative body my-4 text-center text-lg leading-normal">
            {card.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
