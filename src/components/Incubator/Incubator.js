import React from "react";
import TimelineCard from "./TimelineCard";
import Timeline from "./Timeline";
import hero from "../../images/dsc_hero_960.jpg";
import HighlightedChar from "../Splash/HighlightedChar";

const workshops = [
  {
    icon: "fas fa-exclamation",
    title: "Defining a problem and target customer",
  },
  { icon: "fas fa-users", title: "User Interviews and Validation" },
  { icon: "fas fa-tasks", title: "Project Planning" },
  { icon: "fas fa-running ", title: "Design Sprints" },
  {
    icon: "fas fa-laptop-code",
    title: "Beta-Testing",
  },
];

const timeline = [
  { title: "Team Orientation", date: "Jan 15, 2021" },
  { title: "Project Ideation and User Research", date: "Jan 22, 2021" },
  { title: "Initial Project Idea Pitch", date: "Jan 29, 2021" },
  { title: "Product Development", date: "Feb 28, 2021" },
  { title: "Final Product Showcase", date: "March 14, 2021" },
];

const Incubator = () => {
  return (
    <>
      <div className="flex mt-16 flex-wrap md:flex-row-reverse mb-20">
        <div className="md:p-10 h-auto md:w-1/2">
          <img src={hero} className="h-full w-full object-cover  shadow-md" />
        </div>
        <div className="md:pr-8 md:w-1/2 md:text-left text-center">
          <h1 className="text-5xl mb-7 tracking-wide">
            <HighlightedChar color="blue" children="I" />
            ncubator <HighlightedChar color="blue" children="P" />
            rogram
          </h1>
          <p className="mt-4 text-lg leading-normal text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            tortor ac mattis ultricies. Nulla facilisi. Duis a mauris at ante
            scelerisque lobortis.
          </p>
          <p className="mt-3 text-lg leading-normal text-gray-700 mb-8">
            Nulla facilisi. Duis a mauris at ante dolor sit amet scelerisque
            lobortis.
          </p>
        </div>
      </div>
      <div className="text-center flex flex-col mb-24">
        <h1 className="text-5xl mb-5">Professional Workshops</h1>
        <p className="relative body mt-4 text-lg leading-normal text-gray-700 mb-12">
          Each week gain access to exclusive professional workshops to offer
          training in the following areas:
        </p>
        <div className="grid md:grid-cols-2 md:grid-cols-1 gap-8 text-left mx-auto">
          {workshops.map((workshop, i) => {
            return (
              <div className="text-xl text-gray-900 max-w-sm flex items-center">
                <div className="bg-blue-400 rounded-full flex h-12 w-12 min-w-12 justify-center items-center mr-5">
                  <i className={`${workshop.icon} text-white text-2xl`}></i>
                </div>
                <div>{workshop.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <h1 className="text-5xl mb-5 text-center">Program Timeline</h1>
      <div className="container mx-auto md:w-2/3 h-full w-full">
        <Timeline>
          {timeline.map(event => {
            return <TimelineCard {...event} />;
          })}
        </Timeline>
      </div>
    </>
  );
};

export default Incubator;
