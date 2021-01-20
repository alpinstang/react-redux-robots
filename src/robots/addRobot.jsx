import React from "react";
import { addRobot } from "../redux/robots.actions";
import { connect } from "react-redux";

class AddRobot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { robot } = this.props;
    console.log(robot);
  }

  submitRobot = (e) => {
    e.preventDefault();
    console.log("BUtTON CLICKED");

    if (
      this.state.email === undefined ||
      this.state.name === undefined ||
      this.state.website === undefined
    ) {
      alert("You must fill out all fields!");
      return;
    }

    let robot = this.state;

    robot.id = Math.floor(Math.random() * (1000 - 0 + 1));
    robot.imageUrl =
      "https://robohash.org/" + encodeURIComponent(this.state.name);

    this.props.addRobot(robot);
  };

  render() {
    return (
      <div className="add-robot">
        <div className="robot-form">
          <form className="pure-form pure-form-aligned">
            <fieldset>
              <div className="pure-control-group">
                <label htmlFor="aligned-email">Name</label>
                <input
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  type="email"
                  id="aligned-name"
                  placeholder="Name"
                />
              </div>
              <div className="pure-control-group">
                <label htmlFor="aligned-email">Email Address</label>
                <input
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  type="email"
                  id="aligned-email"
                  placeholder="Email Address"
                />
              </div>
              <div className="pure-control-group">
                <label htmlFor="aligned-email">Website</label>
                <input
                  value={this.state.website}
                  onChange={(e) => this.setState({ website: e.target.value })}
                  type="email"
                  id="aligned-email"
                  placeholder="Website"
                />
              </div>

              <div className="pure-controls">
                <button
                  type="submit"
                  className="pure-button pure-button-primary"
                  onClick={(e) => this.submitRobot(e)}
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

// const addRobot = () => ({ type: "ADD_ROBOT" });

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching actions returned by action creators
    addRobot: (robot) => dispatch(addRobot(robot)),
  };
};

export default connect(null, mapDispatchToProps)(AddRobot);
