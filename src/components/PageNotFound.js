import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setAuthedUser from "../actions/authedUser";


class PageNotFound extends Component {
  
  handleBackButton = () => {
    this.props.dispatch(setAuthedUser(null));
  }

  render() {
    console.log("paganotfound rendered!");
    return (
      <div className="centered">
        <p className="p404">404 </p>
        <p className="error">ERROR </p>
        <Link className="signinlink" to="/">
          <button className="button" onClick={this.handleBackButton}>
            Back To Our Site
          </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(PageNotFound);
