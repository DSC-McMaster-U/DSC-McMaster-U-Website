import React from "react";
import Img from "gatsby-image";
import Typography from "../core/Typography";
import Section from "../core/Section";
import StickerGiantLogo from "../../../static/images/StickerGiantLogo.png";

export default function Sponsors({ links }) {
  return (
    <Section id="Sponsors">
      <div className="flex items-center flex-col">
        <div className="text-xl text-center md:mb-5 mb-5 text-gray-600">
          <Typography variant="h1">Sponsors</Typography>
          Thank you to our sponsors for their continued support. Check them out!
        </div>
        <div className="text-xl text-center md:mb-0 mb-5 text-gray-600">
          <a
            href="https://www.stickergiant.com/event-coupons?utm_source=website&utm_medium=event"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="block h-32 w-auto"
              src={StickerGiantLogo}
              alt={"Sticker Giant Logo"}
            />
          </a>
        </div>
      </div>
    </Section>
  );
}
