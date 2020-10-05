import React from "react";
import PropTypes from "prop-types";
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