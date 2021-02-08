import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import { _getUsers, _getQuestions } from "../utils/_DATA";
import Dashboard from "./Dashboard";
import Poll from "./PollUnAnswered";
import PollAnswer from "./PollAnswer";
import NewPoll from "./NewPoll";
import { authedUser } from "../reducers/authedUser";

class App extends Component {
  componentDidMount() {
    console.log("in did mount!");
    const authedUser = this.props.authedUser ? authedUser : null;
    this.props.dispatch(handleInitialData(authedUser));
  }

  render() {
    console.log(this.props.authedUser)
    return (
      <Router>
        {this.props.authedUser === null ? (
          <Route path="/" exact component={Login} />
        ) : (
          <Fragment>
            <div>
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/poll" component={Poll} />
              <Route path="/newPoll" component={NewPoll} />
              <Route path="/questions/:question_id" component={PollAnswer} />
            </div>
          </Fragment>
        )}
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);
