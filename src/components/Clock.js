import React from "react";

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div>
          <FormattedDate date={this.state.date} />
        </div>
      );
    }
}

function FormattedDate(props) {
  return <h2>This time is {props.date.toLocaleTimeString()}.</h2>;
}

export default Clock;