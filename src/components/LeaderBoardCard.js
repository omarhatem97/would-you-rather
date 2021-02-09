import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

class LeaderBoardCard extends Component {
  render() {
    const num_Questions = this.props.user.questions.length;
    const ans_arr = Object.keys(this.props.user.answers);
    const num_Anserws = ans_arr.length;
    return (
      <div className="card">
        <div className="card-user-name">{this.props.user.name}</div>
        <div className="card-content">
          <div>
            <img
              className="img"
              src={this.props.user.avatarURL}
              alt="avatar logo"
              align="center"
              width="150px"
              height="150px"
            ></img>
          </div>
          <div className="card-question">
            <div>
              <p className="card-text">{`Created questions ------>   ${num_Questions}`}</p>
              <br></br>
              <p className="card-text">{`Answered questions -----> ${num_Anserws}`}</p>
              <hr></hr>
            </div>
          </div>
          
        </div>
        
        <div className="score">
          <p className="card-text center">{`score :   ${num_Questions + num_Anserws}`}</p>
        </div>
      </div>
    );
  }
}

export default LeaderBoardCard;
