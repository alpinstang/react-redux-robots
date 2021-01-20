import "./App.css";
import React from "react";
import Robots from "./robots/robots";
import AddRobot from "./robots/addRobot";

let data = {
  name: "test",
  email: "123",
  website: "test web",
  imageUrl: "http://placehold.it/500",
  id: 0,
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Robots Redux</h1>
        <Robots />
        <AddRobot robot={data} />
      </div>
    );
  }
}

export default App;
