import React from "react";

const colStyle = "mt-8 md:ml-4";
const headingStyle = "px-4 py-2 text-lg text-gray-800 font-semibold";
const linkStyle = "text-gray-600 px-4 py-2 text-sm cursor-pointer hover:text-indigo-900";
const iconStyle = "text-xl";

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 gap-2 mt-32 text-center sm:grid-cols-2 md:grid-cols-4 sm:text-left">
        <div className={colStyle}>
          <span className={headingStyle}>Contact Us</span>
          <div className="grid grid-cols-1">
            <div className="text-gray-600 px-4 py-2 text-sm">© 2020 | All rights reserved</div>
            <div className={linkStyle}>
              Reach out to us at dscmcmaster@email.ca
            </div>
            <div className={linkStyle}>
              <i className={"fab fa-instagram " + iconStyle}></i>
              <i className={"fab fa-linkedin px-2 " + iconStyle}></i>
              <i className={"fab fa-github " + iconStyle}></i>
            </div>
          </div>
        </div>
        <div className={colStyle}>
          <span className={headingStyle}>Programs</span>
          <div className="grid grid-cols-1">
            <div className={linkStyle}><a href="https://forms.gle/wsuNPVfvNYW6PQqN7">Incubator</a></div>
          </div>
        </div>
        <div className={colStyle}>
          <span className={headingStyle}>Developers</span>
          <div className="grid grid-cols-1">
            <div className={linkStyle}><a href= "https://firebase.google.com/">Firebase console</a></div>
            <div className={linkStyle}><a href= "https://cloud.google.com/">Google Cloud Platform</a></div>
            <div className={linkStyle}><a href= "https://news.google.com/">Actions on Google</a></div>
          </div>
        </div>
        <div className={colStyle}>
          <span className={headingStyle}>External Links</span>
          <div className="grid grid-cols-1">
            <div className={linkStyle}><a href= "https://mlh.io/">MLH Hackathons</a></div>
            <div className={linkStyle}><a href= "https://devpost.com/">Devpost</a></div>
            <div className={linkStyle}><a href= "https://www.notion.so/DSC-McMasterU-Wiki-f39c9ea5e7b141fba08cfc01588d92c4">Wiki</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
