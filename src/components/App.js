import { _getUsers } from "../utils/_DATA";
import react, { Component } from "react";
import { handleInitialData } from "../actions/shared"

class App extends Component {
  componentDidMount(){
    handleInitialData();
  }

  render() {
    return <div> Hello shi </div>;
  }
}

export default App;
