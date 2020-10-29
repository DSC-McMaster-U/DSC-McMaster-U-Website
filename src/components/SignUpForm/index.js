import React, { Component } from "react";
import cx from "classnames";
import axios from "axios";
import Button from "../Button";
import { ACADEMIC_YEARS, TEAMS } from "./config";

const formUrl =
  "https://script.google.com/macros/s/AKfycbxaAM3uyL_avJPMm4SsjXUVs-TqorvKLFohkKy2cP1J2hZ14ZQ3/exec";

const inputClasses = {
  base: [
    "input-border-outline",
    "text-xl",
    "border-2",
    "h-12",
    "p-1",
    "bg-gray-300",
    "overflow-hidden",
    "shadow-lg",
    "block",
    "w-full",
  ],
};
const labelClasses = {
  base: ["text-xl"],
};
const ThankYou = () => (
  <div className="big-label">
    Thank You! You will receive an email from us shortly with more details.
  </div>
);

const InputField = ({ name, placeholder, onBlur, required, label }) => {
  return (
    <div className="w-full">
      <label className={cx(labelClasses.base)}>{label}</label>
      {required && <span className="text-red-500 text-xl">*</span>}
      <input
        className={cx(inputClasses.base)}
        type="text"
        name={name}
        alt={label}
        placeholder={placeholder}
        onBlur={onBlur}
        required={required}
      ></input>
    </div>
  );
};

const Select = ({ name, label, onBlur, children, required }) => (
  <div className="w-full">
    <label className={cx(labelClasses.base)} htmlFor={name}>
      {label}
      {required && <span className="text-red-500 text-xl">*</span>}
    </label>

    <select
      className={cx(inputClasses.base)}
      name={name}
      alt={label}
      onBlur={onBlur}
    >
      {children}
    </select>
  </div>
);

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      mac_id: "",
      program: "a",
      academic_year: "1",
      graduation: "",
      first_choice_team: "",
      second_choice_team: "",
      third_choice_team: "",
      submitted: false,
    };
  }

  onBlur = e => {
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

    document.getElementById("gform").reset();

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
    }).catch(error => console.log("The form did not submit"));

    this.setState({
      email: "",
      first_name: "",
      last_name: "",
      mac_id: "",
      program: "",
      academic_year: "",
      graduation: "",
      first_choice_team: "",
      second_choice_team: "",
      third_choice_team: "",
      submitted: true,
      requirements_met: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.submitted ? (
          <ThankYou />
        ) : (
          <div>
            <h1>Fill out the form to become a general member!</h1>
            <p>No expiry date.</p>
            <form
              className="form-color form-props"
              id="gform"
              onSubmit={this.onSubmit}
            >
              <div className="w-full md:w-3/4 px-4 mb-8">
                <InputField
                  name="email"
                  label="Email"
                  placeholder="@gmail.com, @mcmaster.ca, etc."
                  onBlur={this.onBlur}
                  required
                ></InputField>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <InputField
                  name="first_name"
                  label="First name"
                  onBlur={this.onBlur}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <InputField
                  name="last_name"
                  label="Last name"
                  onBlur={this.onBlur}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <InputField
                  name="mac_id"
                  label="Mac ID"
                  placeholder="e.g. muske7"
                  onBlur={this.onBlur}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <InputField
                  name="program"
                  label="Program"
                  onBlur={this.onBlur}
                  required
                />
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <Select
                  name="academic_year"
                  label="Academic year"
                  onBlur={this.onBlur}
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
                  placeholder="e.g. 2023"
                  onBlur={this.onBlur}
                  required
                />
              </div>
              <div className="team-preferences mb-8">
                <p id="tp-text">Select your top three team preferences</p>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <Select
                  name="first_choice_team"
                  label="1st choice"
                  onBlur={this.onBlur}
                >
                  {TEAMS.map(team => (
                    <option key={team} value={team}>
                      {team}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <Select
                  name="second_choice_team"
                  label="2nd choice"
                  onBlur={this.onBlur}
                >
                  {TEAMS.map(team => (
                    <option key={team} value={team}>
                      {team}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <Select
                  name="third_choice_team"
                  label="3rd choice"
                  onBlur={this.onBlur}
                >
                  {TEAMS.map(team => (
                    <option key={team} value={team}>
                      {team}
                    </option>
                  ))}
                </Select>
              </div>
              <Button bg="green" type="submit" alt="Submit" className="submit">
                Submit
              </Button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
