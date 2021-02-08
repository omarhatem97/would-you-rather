import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { authedUser } from "../reducers/authedUser";
import Result from "./results";
import { handleSaveAnswer } from "../actions/shared";

class PollAnswer extends Component {
  state = {
    submitted: false,
    value: "",
  };

  componentDidMount() {
    const { question_id, question, authedUser, author, users } = this.props;
    const answers = Object.keys(users[authedUser].answers);
    if(answers.includes(question_id)){
      this.setState({submitted:true})
    }
  }

  handleSubmit = () => {
    const val = this.state.value;
    const { question_id, question, authedUser, author, users } = this.props;
    this.setState({ submitted: true });
    //todo save answer
    console.log(question_id);
    this.props.dispatch(handleSaveAnswer(authedUser, question_id, val));
    //todo display result
  };

  handleValue = (e) => {
    const val = e.target.value;
    this.setState({ value: val });
  };

  render() {
    let card;
    const { question_id, question, authedUser, author, users } = this.props;
    if (this.state.submitted === false) {
      card = (
        <div className="card">
          <div>{`${
            this.props.users[this.props.question.author].name
          }   Asked`}</div>
          <div>
            <img
              src={this.props.users[this.props.question.author].avatarURL}
              alt="avatar logo"
              align="center"
              width="150px"
              height="150px"
            ></img>
          </div>

          <div>
            <p>Would you rather</p>
            <input
              type="radio"
              id="OptionOne"
              name="q"
              value={"optionOne"}
              onClick={this.handleValue}
            />
            <label>{this.props.question.optionOne.text}</label>
            <br></br>
            or
            <br></br>
            <input
              type="radio"
              id="OptionTwo"
              name="q"
              value={"optionTwo"}
              onClick={this.handleValue}
            />
            <label>{this.props.question.optionTwo.text}</label>
          </div>
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
      );
    } else {
      card = (
        <Result
          question={this.props.question}
          user={this.props.users[this.props.question.author]}
          answer={users[authedUser].answers[question_id]}
        />
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
  const author = question.author;
  return {
    question_id,
    question,
    authedUser,
    author,
    users,
  };
}
export default connect(mapStateToProps)(PollAnswer);
