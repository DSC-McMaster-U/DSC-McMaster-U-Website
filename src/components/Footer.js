import React from "react";

function Footer() {
  return (
    <footer>
      <div className="table w-full mt-32 mb-10">
        <div className="table-footer-group">
          <div className="table-row text-base text-gray-900 font-semibold">
            <div className="table-cell px-4 py-2">
              Feel free to reach out to us!
            </div>
            <div className="table-cell px-4 py-2">Programs</div>
            <div className="table-cell px-4 py-2">External links</div>
          </div>
          <div className="table-row">
            <div className="table-cell text-gray-700 px-4 py-2 text-sm">
              dscmcmaster@email.ca
            </div>
            <div className="table-cell text-gray-700 px-4 py-2 text-sm">
              Program1
            </div>
            <div className="table-cell text-gray-700 px-4 py-2 text-sm">
              Link1
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell text-gray-700 px-4 py-2 text-xl">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin px-2"></i>
              <i className="fab fa-github"></i>
            </div>
            <div className="table-cell text-gray-700 px-4 py-2 text-sm">
              Program2
            </div>
            <div className="table-cell text-gray-700 px-4 py-2 text-sm">
              Link2
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell text-gray-700 px-4 py-2 text-sm">
              © 2020 | All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
