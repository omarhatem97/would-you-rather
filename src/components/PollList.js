import React, { Component } from "react";
import { connect } from "react-redux";

import PollCard from "./PollCard";

class PollList extends Component {
  state = {
    answered: false,
    answeredPolls: [],
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
    const questionsKeys = Object.keys(questions);
    //sort them
    questionsKeys.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );
    let unanswred = questionsKeys.filter((k) => !answredKeys.includes(k));

    return unanswred;
  };

  fetchAnswered = () => {
    const { authedUser, users, questions } = this.props;
    const answers = users[authedUser].answers;
    const answredKeys = Object.keys(answers);
    //sort them
    answredKeys.sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    return answredKeys;
  };

  handleAnswered = (e) => {
    const id = e.target.id;
    if (id == "answered") {
      this.setState({ answered: true });
      //get unanswred polls
      const answredPolls = this.fetchAnswered();
      this.setState({ answeredPolls: answredPolls });
    } else {
      this.setState({ answered: false });
      const unansweredP = this.fetchUnanswered();
      this.setState({ unanswredPolls: unansweredP });
    }
  };

  render() {
    const { answered, answeredPolls, unanswredPolls } = this.state;
    const { authedUser, users, questions } = this.props;
    return (
      <div>
        <div className="center">
          <button
            type="button"
            className="button un-answered-but"
            id="unanswred"
            onClick={this.handleAnswered}
          >
            Un Answered
          </button>
          <button
            type="button"
            className="button answered-but"
            id="answered"
            onClick={this.handleAnswered}
          >
            Answered
          </button>
        </div>
        <div>
          <br></br>
          {/* render the list of unanswered polls */}
          {this.state.answered === false && (
            <div className="center">
              <ul>
                {unanswredPolls.map((e) => {
                  return (
                    <li className="li" key={e}>
                      <PollCard
                        user={users[questions[e].author]}
                        question={questions[e]}
                        buttonName="Answer Poll"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* render the list of unanswered polls */}
          {this.state.answered === true && (
            <div className="center">
              <ul>
                {answeredPolls.map((e) => {
                  return (
                    <li className="li" key={e}>
                      <PollCard
                        user={users[questions[e].author]}
                        question={questions[e]}
                        buttonName="Results"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
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
