import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { authedUser } from "../reducers/authedUser";
import { Link } from "react-router-dom";

class PollCard extends Component {
  state = {};
  render() {
    console.log(this.props.user);
    return (
      //todo display user image on the card

      <div className="card">
        <div className="card-user-name">{`${this.props.user.name} asks`}</div>
        <div>
          <div className="card-content">
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
            <div className="card-question">
              <p className="would-you-rather">Would you rather</p>
              <p className="card-text">{this.props.question.optionOne.text}</p>

              <p className="card-text">or</p>

              <p className="card-text">{this.props.question.optionTwo.text}</p>
            </div>
          </div>
        </div>
        <div>
          <Link
            className="signinlink"
            to={`/questions/${this.props.question.id}`}
          >
            <button className="button">{this.props.buttonName}</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }, { user, question, buttonName }) {
  return {
    authedUser,
    user,
    question,
    buttonName,
  };
}
export default connect(mapStateToProps)(PollCard);
