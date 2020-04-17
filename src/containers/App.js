import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
      error: {},
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ robots: users });
      })
      .catch((err) => this.setState({ error: err }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { robots, searchField, error } = this.state;
    console.log(error);
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
