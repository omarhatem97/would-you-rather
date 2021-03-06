import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleSaveQuesiton } from "../actions/shared";
import Navigation from "./Navigation";

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

    this.props.dispatch(handleSaveQuesiton(this.props.authedUser,question)).then(() => {
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
          <div className="center">
            <div className="card">
              <div className="card-user-name">
                <p className="card-text">Create a New Poll</p>
              </div>
              <div>
                <p className="card-text comp-ques">Complete the question</p>
                <p className="would-you-rather">Would you rather</p>
                <input className="input"
                  placeholder="Enter Option One"
                  type="text"
                  id="OptionOne"
                  name="q"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                
                <p className="card-text">or</p>
                <input className="input"
                  placeholder="Enter Option Two"
                  type="text"
                  id="OptionTwo"
                  name="q"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <br></br>
              <button
                disabled={
                  !(this.state.value1.length && this.state.value2.length)
                }
                className="button"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      );
    }

    return toRender;
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(NewPoll);
