import React from "react";

const colStyle = "mt-8 md:ml-4";
const headingStyle = "px-4 py-2 text-lg text-gray-800 font-semibold";
const linkStyle = "text-gray-600 px-4 py-2 text-sm";
const iconStyle = "text-xl";

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 gap-2 mt-32 text-center sm:grid-cols-2 md:grid-cols-4 sm:text-left">
        <div className={colStyle}>
          <span className={headingStyle}>Contact Us</span>
          <div className="grid grid-cols-1">
            <div className={linkStyle}>© 2020 | All rights reserved</div>
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
            <div className={linkStyle}>Incubator</div>
            <div className={linkStyle}>Program 2</div>
            <div className={linkStyle}>Program 3</div>
          </div>
        </div>
        <div className={colStyle}>
          <span className={headingStyle}>Developers</span>
          <div className="grid grid-cols-1">
            <div className={linkStyle}>Firebase console</div>
            <div className={linkStyle}>Google Cloud Platform</div>
            <div className={linkStyle}>Actions on Google</div>
          </div>
        </div>
        <div className={colStyle}>
          <span className={headingStyle}>External Links</span>
          <div className="grid grid-cols-1">
            <div className={linkStyle}>MLH Hackathons</div>
            <div className={linkStyle}>Devpost</div>
            <div className={linkStyle}>Wiki</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
