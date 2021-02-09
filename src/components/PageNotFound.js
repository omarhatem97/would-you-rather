import React, { Component } from "react";
import { Link } from "react-router-dom";


class PageNotFound extends Component {
  state = {};
  render() {
    return (
      <div className="centered">
        <p className="p404">404 </p>
        <p className="error">ERROR </p>
        <Link
            className="signinlink"
            to="/"
          >
            <button className="button">Back To Our Site</button>
            
          </Link>
      </div>
    );
  }
}

export default PageNotFound;
