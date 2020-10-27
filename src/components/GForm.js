import React, { Component, useState } from "react";
import axios from "axios";

// npm run format     to run prettier

const formUrl =
  "https://script.google.com/macros/s/AKfycbxaAM3uyL_avJPMm4SsjXUVs-TqorvKLFohkKy2cP1J2hZ14ZQ3/exec";

const ThankYou = () => <div>Thank You!</div>;

export default class GForm extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      email: '',
      first_name: '',
      last_name: '',
      mac_id: '',
      program: '',
      academic_year: '',
      graduation: '',
      first_choice_team: '',
      second_choice_team: '',
      third_choice_team: '',
      submitted: false,
      requirements_met: false,
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ requirements_met: this.isSubmittable() });
  };
  
  isSubmittable = () => {
    const [email, first_name, last_name, mac_id, program, academic_year, graduation] = this.state
    const state_array = [email, first_name, last_name, mac_id, program, academic_year, graduation]

    return state_array.indexOf('') === -1   
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
    }).catch(error => console.log("FAIL"));

    this.setState({
      email: '',
      first_name: '',
      last_name: '',
      mac_id: '',
      program: '',
      academic_year: '',
      graduation: '',
      first_choice_team: '',
      second_choice_team: '',
      third_choice_team: '',
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
                name="email"                
                className="big-input"
                alt="Email"
                onBlur={this.onChange}
                required
              />
            </label>

            <label className="small-label">
              First name<span className="red-asterisk"> *</span>
              <br></br>
              <input
                className="small-input"
                type="text"
                name="first_name"                
                alt="First name"
                onBlur={this.onChange}
                required
              />
            </label>
            <label className="small-label">
              Last name<span className="red-asterisk"> *</span>
              <br></br>
              <input
                className="small-input"
                type="text"
                name="last_name"                
                alt="Last name"
                onBlur={this.onChange}
                required
              />
            </label>

            <label className="big-label">
              Mac ID<span className="red-asterisk"> *</span>
              <br></br>
              <input
                type="text"
                name="mac_id"                
                className="big-input"
                alt="Mac ID"
                onBlur={this.onChange}
                required
              />
            </label>

            <label className="extra-small-label">
              Program<span className="red-asterisk"> *</span>
              <br></br>
              <input
                className="extra-small-input"
                type="text"
                name="program"                
                alt="Program"
                onBlur={this.onChange}
                required
              />
            </label>

            <label className="extra-small-label" htmlFor="year">
              Academic year<span className="red-asterisk"> *</span>
              <br></br>
              <select
                className="extra-small-input"
                name="academic_year"
                alt="Academic year"
                onBlur={this.onChange}
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
                name="graduation"                
                alt="Expected graduation"
                onBlur={this.onChange}
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
                name="first_choice_team"
                alt="1st choice"
                onBlur={this.onChange}
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
                name="second_choice_team"
                alt="2nd choice"
                onBlur={this.onChange}
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
                name="third_choice_team"
                alt="3rd choice"
                onBlur={this.onChange}
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
