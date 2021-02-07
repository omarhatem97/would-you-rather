import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/leaderBoard">
                LeaderBoard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/newPoll">
                New Poll
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <a>
              <img
                src={this.props.avatarURL}
                alt={`Avatar of ${this.props.authedUser}`}
                width="40"
                height="40"
                className="d-inline-block align-centre"
              />
              {this.props.authedUser}
            </a>
          </span>
          <span className="navbar-text">
            <a className="nav-link active" aria-current="page" href="/">
              Logout
            </a>
          </span>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const { id, avatarURL } = users[authedUser];
  return { authedUser, avatarURL };
}
export default connect(mapStateToProps)(Navigation);
