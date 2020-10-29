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
    "mt-2",
    "bg-gray-300",
    "overflow-hidden",
    "block",
    "w-full",
    "outline-none",
    "focus:shadow-outline-blue",
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
      <label className={cx(labelClasses.base)}>
        {label} {required && <span className="text-red-500 text-xl">*</span>}
      </label>

      <input
        className={cx(inputClasses.base)}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      ></input>
    </div>
  );
};

const Select = ({ name, label, onChange, children, required, value }) => (
  <div className="w-full">
    <label className={cx(labelClasses.base)} htmlFor={name}>
      {label}
      {required && <span className="text-red-500 text-xl">*</span>}
    </label>

    <select
      className={cx(inputClasses.base)}
      name={name}
      value={value}
      onChange={onChange}
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
      program: "",
      academic_year: ACADEMIC_YEARS[0],
      graduation: "",
      first_choice_team: TEAMS[0],
      second_choice_team: TEAMS[0],
      third_choice_team: TEAMS[0],
      submitted: false,
    };
  }

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
    }).catch(error => console.log("The form did not submit"));

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
    } = this.state;
    return (
      <div>
        {submitted ? (
          <ThankYou />
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
                ></InputField>
                {/*
                <InputField
                  name="email"
                  value={email}
                  label="Email"
                  placeholder="@gmail.com, @mcmaster.ca, etc."
                  onChange={this.onChange}
                  required
                ></InputField>*/}
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
              <div className="w-full md:w-1/2 px-4 mb-8">
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
              <div className="text-xl bg-blue-700 w-full mb-8 text-white">
                <p className="text-center m-auto p-8">
                  Select your top three team preferences
                </p>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
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
              <div className="w-full md:w-1/3 px-4 mb-8">
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
              <div className="w-full md:w-1/3 px-4 mb-8">
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
              <Button bg="green" type="submit" size="lg" className="ml-auto">
                Submit
              </Button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
