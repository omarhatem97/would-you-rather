import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import PollList from "./PollList";

class Dashboard extends Component {
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

function mapStateToProps({ authedUser }) {
  return { authedUser };
}
export default connect(mapStateToProps)(Dashboard);
