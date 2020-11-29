import React, { Component } from "react";
import cx from "classnames";
import axios from "axios";
import Button from "../Button";
import { ACADEMIC_YEARS, TEAMS } from "./config";
import Reaptcha from "reaptcha";


const discord = { icon: "fab fa-discord", url: "https://discord.com/invite/KxUCq7U", color: "text-blue-400" }

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
    "bg-gray-300",
    "shadow-md",
    "overflow-hidden",
    "block",
    "w-full",
    "outline-none",
    "focus:shadow-outline-blue",
    "placeholder-gray-800",
  ],
};
const labelClasses = {
  base: ["text-lg"],
};
const ThankYou = () => (
  <div>
    <p>Thank You! You will receive an email from us shortly with more details.</p>
    <br></br>
    <p>Please request acceptance to our community discord channel here.</p>
    <div className="px-10 text-6xl mb-5 md:mb-0">
      <a href={discord.url}>
        <i className={cx(discord.icon, discord.color)}></i>
      </a>
    </div>      
  </div>
);

const FailedSubmission = () => (
  <h1 className="text-red-800 text-xl">
    Something happened and your application was not submitted. Please try again
    or use our old form.
    <br></br>
    <br></br>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLScjcm8b9ay0-JFcANSH_-A19zO7-KZK40_ppwO2Pno88eTh7A/viewform"
      className="text-blue-800 text-xl"
      target="_blank"
      rel="noopener noreferrer"
    >
      Old form
    </a>
  </h1>
);

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
        {label} {required && <span className="text-red-800 text-xl">*</span>}
        <input
          className={cx(inputClasses.base)}
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
        ></input>
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

export default class SignUp extends Component {
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
    this.captcha.reset()

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
            <h1 className="font-bold">Join us!</h1>
            <p className="mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque lorem mauris, posuere id lectus ut, dapibus porttitor
              lacus. Cras rhoncus id augue nec rutrum. Nullam tellus sem,
              pretium et sodales in, convallis sit amet erat. Aliquam erat
              volutpat.
            </p>
            <div className="lg:w-3/4">
              <form
                className="flex flex-wrap rounded overflow-hidden shadow-2xl p-4"
                onSubmit={this.onSubmit}
              >
                <div className="w-full md:w-3/4 px-4 mb-8">
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
                <div className="w-full md:w-3/4 px-4 mb-8">
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
                <div className="w-full text-xl bg-blue-500 shadow-xl text-white mt-8 mb-12">
                  <p className="text-center m-auto p-8">
                    Select your top three team preferences
                  </p>
                </div>
                <div className="w-full md:w-1/3 px-4 mb-16">
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
                <div className="w-full md:w-1/3 px-4 mb-16">
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
                <div className="w-full md:w-1/3 px-4 mb-16">
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
                  className="mr-auto sm:ml-4 w-11/12 md:ml-8 md:w-5/12 lg:w-5/12 xl:w-5/12 px-16 mt-8 mb-2"
                  disabled={this.state.notABot ? false : true}                  
                  float
                >
                  Submit
                </Button>
                

                
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
