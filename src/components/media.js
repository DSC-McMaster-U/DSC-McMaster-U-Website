import React from "react";
import announce_freepik from "../images/media_freepik.jpg";

function Media(){

    const imageStyle = "hidden lg:block lg:h-250";
    const mediaLinkStyle = "my-1 inline-block";

    return (
        <section className="relative mt-20 mb-10">
            <div className="container mx-auto">
                <div className="flex">
                    <div className="w-2/5 sm:1/6 lg:w-2/3">
                        <h1 className="text-5xl mb-1">Follow Us</h1>
                        <h3 className="text-2xl mb-5">Get the latest updates</h3>
                        <div className="flex">
                            <div className="w-1/2">
                                <div className={mediaLinkStyle}>
                                    <a href="#" className="ml-5">
                                        <i class="fab fa-facebook text-4xl text-blue-500"></i> DSC_McMaster
                                    </a>
                                </div>
                                <div className={mediaLinkStyle}>
                                    <a href="#" className="ml-5">
                                        <i class="fab fa-discord text-4xl text-purple-700"></i> DSC_McMaster
                                    </a>
                                </div>
                                
                                <div className={mediaLinkStyle}>
                                    <a href="#" className="ml-5">
                                        <i class="fab fa-instagram text-4xl text-pink-900"></i> DSC_McMaster
                                    </a>
                                </div>
                            </div>

                            <div className="w-1/2">
                                <div className={mediaLinkStyle}>
                                    <a href="#" className="ml-5">
                                        <i class="fab fa-linkedin text-4xl text-blue-600"></i> DSC_McMaster
                                    </a>
                                </div>
                                <div className={mediaLinkStyle}>
                                    <a href="#" className="ml-5">
                                    <i class="fab fa-github text-4xl "></i> DSC_McMaster
                                    </a>
                                </div>
                                <div className={mediaLinkStyle}>
                                    <a href="#" className="ml-5">
                                        <i class="fab fa-twitter text-4xl text-blue-500"></i> DSC_McMaster
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5 sm:5/6 lg:w-1/3">
                        {/* <div className="flex"> */}
                            <div>
                                <img className={imageStyle} src={announce_freepik} alt="Designed by slidesgo/Freepik"></img>
                            </div>
                            {/* <div className="w-auto lg:w-1/2 ml-10 sm:ml-0">
                                <h1>Stay Connected</h1>
                                <h3 className="text-black text-opacity-50">Get the latest updates</h3>
                                <div className="hidden sm:block rounded-lg shadow-xl px-5 py-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Tellus cras adipiscing enim eu turpis egestas pretium aenean. Sodales neque sodales ut etiam.
                                </div>
                            </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
         </section>
    )
}

export default Media;