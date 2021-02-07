import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { authedUser } from "../reducers/authedUser";

class PollList extends Component {
  state = {
    answered: false,
  };

  fetchUnanswered = () => {
    const { authedUser, users, questions } = this.props;
    const answers = users[authedUser].answers;
    const answredKeys = Object.keys(answers);
    const questionsKeys = Object.keys(this.props.questions);
    let unanswred = questionsKeys.filter((k) => !answredKeys.includes(k));

    return unanswred;
  };

  fetchAnswered = () => {
    const { authedUser, users, questions } = this.props;
    const answers = users[authedUser].answers;
    const answredKeys = Object.keys(answers);
    const questionsKeys = Object.keys(this.props.questions);
    let unanswred = questionsKeys.filter((k) => !answredKeys.includes(k));

    return unanswred;
  };

  handleAnswered = (e) => {
    const id = e.target.id;
    if (id == "answered") {
      this.setState({ answered: true });
      //get unanswred polls
      this.fetchAnswered()
      
    } else {
      this.setState({ answered: false });
      this.fetchUnanswered();
    }
  };

  render() {
    return (
      <div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            id="answered"
            onClick={this.handleAnswered}
          >
            Answered
          </button>
          <button
            type="button"
            className="btn btn-primary"
            id="unanswred"
            onClick={this.handleAnswered}
          >
            Un Answered
          </button>
        </div>
        <div>
          <br></br>
          {this.state.answered ? <p>omar</p> : <p>hatem</p>}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions,
  };
}
export default connect(mapStateToProps)(PollList);
