import React from "react";
import Typography from "../Typography";

const AboutCard = ({ title, image, body }) => {
  return (
    <div className="bg-white rounded-sm px-8 shadow-lg py-4">
      <div className="max-w-sm overflow-hidden h-auto">
        <div className="flex justify-center">
          <img className="block h-32 w-auto" src={image.src} alt={image.alt} />
        </div>
        <div className="px-2 pb-4">
          <div className="static font-bold text-2xl mb-4 flex justify-center">
            {title}
          </div>
          <Typography className="relative text-center">{body}</Typography>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
