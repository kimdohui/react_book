import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      fixedNum: 0
    };
  }

  render() {
    const { number, fixedNum } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNum}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState 호출");
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
