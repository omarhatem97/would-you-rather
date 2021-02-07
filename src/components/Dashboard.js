import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { _getUsers, _getQuestions } from "../utils/_DATA";



class Dashboard extends Component {

    render() { 
        console.log(this.props.authedUser);
        return ( <p>shi arfana mn 7yatha</p> );
    }
}

function mapStateToProps({ authedUser }) {
    return { authedUser };
  }
export default connect(mapStateToProps)(Dashboard);