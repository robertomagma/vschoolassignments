import React, { Component } from "react";

class AgeStats extends Component {
  timeSince(date) {
    let today = new Date().getTime();
    let other_date = new Date(date).getTime();
    let difference = Math.abs(today - other_date);
  }

  render() {
    return (
      <div>
        <h3>{this.props.date}</h3>
      </div>
    )
  }
}

export default AgeStats;
