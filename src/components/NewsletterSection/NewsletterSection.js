import React from "react";
import Section from "../core/Section";
import Typography from "../core/Typography";
import Button from "../core/Button";
import { Link } from "gatsby";

export default function NewsletterSection() {
  return (
    <Section id="NewsletterSection">
      <div className="flex items-center flex-col">
        <div className="text-xl text-center md:mb-5 mb-5 text-gray-600">
          <Typography variant="h1">Check out our newsletter</Typography>
            Stay up to date with the latest news and events!
        </div>
        <div className="text-xl text-center md:mb-0 mb-5 text-gray-600">
          <Link to="/newsletters"> {/* Use Gatsby's Link component */}
            <Button node="a">View newsletters</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
