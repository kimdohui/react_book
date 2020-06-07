import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.ScrollToBottom()}>
          스크롤 아래로 이동
        </button>

        <button onClick={() => this.scrollBox.ScrollToTop()}>
          스크롤 위로 이동
        </button>
      </div>
    );
  }
}

export default App;
