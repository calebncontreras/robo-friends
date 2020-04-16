import React from "react";
import CardList from "./components/CardList";
import { robotsArray } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount = () => this.setState({ robots: robotsArray });

  render() {
    const { robots } = this.state;
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
