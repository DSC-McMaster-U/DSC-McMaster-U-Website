import React, { Component } from "react";
import axios from "axios";

// npm run format     to run prettier

const formUrl =
  "https://script.google.com/macros/s/AKfycbxaAM3uyL_avJPMm4SsjXUVs-TqorvKLFohkKy2cP1J2hZ14ZQ3/exec";

const ThankYou = () => <div>Thank You!</div>;

export default class GForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeMacID = this.onChangeMacID.bind(this);
    this.onChangeProgram = this.onChangeProgram.bind(this);
    this.onChangeAcademicYear = this.onChangeAcademicYear.bind(this);
    this.onChangeGraduation = this.onChangeGraduation.bind(this);
    this.onChangeFirstChoiceTeam = this.onChangeFirstChoiceTeam.bind(this);
    this.onChangeSecondChoiceTeam = this.onChangeSecondChoiceTeam.bind(this);
    this.onChangeThirdChoiceTeam = this.onChangeThirdChoiceTeam.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
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
      submitted: false,
      requirements_met: false,
    };
  }

  onChangeEmail = e => {
    this.setState({ email: e.target.value });
    setTimeout(() => {
      this.buttonToggle();
    }, 100);
  };

  onChangeFirstName = e => {
    this.setState({ first_name: e.target.value });
    setTimeout(() => {
      this.buttonToggle();
    }, 100);
  };

  onChangeLastName = e => {
    this.setState({ last_name: e.target.value });
    setTimeout(() => {
      this.buttonToggle();
    }, 100);
  };

  onChangeMacID = e => {
    this.setState({ mac_id: e.target.value });
    setTimeout(() => {
      this.buttonToggle();
    }, 100);
  };

  onChangeProgram = e => {
    this.setState({ program: e.target.value });
    setTimeout(() => {
      this.buttonToggle();
    }, 100);
  };

  onChangeAcademicYear = e => {
    this.setState({ academic_year: e.target.value });
    setTimeout(() => {
      this.buttonToggle();
    }, 100);
  };

  onChangeGraduation = e => {
    this.setState({ graduation: e.target.value });
    setTimeout(() => {
      this.buttonToggle();
    }, 100);
  };

  onChangeFirstChoiceTeam(e) {
    this.setState({ first_choice_team: e.target.value });
  }

  onChangeSecondChoiceTeam(e) {
    this.setState({ second_choice_team: e.target.value });
  }

  onChangeThirdChoiceTeam(e) {
    this.setState({ third_choice_team: e.target.value });
  }

  buttonToggle = e => {
    this.state.email !== "" &&
    this.state.first_name !== "" &&
    this.state.last_name !== "" &&
    this.state.mac_id !== "" &&
    this.state.program !== "" &&
    this.state.academic_year !== "" &&
    this.state.academic_year !== "Choose an option" &&
    this.state.graduation !== ""
      ? this.setState({ requirements_met: true })
      : this.setState({ requirements_met: false });
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

    const local_time = new Date();

    const date =
      local_time.getDate() +
      "/" +
      (Number(local_time.getMonth()) + 1) +
      "/" +
      local_time.getFullYear() +
      " " +
      local_time.getHours() +
      ":" +
      local_time.getMinutes() +
      ":" +
      local_time.getSeconds();

    axios({
      method: "get",
      url:
        `${formUrl}` +
        `?Timestamp=${date}` +
        `&Email address=${encodeURIComponent(email)}` +
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
          <form className="form-color form-props" onSubmit={this.onSubmit}>
            <label className="big-label">
              Email<span className="red-asterisk"> *</span>
              <br></br>
              <input
                type="text"
                placeholder="Enter email"
                className="big-input"
                alt="Email"
                onBlur={this.onChangeEmail}
                required
              />
            </label>

            <label className="small-label">
              First name<span className="red-asterisk"> *</span>
              <br></br>
              <input
                className="small-input"
                type="text"
                placeholder="First name"
                alt="First name"
                onBlur={this.onChangeFirstName}
                required
              />
            </label>
            <label className="small-label">
              Last name<span className="red-asterisk"> *</span>
              <br></br>
              <input
                className="small-input"
                type="text"
                placeholder="Last name"
                alt="Last name"
                onBlur={this.onChangeLastName}
                required
              />
            </label>

            <label className="big-label">
              Mac ID<span className="red-asterisk"> *</span>
              <br></br>
              <input
                type="text"
                placeholder="e.g. muske7"
                className="big-input"
                alt="Mac ID"
                onBlur={this.onChangeMacID}
                required
              />
            </label>

            <label className="extra-small-label">
              Program<span className="red-asterisk"> *</span>
              <br></br>
              <input
                className="extra-small-input"
                type="text"
                placeholder="e.g. Health Sci"
                alt="Program"
                onBlur={this.onChangeProgram}
                required
              />
            </label>

            <label className="extra-small-label" htmlFor="year">
              Academic year<span className="red-asterisk"> *</span>
              <br></br>
              <select
                className="extra-small-input"
                name="year"
                alt="Academic year"
                onBlur={this.onChangeAcademicYear}
                required
              >
                <option value="">Choose an option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="Grad school">Grad school</option>
              </select>
            </label>

            <label className="extra-small-label">
              Expected graduation<span className="red-asterisk"> *</span>
              <br></br>
              <input
                className="extra-small-input"
                type="text"
                placeholder="Graduation year"
                alt="Expected graduation"
                onBlur={this.onChangeGraduation}
                required
              />
            </label>

            <div className="team-preferences">
              <p id="tp-text">Select your top three team preferences</p>
            </div>

            <label className="extra-small-label" htmlFor="year">
              1st choice
              <br></br>
              <select
                className="extra-small-input"
                name="year"
                alt="1st choice"
                onBlur={this.onChangeFirstChoiceTeam}
              >
                <option>Choose an option</option>
                <option>Outreach</option>
                <option>Marketing & Branding</option>
                <option>External Relations</option>
                <option>Workshops & Talks</option>
                <option>Community & Code</option>
              </select>
            </label>

            <label className="extra-small-label" htmlFor="year">
              2nd choice
              <br></br>
              <select
                className="extra-small-input"
                name="year"
                alt="2nd choice"
                onBlur={this.onChangeSecondChoiceTeam}
              >
                <option>Choose an option</option>
                <option>Outreach</option>
                <option>Marketing & Branding</option>
                <option>External Relations</option>
                <option>Workshops & Talks</option>
                <option>Community & Code</option>
              </select>
            </label>

            <label className="extra-small-label" htmlFor="year">
              3rd choice
              <br></br>
              <select
                className="extra-small-input"
                name="year"
                alt="3rd choice"
                onBlur={this.onChangeThirdChoiceTeam}
              >
                <option>Choose an option</option>
                <option>Outreach</option>
                <option>Marketing & Branding</option>
                <option>External Relations</option>
                <option>Workshops & Talks</option>
                <option>Community & Code</option>
              </select>
            </label>
            <br></br>

            <button
              type="submit"
              value="Submit"
              className="submit"
              alt="Submit"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}
