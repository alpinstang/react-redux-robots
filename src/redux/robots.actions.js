import { RobotActionTypes } from "./robots.types";

export const addRobot = (robot) => ({
  type: RobotActionTypes.ADD_ROBOT,
  payload: robot,
});

export const removeRobot = (robot) => ({
  type: RobotActionTypes.REMOVE_ROBOT,
  payload: robot,
});
