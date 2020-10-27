import React, { Component } from "react";
import axios from "axios";
import Button from "./Button";

// npm run format     to run prettier

const formUrl =
  "https://script.google.com/macros/s/AKfycbxaAM3uyL_avJPMm4SsjXUVs-TqorvKLFohkKy2cP1J2hZ14ZQ3/exec";

const ThankYou = () => (
  <div className="big-label">
    Thank You! You will receive an email from us shortly with more details.
  </div>
);

const BigInputField = ({ name, alt, placeholder = "", func }) => (
  <label className="big-label">
    {alt}
    <span className="red-asterisk"> *</span>
    <br></br>
    <input
      className="big-input"
      type="text"
      name={name}
      alt={alt}
      placeholder={placeholder}
      onBlur={func}
      required
    />
  </label>
);

const SmallInputField = ({ name, alt, placeholder = "", func }) => (
  <label className="small-label">
    {alt}
    <span className="red-asterisk"> *</span>
    <br></br>
    <input
      className="small-input"
      type="text"
      name={name}
      alt={alt}
      placeholder={placeholder}
      onBlur={func}
      required
    />
  </label>
);

const ExtraSmallInputField = ({ name, alt, placeholder = "", func }) => (
  <label className="extra-small-label">
    {alt}
    <span className="red-asterisk"> *</span>
    <br></br>
    <input
      className="extra-small-input"
      type="text"
      name={name}
      alt={alt}
      placeholder={placeholder}
      onBlur={func}
      required
    />
  </label>
);

const ExtraSmallTeamSelect = ({ name, alt, func }) => (
  <label className="extra-small-label" htmlFor="year">
    {alt}
    <br></br>
    <select className="extra-small-input" name={name} alt={alt} onBlur={func}>
      <option>Choose an option</option>
      <option>Outreach</option>
      <option>Marketing & Branding</option>
      <option>External Relations</option>
      <option>Workshops & Talks</option>
      <option>Community & Code</option>
    </select>
  </label>
);

const ExtraSmallYearSelect = ({ name, alt, func }) => (
  <label className="extra-small-label" htmlFor="year">
    {alt}
    <span className="red-asterisk"> *</span>
    <br></br>
    <select className="extra-small-input" name={name} alt={alt} onBlur={func}>      
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>Grad school</option>
    </select>
  </label>
);

export default class GForm extends Component {
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

    document.getElementById('gform').reset()

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
    }).catch(error => console.log("FAIL"));

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
            <form className="form-color form-props" id="gform" onSubmit={this.onSubmit}>
              <BigInputField
                name="email"
                alt="Email"
                placeholder="@gmail.com, @mcmaster.ca, etc."
                func={this.onChange}
              />
              <SmallInputField
                name="first_name"
                alt="First name"
                func={this.onChange}
              />
              <SmallInputField
                name="last_name"
                alt="Last name"
                func={this.onChange}
              />
              <BigInputField
                name="mac_id"
                alt="Mac ID"
                placeholder="e.g. muske7"
                func={this.onChange}
              />
              <ExtraSmallInputField
                name="program"
                alt="Program"
                func={this.onChange}
              />

              <ExtraSmallYearSelect
                name="academic_year"
                alt="Academic year"
                func={this.onChange}
              />

              <ExtraSmallInputField
                name="graduation"
                alt="Expected graduation"
                placeholder="e.g. 2023"
                func={this.onChange}
              />

              <div className="team-preferences">
                <p id="tp-text">Select your top three team preferences</p>
              </div>

              <ExtraSmallTeamSelect
                name="first_choice_team"
                alt="1st choice"
                func={this.onChange}
              />

              <ExtraSmallTeamSelect
                name="second_choice_team"
                alt="2nd choice"
                func={this.onChange}
              />

              <ExtraSmallTeamSelect
                name="third_choice_team"
                alt="3rd choice"
                func={this.onChange}
              />
              <br></br>

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
