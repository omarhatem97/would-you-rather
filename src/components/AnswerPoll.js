import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/shared";
import Navigation from "./Navigation";
import Result from "./results";
import { Redirect } from "react-router-dom";

class AnswerPoll extends Component {
  state = {
    submitted: false,
    value: "",
  };

  componentDidMount() {
    const { question_id, questions, authedUser, author, users } = this.props;
    const answers = Object.keys(users[authedUser].answers);
    if (answers.includes(question_id)) {
      this.setState({ submitted: true });
    }
  }

  handleSubmit = () => {
    const val = this.state.value;
    const { question_id, question, authedUser, author, users } = this.props;

    //todo save answer

    this.props
      .dispatch(handleSaveAnswer(authedUser, question_id, val))
      .then(() => {
        this.setState({ submitted: true });
      });
    //todo display result
  };

  handleValue = (e) => {
    const val = e.target.value;
    this.setState({ value: val });
  };

  render() {
    let card;
    const { question_id, questions, authedUser, author, users } = this.props;
    //check if qid is invalid
    if (questions[question_id] === undefined) {
      return <Redirect to="/notfound" />;
    }
    if (this.state.submitted === false) {
      card = (
        <div>
          <Navigation />
          <div className="center">
            <div className="card">
              <div className="card-user-name">
                {`${this.props.users[this.props.question.author].name} Asked`}
              </div>
              <div className="card-content">
                <div>
                  <img
                    className="img"
                    src={this.props.users[this.props.question.author].avatarURL}
                    alt="avatar logo"
                    align="center"
                    width="150px"
                    height="150px"
                  ></img>
                </div>
                <div className="card-question">
                  <p className="would-you-rather">Would you rather</p>
                  <input
                    type="radio"
                    id="OptionOne"
                    name="q"
                    value={"optionOne"}
                    onClick={this.handleValue}
                  />
                  <label className="card-text label-radio">
                    {this.props.question.optionOne.text}
                  </label>
                  <br></br>
                  <input
                    type="radio"
                    id="OptionTwo"
                    name="q"
                    value={"optionTwo"}
                    onClick={this.handleValue}
                  />
                  <label className="card-text label-radio">
                    {this.props.question.optionTwo.text}
                  </label>
                </div>
              </div>
              <div></div>

              <div>
                <button
                  className="button"
                  disabled={this.state.submitted}
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      card = (
        <div>
          <Navigation />
          <div className="center">
            <Result
              question={this.props.question}
              user={this.props.users[this.props.question.author]}
              answer={users[authedUser].answers[question_id]}
            />
          </div>
        </div>
      );
    }
    return (
      //todo display user image on the card
      <div>{card}</div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { question_id } = props.match.params;
  const question = questions[question_id];
  const author = question === undefined ? "" : question.author;

  return {
    question_id,
    question,
    authedUser,
    author,
    users,
    questions,
  };
}
export default connect(mapStateToProps)(AnswerPoll);
