import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";


class PageNotFound extends Component {
  state = {};
  render() {
    return (
      <div className="centered">
        <p className="p404">404 </p>
        <p className="error">ERROR </p>
        <button className="button">
          <Link to="/">Back To Login</Link>
        </button>
      </div>
    );
  }
}

export default PageNotFound;
