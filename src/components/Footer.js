import React from "react";
import { socials } from "./Socials";

const colStyle = "mt-8 md:ml-4";
const headingStyle = " text-lg text-gray-800 font-semibold mb-3";
const linkStyle =
  "text-gray-700 py-2 text-sm cursor-pointer hover:text-indigo-900";
const iconStyle = "text-2xl hover:text-gray-800 mr-3 text-gray-600";

const currYear = `${new Date().getFullYear()}`;

function Footer() {
  return (
    <footer className="mb-8">
      <div className="grid grid-cols-1 gap-2 mt-32 text-center sm:grid-cols-2 md:grid-cols-4 sm:text-left">
        <div className={colStyle}>
          <div className={headingStyle}>Contact Us</div>
          <div className="grid grid-cols-1">
            <div className="text-gray-700 py-2 text-sm">
              © {currYear} | All rights reserved
            </div>
            <a className={linkStyle} href="mailto:dsc.mcmasteru@gmail.com">
              Reach out at dsc.mcmasteru@gmail.com
            </a>
            <div className="py-2 text-sm">
              {socials.map(social => {
                return (
                  <a href={social.url} className={iconStyle} key={social.name}>
                    <i className={social.icon} aria-hidden="true"/>
                    <span className="sr-only">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className={colStyle}>
          <div className={headingStyle}>Programs</div>
          <div className="grid grid-cols-1">
            <div className={linkStyle}>
              <a href="https://forms.gle/wsuNPVfvNYW6PQqN7">Incubator</a>
            </div>
          </div>
        </div>
        <div className={colStyle}>
          <div className={headingStyle}>Developers</div>
          <div className="grid grid-cols-1">
            <div className={linkStyle}>
              <a href="https://firebase.google.com/">Firebase console</a>
            </div>
            <div className={linkStyle}>
              <a href="https://cloud.google.com/">Google Cloud Platform</a>
            </div>
            <div className={linkStyle}>
              <a href="https://news.google.com/">Actions on Google</a>
            </div>
          </div>
        </div>
        <div className={colStyle}>
          <div className={headingStyle}>External Links</div>
          <div className="grid grid-cols-1">
            <div className={linkStyle}>
              <a href="https://mlh.io/">MLH Hackathons</a>
            </div>
            <div className={linkStyle}>
              <a href="https://devpost.com/">Devpost</a>
            </div>
            <div className={linkStyle}>
              <a href="https://www.notion.so/DSC-McMasterU-Wiki-f39c9ea5e7b141fba08cfc01588d92c4">
                Wiki
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
