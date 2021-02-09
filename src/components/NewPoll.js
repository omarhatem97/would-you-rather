import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { authedUser } from "../reducers/authedUser";
import { Link } from "react-router-dom";
import { handleSaveQuesiton } from "../actions/shared";
import { Redirect } from "react-router-dom";

class NewPoll extends Component {
  state = {
    value1: "",
    value2: "",
    submitted: false,
  };

  handleChange = (e) => {
    if (e.target.id === "OptionOne") {
      this.setState({ value1: e.target.value });
    } else {
      this.setState({ value2: e.target.value });
    }
  };

  handleSubmit = () => {
    
    //dispatch question
    const op1 = this.state.value1;
    const op2 = this.state.value2;
    const authedUser = this.props.authedUser;
    const question = {
      optionOneText: op1,
      optionTwoText: op2,
      author: authedUser,
    };

    this.props.dispatch(handleSaveQuesiton(question)).then(()=>{
        this.setState({ submitted: true });
    });    
  };

  render() {
    let toRender = null;
    if (this.state.submitted === true) {
      toRender = <Redirect to="/" />;
    } else {
      toRender = (
        <div>
          <Navigation />
          <div className="card">
            <div>
              <p>Create a New Poll</p>
              <p>Complete the question</p>
              <p>Would you rather</p>
            </div>
            <input
              placeholder="Enter Option One"
              type="text"
              id="OptionOne"
              name="q"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br></br>
            <p>OR</p>
            <input
              placeholder="Enter Option Two"
              type="text"
              id="OptionTwo"
              name="q"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br></br>
            <button
              disabled={!(this.state.value1.length && this.state.value2.length)}
              className="button"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      );
    }

    return toRender ;
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(NewPoll);
