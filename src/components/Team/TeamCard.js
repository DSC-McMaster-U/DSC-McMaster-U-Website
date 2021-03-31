import React from "react";

const TeamCard = ({ title, image, body, link }) => {
  return (
    <div className="bg-white rounded-sm px-8 py-4">
      <div className="max-w-sm overflow-hidden h-auto">
        <div className="flex justify-center mb-4 relative">
          <a href={link}>
            <div className="absolute flex justify-center items-center rounded-full h-48 w-48 opacity-0 hover:opacity-75 bg-gray-200">
              <i className="fab fa-linkedin-in text-blue-400 text-3xl"></i>
            </div>
            <img
              className="inline-block rounded-full h-48 w-48"
              src={image.src}
              alt={image.alt}
            />
          </a>
        </div>
        <div className="px-2 pb-4">
          <div className="static font-bold text-2xl mb-2 flex flex-wrap justify-center text-center">
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
