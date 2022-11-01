import React from "react";
import dscIcon from "../../../static/images/dscIcon.png";
import { prettifyDate } from "../../utils/date";
const EventItem = ({ title, date, time, location, link }) => {
  return (
    <li className="mx-auto w-full" key={title}>
      <div className="h-auto w-full rounded-lg bg-gray-100 bg-opacity-20  shadow-lg text-grey px-2 py-8">
        <div className="flex flex-row">
          <div>
            <img src={dscIcon} alt="DSC Icon" />
          </div>
          <a href={link} className="pl-2 hover:underline">
            {title}
          </a>
        </div>
        <div className="flex flex-row pl-10 pt-2">
          <span className="text-gray-900 mr-2 text-xs">
            <i className="fill-current far fa-calendar-alt text-blue-400 fa-lg pt-2 pr-2"></i>
            {prettifyDate(date)}
          </span>
          <span className="text-gray-900 mr-2 text-xs">
            <i className="fill-current far fa-clock text-green-400 fa-lg pt-2 pr-2"></i>
            {time}
          </span>
          <span className="text-gray-00 mr-2 text-xs">
            <i className="fill-current fas fa-map-marker-alt text-red-400 fa-lg pt-2 pr-2"></i>
            {location}
          </span>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
