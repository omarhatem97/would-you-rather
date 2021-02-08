import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import setAuthedUser from "../actions/authedUser";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    selectedUser: "",
  };

 
  handleAuthentication = () => {
    this.props.dispatch(setAuthedUser(this.state.selectedUser));
  };

  onSelectUser = (selectedUser) => this.setState({ selectedUser });

  render() {
    const { selectedUser } = this.state;
    // console.log(this.props.users);
    return (
      <Fragment>
        <div>
          <div>
            <p>Would You Rather - login</p>
          </div>
          <div>
            <label>Select a user: </label>
            <div>
              <select onChange={(e) => this.onSelectUser(e.target.value)}>
                <option> Select User</option>
                {Object.keys(this.props.users).map((user) => (
                  <option key={user} value={user}>
                    {user}
                  </option>
                ))}
              </select>
            </div>
            <Link to="/dashboard" onClick={this.handleAuthentication}>
              SIGN IN
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Login);
