import React from "react";
import PropTypes from "prop-types";
import Particles from 'react-particles-js';

import SplashGraph from "./../asset/image/splash.png";

const Splash = ({ title, subTitle }) => (
    <div
      style={{
      margin: `0 auto`,
      width: `960px`,
      padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        style={{
        float: `left`,
        width: `40%`,
        height: `280px`,
        }}
      >
        <h2 style={{ margin: 0 }}>
          {title}
        </h2>
        <h6 style={{marginTop: `10px`}}>
          {subTitle}
        </h6>
      </div>
      <div
        style={{
        float: `right`,
        width: `50%`,
        height: `280px`
        }}
      >
        <img src= {SplashGraph}/>
      </div>
      <div
        style={{
        float: "right",
        width: `500px`,
        height: `280px`
        }}>
      <Particles
        params={{
	        "particles": {
	            "number": {
	                "value": 10
                },
                "color" : {
                    "value": ["#FBBC04", "#4285F4", "#34A853", "#EA4335"]
                },
	            "size": {
	                "value": 10
	            }
	        },
	        "interactivity": {
	            "events": {
	                "onhover": {
	                    "enable": true,
	                    "mode": "repulse"
	                }
	            }
	        }
	    }} />
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