import React from "react";

const EventCard = ({
  title,
  image,
  body,
  link,
  date,
  location,
  time,
  jsDate,
}) => {
  return (
    <div className="bg-white rounded-sm px-10 shadow-lg">
      <div className="max-w-sm overflow-hidden h-full">
        <div className="pt-6 pb-2">
          {new Date(jsDate) >= new Date() && (
            <span className="rounded-lg bg-blue-400 text-white py-2 px-2 text-xs">
              Upcoming Event
            </span>
          )}
          {new Date(jsDate) < new Date() && (
            <span className="rounded-lg bg-gray-500 text-white py-2 px-2 text-xs">
              Past Event
            </span>
          )}
        </div>
        <div className="flex justify-center">
          <img
            className="block h-32 w-auto pt-2 pb-2"
            src={image}
            alt="rocket"
          />
        </div>
        <div className="px-2 pb-4 text-center">
          {/* <div className="flex flex-row"> */}
          <a href={link} className="pl-2 hover:underline text-blue-400">
            {title}
          </a>
          {/* </div> */}
          <div className="flex flex-row pt-2">
            <span className="text-gray-700 mr-2 text-xs">
              <i className="fill-current far fa-calendar-alt text-blue-400 fa-lg pt-2 pr-2"></i>
              {date}
            </span>
            <span className="text-gray-700 mr-2 text-xs">
              <i className="fill-current far fa-clock text-green-400 fa-lg pt-2 pr-2"></i>
              {time}
            </span>
            <span className="text-gray-700 mr-2 text-xs">
              <i className="fill-current fas fa-map-marker-alt text-red-400 fa-lg pt-2 pr-2"></i>
              {location}
            </span>
          </div>
          <p className="relative body my-4 text-left text-sm leading-normal">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
