import React from "react";
import rocket from "../images/rocket.png";
import thinking from "../images/thinking.png";
import student from "../images/student.png";
import ReactCardCarousel from "react-card-carousel";

function About_Card() {
  const reqStyle = {
    background: "#FFF",
    transition: "linear 0.1s",
    borderRadius: "1rem",
  };
  const CONTAINER_STYLE = {
    position: "relative",
    height: "100%",
    width: "100%",
  };

  return (
    <div style={CONTAINER_STYLE}>
      <ReactCardCarousel autoplay={true} spread="wide" alignment="horizontal">
        <div className="shadow-lg" style={reqStyle}>
          <div className="max-w-sm overflow-hidden h-auto">
            <div className="flex justify-center">
              <img className="block h-auto w-1/2" src={rocket} alt="rocket" />
            </div>
            <div className="px-2 pb-4">
              <div className="static font-bold text-2xl mb-4 flex justify-center">
                Concept of DSC
              </div>
              <p className="relative body my-4 text-center text-lg leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg" style={reqStyle}>
          <div className="max-w-sm overflow-hidden ">
            <div className="flex justify-center">
              <img className="block h-auto w-1/2" src={thinking} alt="rocket" />
            </div>
            <div className="px-2 pb-4">
              <div className="static font-bold text-2xl mb-4 flex justify-center">
                Why DSC?
              </div>
              <p className="relative body my-4 text-center text-lg leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-lg" style={reqStyle}>
          <div className="max-w-sm overflow-hidden">
            <div className="flex justify-center">
              <img className="block h-auto w-1/2" src={student} alt="rocket" />
            </div>
            <div className="px-2 pb-4">
              <div className="static font-bold text-2xl mb-4 flex justify-center">
                Target Audience
              </div>
              <p className="relative body my-4 text-center text-lg leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </ReactCardCarousel>
    </div>
  );
}

export default About_Card;
