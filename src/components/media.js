import React from "react";
import fbLogo from "../images/icons8-facebook-50.png";
import discordLogo from "../images/icons8-discord-50.png";
import linkedinLogo from "../images/icons8-linkedin-50.png";
import githubLogo from "../images/icons8-github-50.png";
import twitterLogo from "../images/icons8-twitter-50.png";
import instaLogo from "../images/icons8-instagram-50.png";
import announce_freepik from "../images/media_freepik.jpg";

function Media(){

    const logoStyle = "h-6 w-h md:h-8 inline-block mb-0";
    const imageStyle = "hidden lg:block lg:h-250";
    const mediaLinkStyle = "my-1 inline-block";

    return (
        <section className="relative mt-20 mb-10">
            <div className="container mx-auto">
                <div className="flex">
                    <div className="w-2/5 sm:1/6 lg:w-1/4">
                        <h1>Follow Us</h1>
                        <div className={mediaLinkStyle}>
                            <a className="ml-5">
                                <img className={logoStyle} src={fbLogo} alt="facebook_logo" /> DSC_McMaster
                            </a>
                        </div>
                        <div className={mediaLinkStyle}>
                            <a className="ml-5">
                                <img className={logoStyle} src={linkedinLogo} alt="linkedin_logo" /> DSC_McMaster
                            </a>
                        </div>
                        <div className={mediaLinkStyle}>
                            <a className="ml-5">
                                <img className={logoStyle} src={discordLogo} alt="discord_logo" /> DSC_McMaster
                            </a>
                        </div>
                        <div className={mediaLinkStyle}>
                            <a className="ml-5">
                                <img className={logoStyle} src={githubLogo} alt="github_logo" /> DSC_McMaster
                            </a>
                        </div>
                        <div className={mediaLinkStyle}>
                            <a className="ml-5">
                                <img className={logoStyle} src={instaLogo} alt="instagram_logo" /> DSC_McMaster
                            </a>
                        </div>
                        <div className={mediaLinkStyle}>
                            <a className="ml-5">
                            <img className={logoStyle} src={twitterLogo} alt="twitter_logo" /> DSC_McMaster
                            </a>
                        </div>
                    </div>
                    <div class="w-3/5 sm:5/6 lg:w-3/4">
                        <div className="flex">
                            <div class="w-0 lg:w-1/2">
                                <img className={imageStyle} src={announce_freepik} alt="Designed by slidesgo/Freepik"></img>
                            </div>
                            <div class="w-auto lg:w-1/2 ml-10 sm:ml-0">
                                <h1>Stay Connected</h1>
                                <h3 className="text-black text-opacity-50">Get the latest updates</h3>
                                <div className="hidden sm:block rounded-lg shadow-xl px-5 py-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Tellus cras adipiscing enim eu turpis egestas pretium aenean. Sodales neque sodales ut etiam.
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