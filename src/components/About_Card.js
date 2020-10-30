import React from "react";
import rocket from "../images/rocket.png";
import thinking from "../images/thinking.png";
import student from "../images/student.png";
import ReactCardCarousel from "react-card-carousel";

function About_Card() {
  const reqStyle = {
    background: "#FFF",
    transition: "linear 0.1s",
  };
  const CONTAINER_STYLE = {
    position: "relative",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "middle",
  };

  return (
    <div style={CONTAINER_STYLE}>
      <ReactCardCarousel autoplay={true} alignment="horizontal">
        <div style={reqStyle}>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-lg">
            <div className="flex justify-center">
              <img className="w-1/2 h-1/2 " src={rocket} alt="rocket" />
            </div>
            <div className="relative px-6 py-4">
              <div className="static font-bold text-2xl m-4 flex justify-center">
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
        <div style={reqStyle}>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-lg">
            <div className="flex justify-center">
              <img className="w-1/2 h-1/2 " src={thinking} alt="thinking" />
            </div>

            <div className="static px-6 py-4">
              <div className="font-bold text-2xl m-4 flex justify-center">
                Why DSC?
              </div>
              <p className="body my-4 text-center text-lg leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
        <div style={reqStyle}>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-lg">
            <div className="flex justify-center">
              <img className="w-1/2 h-1/2 " src={student} alt="student" />
            </div>

            <div className=" static px-6 py-4">
              <div className="font-bold text-2xl m-4 flex justify-center">
                Target Audience
              </div>
              <p className="body my-4 text-center text-lg leading-normal">
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
