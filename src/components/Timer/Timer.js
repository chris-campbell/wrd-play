import React from "react";

class Timer extends React.Component {
  state = {
    times: 60,
    countDown: 0,
    starterTime: 0
  };

  // Increments timer clock
  decrementTimeClock = () => {
    setInterval(() => {
      if (this.state.times <= this.state.starterTime && this.state.times > 0) {
        this.setState({ times: this.state.times - 1 }, () => {
          this.setState({ countDown: this.state.times });
        });
      }
      return this.state.times;
    }, 1000);
  };

  // Save starter time
  setStarterTime = () => {
    if (this.state.starterTime == 0) {
      this.setState({ starterTime: this.state.times }, () => {
        return this.state.starterTime;
      });
    }
  };

  // Formats and displays time to DOM
  timeDisplay = starterTime => {
    var time;

    // IF start time is GREATER than start time minus 1
    if (this.state.times > this.state.times - 1) {
      time = "00:" + this.state.times;
    }

    // IF current time is LESS than inital start time
    // AND current time is GREATER than 9
    if (this.state.times < starterTime && this.state.times > 9) {
      time = "00:" + this.state.times;
    }

    // IF current time  is LESS than 10
    // AND current time is GREATER than zero
    if (this.state.times < 10 && this.state.times > 0) {
      time = "00:0" + this.state.times;
    }

    // IF current time is EQUAL to zero
    if (this.state.times === 0) {
      time = "00:00";
    }
    return time;
  };

  render() {
    const starterTime = this.setStarterTime();
    const renderTime = this.timeDisplay(starterTime);

    return (
      <div>
        <span>{renderTime}</span>
        <button onClick={this.decrementTimeClock}>Display Time</button>
      </div>
    );
  }
}

export default Timer;
