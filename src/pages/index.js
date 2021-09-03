import React from "react";
import Layout from "../layouts";
import About from "../components/About";
import Socials from "../components/Socials";
import Splash from "../components/Splash";
import Events from "../components/Events";
import Navbar from "../components/Navbar";

const links = ["About", "Events", "Socials"];
const IndexPage = () => {
  return (
    <Layout page="Home">
      <Navbar links={links} />
      <Splash />
      <About />
      <Events />
      <Socials last />
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
        rel="stylesheet"
        type="text/css"
      />
      <style type="text/css">
        #mc_embed_signup /* Add your own Mailchimp form style overrides in your
        site stylesheet or in this style block. We recommend moving this block
        and the preceding CSS link to the HEAD of your HTML file. */
      </style>
      <div id="mc_embed_signup">
        <form
          action="https://dev.us5.list-manage.com/subscribe/post?u=3b2fa7f815202cd2305c5b41e&amp;id=b7c4bf4434"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to our mailing list!</h2>
            <div class="indicates-required">
              <span class="asterisk">*</span> indicates required
            </div>
            <div class="mc-field-group">
              <label for="mce-FNAME">
                First Name <span class="asterisk">*</span>
              </label>
              <input
                type="text"
                value=""
                name="FNAME"
                class="required"
                id="mce-FNAME"
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-LNAME">
                Last Name <span class="asterisk">*</span>
              </label>
              <input
                type="text"
                value=""
                name="LNAME"
                class="required"
                id="mce-LNAME"
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL">
                Email Address (McMaster email address preferred){" "}
                <span class="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
              />
            </div>
            <div id="mce-responses" class="clear">
              <div
                class="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              style={{ position: "absolute; left: -5000px;" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_3b2fa7f815202cd2305c5b41e_b7c4bf4434"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default IndexPage;
