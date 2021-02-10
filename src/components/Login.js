import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import setAuthedUser from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    selectedUser: "",
    selected: false,
  };

  handleAuthentication = () => {
    this.props.dispatch(setAuthedUser(this.state.selectedUser));

    this.setState({ selected: true });
  };

  onSelectUser = (selectedUser) => {
    if (selectedUser === "select") {
      this.setState({ selectedUser: "" });
    } else {
      this.setState({ selectedUser });
    }
  };

  render() {
    const { selectedUser } = this.state;
    // if (this.state.selected === true) {
    //   return <Redirect to="/" />;
    // }
    return (
      <Fragment>
        <div className="login">
          <div className="sigin-body">
            <div>
              <p className="title">Would You Rather - login</p>
            </div>
            <div>
              <label className="floatme">Select a user: </label>
              <div className="select">
                <select
                  className="select-bar"
                  onChange={(e) => this.onSelectUser(e.target.value)}
                >
                  <option value="select"> Select User</option>
                  {Object.keys(this.props.users).map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="button"
                disabled={!this.state.selectedUser.length}
                onClick={this.handleAuthentication}
              >
                SIGN IN
              </button>
            </div>
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
