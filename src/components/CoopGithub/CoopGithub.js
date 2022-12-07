import React from "react";
import Section from "../core/Section";
import Typography from "../core/Typography";
import Github_Logo from "../../../static/images/GitHub_Logo.png";

export default function CoopGithub() {
  return (
    <Section id="CoopGithub">
      <div className="flex items-center flex-col">
        <div className="text-xl text-center md:mb-5 mb-5 text-gray-600">
          <Typography variant="h1">Check out our page for Co-ops</Typography>
          Please feel free to add co-ops that you have found too!
        </div>
        <div className="text-xl text-center md:mb-0 mb-5 text-gray-600">
          <a
            href="https://github.com/DSC-McMaster-U/Canadian-Internships"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="block h-32 w-auto"
              src={Github_Logo}
              alt={"Github Logo"}
            />
          </a>
        </div>
      </div>
    </Section>
  );
}
