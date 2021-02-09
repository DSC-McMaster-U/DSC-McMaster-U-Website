import React from "react";
import TeamCard from "../Team/TeamCard";
import {
  President,
  Admin,
  Outreach,
  Community,
  External,
  Marketing,
  Workshops,
  Web,
  Inc,
} from "../Team/config";
const Team = () => {
  return (
    <section id="Team">
      <div className="grid mt-6 grid-cols-2 gap-y-16 gap-x-20">
        <div className="text-5xl flex flex-col justify-center flex-wrap mb-5 col-span-2">
          <div className="mb-5 text-center">Our Team</div>
          <div className="text-xl text-center mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        {/*  */}
        <div
          id="President"
          className="flex justify-center grid grid-cols-2 col-span-2"
        >
          <div className="text-4xl flex justify-center flex-wrap mb-10 col-span-2">
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
          <div className="text-4xl flex justify-center flex-wrap mb-10 col-span-2">
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
        <div id="outreach" className="flex justify-center grid grid-cols-2">
          <div className="text-4xl flex justify-center flex-wrap mb-10 col-span-2">
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
        <div id="community" className="flex justify-center grid grid-cols-2">
          <div className="text-4xl flex justify-center flex-wrap mb-10 col-span-2">
            <div className="border-b-4 border-green-400">
              Community and Code
            </div>
          </div>

          {Community.map(member => {
            return (
              <div
                className={
                  "text-2xl flex justify-center flex-wrap mb-5 col-span-1"
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
        <div id="external" className="flex justify-center grid grid-cols-2">
          <div className="text-4xl flex justify-center flex-wrap mb-10 col-span-2">
            <div className="border-b-4 border-green-400">
              External Relations
            </div>
          </div>
          {External.map(member => {
            return (
              <div
                className={
                  "text-2xl flex justify-center flex-wrap mb-5 col-span-1"
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
        <div id="inc" className="flex justify-center grid grid-cols-2">
          <div className="text-4xl flex justify-center flex-wrap mb-10 col-span-2">
            <div className="border-b-4 border-red-400">Incubator Program</div>
          </div>
          {Inc.map((member, index) => {
            return (
              <div
                className={
                  "text-2xl flex justify-center flex-wrap mb-5 col-span-" +
                  (Inc.length == index + 1 ? 2 : 1)
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
        <div id="web" className="justify-center grid grid-cols-2">
          <div className="text-4xl flex justify-center flex-wrap mb-10 col-span-2">
            <div className="border-b-4 border-red-400">Web Development</div>
          </div>
          {Web.map(member => {
            return (
              <div
                className={
                  "text-2xl flex justify-center flex-wrap mb-5 col-span-1"
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
        <div id="workshops" className="flex justify-center grid grid-cols-2">
          <div className="text-4xl flex justify-center flex-wrap mb-10 col-span-2">
            <div className="border-b-4 border-yellow-400">
              Workshops and Talks
            </div>
          </div>
          {Workshops.map((member, index) => {
            return (
              <div
                className={
                  "text-2xl flex justify-center flex-wrap mb-5 col-span-" +
                  (Workshops.length == index + 1 ? 2 : 1)
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
        <div id="marketing" className="justify-center">
          <div className="grid grid-cols-2">
            <div className="text-4xl flex justify-center flex-wrap mb-10 col-span-2">
              <div className="border-b-4 border-yellow-400">
                Marketing and Branding
              </div>
            </div>
            {Marketing.map(member => {
              return (
                <div
                  className={
                    "text-2xl flex justify-center flex-wrap mb-5 col-span-1"
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
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Team;
