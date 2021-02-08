import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    // console.log(this.props);
    const op1_num_votes = this.props.question.optionOne.votes.length;
    const op2_num_votes = this.props.question.optionTwo.votes.length;
    const percentage_op1 = (
      (op1_num_votes / (op1_num_votes + op2_num_votes)) *
      100
    ).toFixed(2);
    const percentage_op2 = (
      (op2_num_votes / (op1_num_votes + op2_num_votes)) *
      100
    ).toFixed(2);
    return (
      <div>
        <div className="card">
          <div>{`${this.props.user.name}   Asked`}</div>
          <div>
            <img
              src={this.props.user.avatarURL}
              alt="avatar logo"
              align="center"
              width="150px"
              height="150px"
            ></img>
          </div>

          <div>
            <p>Would you rather</p>
            <div>
              <br></br>
              Your Choice
              <p>{this.props.answer}</p>
              <br></br>
              {this.props.question.optionOne.text}
              {` ---->  got ${op1_num_votes} vote`}
              <br />
              <progress id="file" value={`${percentage_op1}`} max="100">
                {percentage_op1}
              </progress>
            </div>
            <br></br>
            or
            <br></br>
            <div>
              {this.props.question.optionTwo.text}
              {` ---->  got ${op2_num_votes} vote`}
              <br />
              <progress id="file" value={`${percentage_op2}`} max="100">
                {percentage_op2}
              </progress>
            </div>
          </div>
          {/* <div>
            <Link to={`/questions/${this.props.question.id}`}>Answer Poll</Link>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Result;
