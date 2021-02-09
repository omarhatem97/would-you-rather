import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import LeaderBoardCard from "./LeaderBoardCard";
import Navigation from "./Navigation";

class Leaderboard extends Component {
  handleSort = () => {
    const usersKeys = Object.keys(this.props.users);
    const users = this.props.users;
    const sortedKeys = usersKeys.sort((a, b) => {
      const num_Questions_a = users[a].questions.length;
      const ans_arr_a = Object.keys(users[a].answers);
      const num_Anserws_a = ans_arr_a.length;
      const a_score = num_Anserws_a + num_Questions_a;
      const num_Questions_b = users[b].questions.length;
      const ans_arr_b = Object.keys(users[b].answers);
      const num_Anserws_b = ans_arr_b.length;
      const b_score = num_Anserws_b + num_Questions_b;
      return b_score - a_score;
    });

    return sortedKeys;
  };

  render() {
    const sortedKeys = this.handleSort();
    const { users } = this.props;
    return (
      <div>
        <Navigation />
        <ul className="center">
          {sortedKeys.map((u) => {
            return (
              <li className="li" key={u}>
                <LeaderBoardCard user={users[u]} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(Leaderboard);
