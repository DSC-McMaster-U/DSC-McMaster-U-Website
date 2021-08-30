import axios from "axios";
import cx from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { Component } from "react";
import Reaptcha from "reaptcha";
import Button from "../Button";
import Typography from "../Typography";
import { ACADEMIC_YEARS, TEAMS } from "./content";

const discord = {
  icon: "fab fa-discord",
  url: "https://discord.com/invite/KxUCq7U",
  color: "text-blue-400",
};

const formUrl =
  "https://script.google.com/macros/s/AKfycbxaAM3uyL_avJPMm4SsjXUVs-TqorvKLFohkKy2cP1J2hZ14ZQ3/exec";

const inputClasses = {
  base: [
    "input-border-outline",
    "text-xl",
    "border-2",
    "rounded",
    "h-12",
    "pl-4",
    "mt-2",
    "overflow-hidden",
    "block",
    "w-full",
    "outline-none",
    "border-gray-400",
    "placeholder-gray-500",
    "focus:outline-none",
    "focus:ring-4",
    "focus:border-blue-400",
    "focus:border-transparent",
  ],
};
const labelClasses = {
  base: ["text-lg", "text-gray-700"],
};

const ThankYou = () => {
  const qlImage = GetQuery();
  return (
    <div className="text-center">
      <h1 className="text-5xl mb-5">Thank You!</h1>
      <Typography>
        You will receive an email from us shortly with more details.
      </Typography>
      <div
        className="md:w-6/12 w-full h-full object-center mx-auto p-10"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <Img
          fluid={qlImage.thankyouimage.childImageSharp.fluid}
          alt="Mail Sent"
          objectPosition="100% 100%"
        />
      </div>
      <Typography>
        In the meanwhile, please request to join our community discord channel
      </Typography>
      <div className="text-6xl md:mb-0">
        <a
          href={discord.url}
          className={cx(discord.color, "hover:text-blue-600")}
        >
          <i className={cx(discord.icon)}></i>
          <Typography className="text-blue-600">Join Server</Typography>
        </a>
      </div>
    </div>
  );
};

const GetQuery = () => {
  const images = useStaticQuery(graphql`
    query qlImage {
      thankyouimage: file(relativePath: { eq: "thankyou.png" }) {
        id
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      errorimage: file(relativePath: { eq: "error.png" }) {
        id
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return images;
};
const FailedSubmission = () => {
  const qlImage = GetQuery();
  return (
    <div className="text-center">
      <h1 className="text-5xl mb-5">Something went wrong!</h1>
      <div className="mb-8 text-center sm:w-3/4 mx-auto">
        <Typography>Your application was not submitted.</Typography>
        <Typography>
          Please refresh and try again or use our{" "}
          {
            <Button
              size="sm"
              node="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLScjcm8b9ay0-JFcANSH_-A19zO7-KZK40_ppwO2Pno88eTh7A/viewform"
              variant="outline"
              className="ml-2"
            >
              Old Form
            </Button>
          }
        </Typography>
      </div>
      <div
        className="lg:w-6/12 md:w-8/12 w-full h-full object-center mx-auto pb-10"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <Img
          fluid={qlImage.errorimage.childImageSharp.fluid}
          alt="Mail Sent"
          objectPosition="100% 100%"
        />
      </div>
    </div>
  );
};

const InputField = ({
  name,
  placeholder,
  onChange,
  required,
  label,
  value,
}) => {
  return (
    <div className="w-full">
      <label className={cx(labelClasses.base)} htmlFor={name}>
        {label} {required && <span className="text-red-500 text-xl">*</span>}
        <input
          className={cx(inputClasses.base)}
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
        />
      </label>
    </div>
  );
};

const Select = ({ name, label, onChange, children, required, value }) => (
  <div className="w-full">
    <label className={cx(labelClasses.base)} htmlFor={name}>
      {label}
      {required && <span className="text-red-800 text-xl">*</span>}
      <select
        className={cx(inputClasses.base)}
        name={name}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
    </label>
  </div>
);

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.captcha = null;

    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      mac_id: "",
      program: "",
      academic_year: ACADEMIC_YEARS[0],
      graduation: "",
      first_choice_team: TEAMS[0],
      second_choice_team: TEAMS[0],
      third_choice_team: TEAMS[0],
      submitted: false,
      captchaReady: false,
      notABot: false,
      errorFound: false,
    };
  }

  onLoad = () => {
    this.setState({
      captchaReady: true,
    });

    this.captcha.renderExplicitly();
  };

  onVerify = () => {
    this.setState({
      notABot: true,
    });
  };

  onExpire = () => {
    this.captcha.reset();

    this.setState({
      notABot: false,
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      first_name,
      email,
      last_name,
      mac_id,
      program,
      academic_year,
      graduation,
      first_choice_team,
      second_choice_team,
      third_choice_team,
    } = this.state;

    axios({
      method: "get",
      url:
        `${formUrl}` +
        `?Email address=${encodeURIComponent(email)}` +
        `&First and Last Name=${encodeURIComponent(
          first_name + " " + last_name
        )}` +
        `&Mac ID=${encodeURIComponent(mac_id)}` +
        `&Program=${encodeURIComponent(program)}` +
        `&Academic year=${encodeURIComponent(academic_year)}` +
        `&Expected Graduation=${encodeURIComponent(graduation)}` +
        `&Select your top 3 team preferences. [1st choice]=${encodeURIComponent(
          first_choice_team
        )}` +
        `&Select your top 3 team preferences. [2nd choice]=${encodeURIComponent(
          second_choice_team
        )}` +
        `&Select your top 3 team preferences. [3rd choice]=${encodeURIComponent(
          third_choice_team
        )}`,
    }).catch(error =>
      this.setState({
        errorFound: true,
      })
    );

    this.setState({
      email: "",
      first_name: "",
      last_name: "",
      mac_id: "",
      program: "",
      academic_year: ACADEMIC_YEARS[0],
      graduation: "",
      first_choice_team: TEAMS[0],
      second_choice_team: TEAMS[0],
      third_choice_team: TEAMS[0],
      submitted: true,
    });
  };

  render() {
    const {
      email,
      first_name,
      last_name,
      mac_id,
      program,
      academic_year,
      graduation,
      first_choice_team,
      second_choice_team,
      third_choice_team,
      submitted,
      errorFound,
    } = this.state;
    return (
      <div>
        {submitted ? (
          <div>{errorFound ? <FailedSubmission /> : <ThankYou />}</div>
        ) : (
          <div>
            <div className="mb-8 text-center lg:w-3/4 mx-auto mt-8">
              <Typography variant="h1">Join us!</Typography>
              <Typography>
                To become a general member, complete and submit the form below.
                By submitting this form you will indicate which of our 5 teams
                you prefer to be placed in, and will be invited to join our
                Discord server. By being a general member, you will get the
                chance to work with the team behind DSC McMaster U and help
                organize club events and activities! You'll join a community of
                about 300 students all with the same passion of technology and
                coding.
              </Typography>
            </div>

            <div
              className="lg:w-3/4 mx-auto"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-offset="-200"
              data-aos-once="true"
            >
              <div className="relative top-0 left-0 w-full h-0 flex">
                <div className="h-3 bg-blue-400 flex-1"></div>
                <div className="h-3 bg-red-400 flex-1"></div>
                <div className="h-3 bg-yellow-400 flex-1"></div>
                <div className="h-3 bg-green-400 flex-1"></div>
              </div>
              <div className="shadow-2xl px-4 py-8">
                <h2 className="text-3xl mb-8 mt-4 px-4">General Member Form</h2>
                <form
                  className="flex flex-wrap rounded overflow-hidden"
                  onSubmit={this.onSubmit}
                >
                  <div className="w-full md:w-1/2 px-4 mb-8">
                    <InputField
                      name="first_name"
                      label="First name"
                      value={first_name}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-8">
                    <InputField
                      name="last_name"
                      label="Last name"
                      value={last_name}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-8">
                    <InputField
                      name="email"
                      value={email}
                      label="Email"
                      placeholder="@gmail.com, @mcmaster.ca, etc."
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-8">
                    <InputField
                      name="mac_id"
                      label="Mac ID"
                      value={mac_id}
                      placeholder="e.g. muske7"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-4 mb-8">
                    <InputField
                      name="program"
                      label="Program"
                      value={program}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-4 mb-8">
                    <Select
                      name="academic_year"
                      label="Academic year"
                      value={academic_year}
                      onChange={this.onChange}
                      required
                    >
                      {ACADEMIC_YEARS.map(academic_year => (
                        <option key={academic_year}>{academic_year}</option>
                      ))}
                    </Select>
                  </div>
                  <div className="w-full md:w-1/3 px-4 mb-8">
                    <InputField
                      name="graduation"
                      label="Expected graduation"
                      value={graduation}
                      placeholder="e.g. 2023"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div class="w-full relative mt-10 h-1 bg-gray-500">
                    <div class="relative left-0 top-0 flex justify-center w-full -mt-2">
                      <span class="bg-white px-4 text-lg text-gray-700 uppercase font-semibold">
                        Select your top three team preferences
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 px-4 mb-16 pt-12">
                    <Select
                      name="first_choice_team"
                      label="1st choice"
                      value={first_choice_team}
                      onChange={this.onChange}
                    >
                      {TEAMS.map(team => (
                        <option key={team} value={team}>
                          {team}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="w-full md:w-1/3 px-4 mb-16 pt-12">
                    <Select
                      name="second_choice_team"
                      label="2nd choice"
                      value={second_choice_team}
                      onChange={this.onChange}
                    >
                      {TEAMS.map(team => (
                        <option key={team} value={team}>
                          {team}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="w-full md:w-1/3 px-4 mb-16 pt-12">
                    <Select
                      name="third_choice_team"
                      label="3rd choice"
                      value={third_choice_team}
                      onChange={this.onChange}
                    >
                      {TEAMS.map(team => (
                        <option key={team} value={team}>
                          {team}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div className="ml-16 w-4/9 mt-4">
                    <Reaptcha
                      ref={e => (this.captcha = e)}
                      sitekey="6LceNOQZAAAAAAkq5YAljpujgj0pujsJ9pnKL6Sw"
                      onLoad={this.onLoad}
                      onVerify={this.onVerify}
                      onExpire={this.onExpire}
                      explicit
                    />
                  </div>

                  <Button
                    bg="green"
                    type="submit"
                    size="lg"
                    className="mr-auto sm:ml-4 w-11/12 md:ml-8 md:w-5/12 lg:w-5/12 xl:w-5/12 px-16 mt-8 mb-4"
                    disabled={!this.state.notABot}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
