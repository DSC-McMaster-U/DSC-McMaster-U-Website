import React from "react";

const headingStyle = "px-4 py-2 text-lg text-gray-800 font-semibold";
const linkStyle = "text-gray-600 px-4 py-2 text-sm";
const iconStyle = "text-xl";

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 gap-2 mt-32 text-center sm:grid-cols-3 ">
        <div className="mt-8">
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
        <div className="mt-8">
          <span className={headingStyle}>Programs</span>
          <div className="grid grid-cols-1">
            <div className={linkStyle}>Program 1</div>
            <div className={linkStyle}>Program 2</div>
            <div className={linkStyle}>Program 3</div>
          </div>
        </div>
        <div className="mt-8">
          <span className={headingStyle}>External Links</span>
          <div className="grid grid-cols-1">
            <div className={linkStyle}>External 1</div>
            <div className={linkStyle}>External 2</div>
            <div className={linkStyle}>External 3</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
