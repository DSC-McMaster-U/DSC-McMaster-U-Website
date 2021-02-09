import React from "react";

const TeamCard = ({ title, image, body }) => {
  return (
    <div className="bg-white rounded-sm px-8 py-4">
      <div className="max-w-sm overflow-hidden h-auto">
        <div className="flex justify-center mb-4">
          <img
            className="block rounded-full h-48 w-48"
            src={image.src}
            alt={image.alt}
          />
        </div>
        <div className="px-2 pb-4">
          <div className="static font-bold text-2xl mb-2 flex flex-wrap justify-center">
            {title}
          </div>
          <p className="relative body text-center text-lg leading-normal text-gray-700">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
