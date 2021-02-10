import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AnswerPoll from "./AnswerPoll";
import NewPoll from "./NewPoll";
import LeaderBoard from "./LeaderBoard";
import PageNotFound from "./PageNotFound";

class App extends Component {
  state = {
    fetched: false, //data fetched or not
  };

  componentDidMount() {
    const authedUser = this.props.authedUser ? authedUser : null;
    this.props.dispatch(handleInitialData(authedUser)).then(() => {
      this.setState({ fetched: true });
    });
  }

  render() {
    if (this.state.fetched === false) {
      return <p>Loading</p>;
    }
    return (
      <Router>
        {this.props.authedUser === null ? (
          <Route path="*" exact component={Login} />
        ) : (
          <Fragment>
            <div>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/add" exact component={NewPoll} />
                <Route path="/questions/:question_id" component={AnswerPoll} />
                <Route path="/leaderboard" exact component={LeaderBoard} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </Fragment>
        )}
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);
