import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import PollList from "./PollList";

class Dashboard extends Component {
  state = {
    unanswredPolls: [],
  };

  componentDidMount() {
    const unans = this.fetchUnanswered();
    this.setState({ unanswredPolls: unans });
  }

  fetchUnanswered = () => {
    const { authedUser, users, questions } = this.props;
    const answers = users[authedUser].answers;
    const answredKeys = Object.keys(answers);
    const questionsKeys = Object.keys(this.props.questions);
    let unanswred = questionsKeys.filter((k) => !answredKeys.includes(k));

    return unanswred;
  };
  render() {
    return (
      <div>
        <Navigation />
        <br></br>
        <PollList />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return { authedUser, users, questions };
}
export default connect(mapStateToProps)(Dashboard);
