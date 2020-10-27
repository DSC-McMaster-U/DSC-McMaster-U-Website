import React from "react";
import { red, yellow, green, blue } from "../asset/colors";
import Particles from "react-particles-js";

const SplashParticle = () => (
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
				},
				"line_linked": {
					"enable": false
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
);

export default SplashParticle;
