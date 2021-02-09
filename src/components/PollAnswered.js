import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { authedUser } from "../reducers/authedUser";
import { Link } from "react-router-dom";

class PollAnswered extends Component {
  state = {};
  render() {
    console.log(this.props.user);
    return (
      //todo display user image on the card

      <div className="card">
        <div>
          {this.props.user.name}
          asks
        </div>
        <div>
          <img
            className="img"
            src={this.props.user.avatarURL}
            alt="avatar logo"
            align="center"
            width="150px"
            height="150px"
          ></img>
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
          <button className="navigate">
            <Link
              className="signinlink"
              to={`/questions/${this.props.question.id}`}
            >
              View Results
            </Link>
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
export default connect(mapStateToProps)(PollAnswered);
