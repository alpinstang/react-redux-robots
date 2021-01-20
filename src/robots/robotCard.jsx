import React from "react";
import { removeRobot } from "../redux/robots.actions";
import { connect } from "react-redux";

const RobotCard = ({
  robot: { name, email, website, imageUrl, id },
  removeRobot,
}) => (
  <div className="robot-card">
    <div className="robot-image">
      <img src={imageUrl || "http://placehold.it/300"} alt="robot" />
    </div>
    <div className="robot-info">
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{website}</li>
      </ul>
    </div>
    <div className="button" onClick={() => removeRobot(id)}>
      REMOVE CARD
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching actions returned by action creators
    removeRobot: (robot) => dispatch(removeRobot(robot)),
  };
};

export default connect(null, mapDispatchToProps)(RobotCard);
