import { RobotActionTypes } from "./robots.types";
const INITIAL_STATE = {
  robots: [
    {
      name: "Big Ted",
      email: "bigted44@test.com",
      website: "www.test.com",
      imageUrl: "https://placekitten.com/500",
      id: 0,
    },
  ],
};

const robotsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RobotActionTypes.ADD_ROBOT:
      debugger;
      return {
        ...state,
        robots: [...state.robots, action.payload],
      };
    case RobotActionTypes.REMOVE_ROBOT:
      debugger;
      return {
        ...state,
        robots: [...state.robots.filter((obj) => action.payload !== obj.id)],
      };
    default:
      return state;
  }
};

export default robotsReducer;
