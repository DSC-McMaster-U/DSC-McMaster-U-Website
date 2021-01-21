import React from "react";
import cx from "classnames";
import { yellow, red, green, blue } from "../../utils/colors";

const TimelineCard = ({ title, date, leftHand, index }) => {
  const colors = [red[500], blue[500], green[500], yellow[500]];
  const finished = new Date(date) > new Date();
  return (
    <div
      className={cx(
        "mb-12 flex sm:justify-between justify-center items-center w-full",
        {
          "flex-row-reverse": leftHand,
        }
      )}
    >
      <div className="order-1 sm:w-5/12 hidden sm:block"></div>
      <div
        className="z-20 sm:flex items-center order-1 shadow-xl w-8 h-8 rounded-full hidden"
        style={{ background: colors[index % colors.length] }}
      >
        <p className="mx-auto text-white font-semibold text-lg">{index}</p>
      </div>
      <div className="order-1 bg-white rounded-sm shadow-xl w-2/3 sm:w-5/12 px-10 sm:px-6 px-3 py-4 text-gray-900 z-20">
        <div className="flex">
          <h2 className="mb-3 font-bold md:text-xl">{title}</h2>
          {!finished && (
            <i class="fas fa-check ml-auto text-lg text-green-400"></i>
          )}
        </div>

        <p className="text-blue-500">{date}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
