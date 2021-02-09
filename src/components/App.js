import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import { _getUsers, _getQuestions } from "../utils/_DATA";
import Dashboard from "./Dashboard";
import Poll from "./PollUnAnswered";
import PollAnswer from "./PollAnswer";
import NewPoll from "./NewPoll";
import LeaderBoard from "./LeaderBoard";
import { authedUser } from "../reducers/authedUser";
import PageNotFound from "./PageNotFound"

class App extends Component {
  state = {
    fetched:false, //data fetched or not
  }

  componentDidMount() {
    const authedUser = this.props.authedUser ? authedUser : null;
    this.props.dispatch(handleInitialData(authedUser)).then(()=>{
      this.setState({fetched:true});
    })
  }

  render() {
    console.log(this.props.authedUser);
    if(this.state.fetched === false){
      return <p>Loading</p>
    }
    return (
      <Router>
        <Switch>
        {this.props.authedUser === null ? (
          <Route path="/" exact component={Login} />
        ) : (
          <Fragment>
            <div>
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/poll" component={Poll} />
              <Route path="/newPoll" component={NewPoll} />
              <Route path="/questions/:question_id" component={PollAnswer} />
              <Route path="/leaderBoard" component={LeaderBoard} />
            </div>
          </Fragment>
        )}
        <Route component={PageNotFound} />
        </Switch>
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
