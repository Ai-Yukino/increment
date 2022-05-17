import React from "react";

class StateCounter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decremenet = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.decremenet}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default StateCounter;
