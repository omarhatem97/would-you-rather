import React, { Component} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import setAuthedUser from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class Navigation extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
    return <Redirect to="/" />;
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/leaderboard">
                LeaderBoard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/add">
                New Poll
              </Link>
            </li>
          </ul>

            <div>
              <img
                src={this.props.avatarURL}
                alt={`Avatar of ${this.props.authedUser}`}
                width="40"
                height="40"
                className="img"
              />
              <span className="username">{this.props.users[this.props.authedUser].name}</span>
            </div>

          
          <button className="nav-item" onClick={this.handleLogout}>
            <Link className="nav-link active" to="/" onClick={this.handleLogout}>Logout</Link>
            
          </button>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const { avatarURL } = users[authedUser];
  return { authedUser, avatarURL, users };
}
export default connect(mapStateToProps)(Navigation);
