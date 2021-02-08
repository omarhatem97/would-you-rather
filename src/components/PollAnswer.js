import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { authedUser } from "../reducers/authedUser";

class PollAnswer extends Component {
  state = {
    submitted:false,
    value:""
  };

  componentDidMount() {}

  handleSubmit = () =>{
      const val = this.state.value
      this.setState({submitted:true})
      //todo save answer
        
      //todo display result
  }

  handleValue = (e)=>{
    const val = e.target.value;
    this.setState({value:val})
  }

  render() {
    console.log(this.props.question_id);
    return (
      //todo display user image on the card
      <div className="card">
        <div>
          {this.props.author}
          asks
        </div>
        <div>
          <p>Would you rather</p>
          <input
            type="radio"
            id="OptionOne"
            name="q"
            value={this.props.question.optionOne.text}
            onClick= {this.handleValue}
          />
          <label >{this.props.question.optionOne.text}</label>
          <br></br>
          or
          <br></br>
          <input
            type="radio"
            id="OptionTwo"
            name="q"
            value={this.props.question.optionTwo.text}
            onClick= {this.handleValue}
          />
          <label>{this.props.question.optionTwo.text}</label>
        </div>
        <div>
          <button className="button" disabled={this.state.submitted} onClick={this.handleSubmit}>
            Answer Poll
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { question_id } = props.match.params;
  const question = questions[question_id];
  const author = question.author;
  return {
    question,
    authedUser,
    author,
  };
}
export default connect(mapStateToProps)(PollAnswer);
