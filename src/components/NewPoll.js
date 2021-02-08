import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { authedUser } from "../reducers/authedUser";
import { Link } from "react-router-dom";

class NewPoll extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div>
          <span>Create a New Poll</span>
          <span>Complete the question</span>
          <span>Would you rather</span>
        </div>
        <input
          type="text"
          id="OptionOne"
          name="q"
          value={this.props.question.optionOne.text}
          onClick={this.handleValue}
        />
        <input
          type="text"
          id="OptionTwo"
          name="q"
          value={this.props.question.optionOne.text}
          onClick={this.handleValue}
        />
      </div>
    );
  }
}

export default NewPoll;
