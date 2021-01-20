import React from "react";
import "./robots.styles.scss";

import RobotCard from "./robotCard";

import { connect } from "react-redux";
class Robots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    debugger;
    console.log(this.props);
  }

  render() {
    return (
      <div className="robots robot-cards">
        {this.props.robots.length ? (
          this.props.robots.map((robot) => (
            <RobotCard key={robot.id || 0} robot={robot} />
          ))
        ) : (
          <div className="message"> YOU HAVE NO ROBOTS.</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  robots: state.robots.robots,
});

export default connect(mapStateToProps)(Robots);
