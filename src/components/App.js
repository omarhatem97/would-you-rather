import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import { _getUsers, _getQuestions } from "../utils/_DATA";
import Dashboard from './Dashboard'
import Poll from './Poll'

class App extends Component {
  componentDidMount() {
    console.log('in did mount!');
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/poll" component={Poll} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);

