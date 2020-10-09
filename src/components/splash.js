import React from "react";
import PropTypes from "prop-types";
import SplashParticle from './splashParticle';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import SplashGraph from "./../asset/image/splash.png";

const Splash = ({ title, subTitle }) => (
    <div
      style={{
      margin: `0 auto`,
      width: `960px`,
      padding: `1.45rem 1.0875rem`,
      }}
    >

    <Container>
        {/* particle div position */}
        <div
            style={{
                position: "absolute",
                right: "200px",
                width: "700px",
                height: "30px"
            }}
        >
            <SplashParticle />
        </div>

        {/* splash content */}
        <Row>

            {/* splash title, sub title content, button */}
            <Col>
                <h2 style={{ margin: 0}}>
                    {title}
                </h2>
                <p style={{
                    marginTop: `40px`,
                    width: `300px`,
                    color: `#868686`,
                    fontSize: `16px`
                }}>
                    {subTitle}
                </p>
                <div style={{ width: `30%`, display: `inline-block`, marginRight: `10px`}}>
                    <Button block="false" variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLScjcm8b9ay0-JFcANSH_-A19zO7-KZK40_ppwO2Pno88eTh7A/viewform">  join us  </Button>
                </div>
                <div style={{ width: `30%`,display: `inline-block`, marginLeft: `10px`}}>
                    <Button block="false" variant="outline-primary">contact us</Button>
                </div>
            </Col>

            {/* splash graphic image */}
            <Col>
                <img src= {SplashGraph}/>
            </Col>
        </Row>

        <div style={{height: `100px`}}></div>

        {/* splash footer */}
        <Row>
            <Col><hr style={{backgroundColor: `#1967D2`, height: `2px`}}/></Col>
            <Col><hr style={{backgroundColor: `#C5221F`, height: `2px`}}/></Col>
            <Col><hr style={{backgroundColor: `#F29900`, height: `2px`}}/></Col>
            <Col><hr style={{backgroundColor: `#188038`, height: `2px`}}/></Col>
        </Row>
    </Container>
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