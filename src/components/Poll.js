import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { authedUser } from "../reducers/authedUser";

class Poll extends Component {
  state = {};
  render() {
    return (
        //todo display user image on the card
      <div className="card">
        <div>
          {this.props.user}
          asks
        </div>
        <div>
          <p>Would you rather</p>
          {this.props.question.optionOne.text}
          <br></br>
          or
          <br></br>
          {this.props.question.optionTwo.text}
        </div>
        <div>
            <button className="button">
                Answer Poll
            </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }, { user, question }) {
  return {
    authedUser,
    user,
    question,
  };
}
export default connect(mapStateToProps)(Poll);
