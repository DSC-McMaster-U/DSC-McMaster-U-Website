import React from "react";
import fbLogo from "../images/icons8-facebook-50.png";
import discordLogo from "../images/icons8-discord-50.png";
import linkedinLogo from "../images/icons8-linkedin-50.png";
import githubLogo from "../images/icons8-github-50.png";
import twitterLogo from "../images/icons8-twitter-50.png";
import instaLogo from "../images/icons8-instagram-50.png";
import freepik from "../images/media_freepik.jpg";

function Media(){

    return (
        <section className="relative">
                <div className="container mx-auto">
                    <div class="flex">
                        <div class="w-1/6 mt-20">
                            <h1>Follow Us</h1>
                            <p className="mb-2 ml-5"><img className="h-8 w-8 inline-block" src={fbLogo} alt="facebook_logo" /> DSC_McMaster</p>
                            <p className="mb-2 ml-5"><img className="h-8 w-8 inline-block" src={linkedinLogo} alt="linkedin_logo" /> DSC_McMaster</p>
                            <p className="mb-2 ml-5"><img className="h-8 w-8 inline-block" src={discordLogo} alt="discord_logo" /> DSC_McMaster</p>
                            <p className="mb-2 ml-5"><img className="h-8 w-8 inline-block" src={githubLogo} alt="github_logo" /> DSC_McMaster</p>
                            <p className="mb-2 ml-5"><img className="h-8 w-8 inline-block" src={instaLogo} alt="instagram_logo" /> DSC_McMaster</p>
                            <p className="mb-2 ml-5"><img className="h-8 w-8 inline-block" src={twitterLogo} alt="twitter_logo" /> DSC_McMaster</p>
                        </div>
                        <div class="w-5/6 ml-5">
                            <div class="flex">
                                <div class="w-1/2 mt-0">
                                    <img className="transform scale-75" src={freepik} alt="Designed by slidesgo / Freepik"></img>
                                </div>
                                <div class="w-1/2 mt-20">
                                    <h1>Stay Connected</h1>
                                    <h3 className="text-black text-opacity-50">Get the latest updates</h3>
                                    <div className="shadow-xl px-5 py-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Tellus cras adipiscing enim eu turpis egestas pretium aenean. Sodales neque sodales ut etiam. Pulvinar neque laoreet suspendisse interdum consectetur libero id. 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         </section>
    )
}

export default Media;