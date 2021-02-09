import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Result extends Component {
  calcVotes = () => {
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

    return { percentage_op1, percentage_op2 };
  };
  render() {
    // console.log(this.props);
    const op1_num_votes = this.props.question.optionOne.votes.length;
    const op2_num_votes = this.props.question.optionTwo.votes.length;
    const { percentage_op1, percentage_op2 } = this.calcVotes();
    return (
      <div>
        <div className="card">
          <div className="card-user-name">{`${this.props.user.name}   Asked`}</div>
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
                <p className="would-you-rather">Would you rather</p>
                <div>
                  <br></br>
                  <p className="card-text">{`Your Choice is (${this.props.answer})`}</p>
                  <br></br>
                  <p className="card-text">
                    {this.props.question.optionOne.text}
                    {` ---->  got ${op1_num_votes} vote`}
                  </p>

                  <progress id="file" value={`${percentage_op1}`} max="100">
                    {percentage_op1}
                  </progress>
                </div>
                <br />
                <p className="card-text">or</p>
                <div>
                  <p className="card-text">
                    {this.props.question.optionTwo.text}
                    {` ---->  got ${op2_num_votes} vote`}
                  </p>

                  <progress id="file" value={`${percentage_op2}`} max="100">
                    {percentage_op2}
                  </progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
