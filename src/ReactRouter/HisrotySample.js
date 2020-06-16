import React, { Component } from "react";

class HistorySample extends Component {
  handleGoBack = () => {
    //뒤로가기
    this.props.history.goBack();
  };

  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    //설정하고 난 뒤 페이지 변화가 생기려 할때마다 나갈건지 질문
    this.unblock = this.props.history.block("정말 떠날건가요?");
  }

  componentWillUnmount() {
    //컴포넌트 언마운트 시 질문을 멈춤
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
