import React from "react";
import TeamCard from "../Team/TeamCard";
import { President, Admin, Outreach } from "../Team/config";
const Team = () => {
  return (
    <section id="Team">
      <div className="grid mt-6 grid-cols-2 gap-6 gap-x-10">
        <div className="text-5xl flex justify-center flex-wrap mb-5 col-span-2">
          Our Team
        </div>
        <div className="text-xl text-center mb-5 col-span-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        {/*  */}
        <div
          id="President"
          className="flex justify-center grid grid-cols-2 col-span-2"
        >
          <div className="text-2xl flex justify-center flex-wrap mb-5 col-span-2">
            <div className="border-b-4 border-blue-400">President</div>
          </div>

          {President.map(member => {
            return (
              <div className="text-2xl flex justify-center flex-wrap mb-5 col-span-2">
                <TeamCard
                  title={member.title}
                  body={member.body}
                  image={member.image}
                  key={member.title}
                />
              </div>
            );
          })}
        </div>
        {/*  */}
        <div id="admin" className="flex justify-center grid grid-cols-2">
          <div className="text-2xl flex justify-center flex-wrap mb-5 col-span-2">
            <div className="border-b-4 border-red-400">Admin</div>
          </div>

          {Admin.map((member, index) => {
            return (
              <div
                className={
                  "text-2xl flex justify-center flex-wrap mb-5 col-span-" +
                  (Admin.length == index + 1 ? 2 : 1)
                }
              >
                <TeamCard
                  title={member.title}
                  body={member.body}
                  image={member.image}
                  key={member.title}
                />
              </div>
            );
          })}
        </div>
        {/*  */}
        {/*  */}
        <div id="outreach" className="flex justify-center grid grid-cols-2">
          <div className="text-2xl flex justify-center flex-wrap mb-5 col-span-2">
            <div className="border-b-4 border-red-400">Outreach</div>
          </div>
          {Outreach.map((member, index) => {
            return (
              <div
                className={
                  "text-2xl flex justify-center flex-wrap mb-5 col-span-" +
                  (Outreach.length == index + 1 ? 2 : 1)
                }
              >
                <TeamCard
                  title={member.title}
                  body={member.body}
                  image={member.image}
                  key={member.title}
                />
              </div>
            );
          })}
        </div>
        {/*  */}
        <div className="">3</div>
        <div className="">4</div>
        <div className="">5</div>
        <div className="">6</div>
        <div className="flex justify-center col-span-2 ...">7</div>
      </div>
    </section>
  );
};

export default Team;
