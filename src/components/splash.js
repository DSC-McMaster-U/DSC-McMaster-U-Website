import React from "react";
import PropTypes from "prop-types";
import SplashParticle from './splashParticle';

import SplashGraph from "./../asset/image/splash.png";

const Splash = ({ title, subTitle }) => (
    <div className="lg:container md:container sm:container">

        {/* splash content */}
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            {/* splash text */}
            <div>
                <h2>{title}</h2>
                <p>{subTitle}</p>
                <div className="grid grid-cols-2">
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="https://docs.google.com/forms/d/e/1FAIpQLScjcm8b9ay0-JFcANSH_-A19zO7-KZK40_ppwO2Pno88eTh7A/viewform">
                            join us
                        </button>
                    </div>
                    <div>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            contact us
                        </button>
                    </div>
                </div>
            </div>
            {/* splash graphic image */}
            <div>
                <div className="z-10"><SplashParticle /></div>
                <div className="z-0"><img src= {SplashGraph}/></div>
            </div>
        </div>

        {/* splash footer */}
        <div className="grid grid-cols-4">
            <div><hr style={{backgroundColor: `#1967D2`, height: `2px`}}/></div>
            <div><hr style={{backgroundColor: `#C5221F`, height: `2px`}}/></div>
            <div><hr style={{backgroundColor: `#F29900`, height: `2px`}}/></div>
            <div><hr style={{backgroundColor: `#188038`, height: `2px`}}/></div>
        </div>
    </div>
  );

  Splash.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
  };
  
  Splash.defaultProps = {
    title: ``,
    subTitle: ``
  };
  
  export default Splash;