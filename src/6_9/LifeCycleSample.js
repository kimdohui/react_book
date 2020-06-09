import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  /*props로 받아 온 값을 state에 동기화시키는 용도로 사용하며,
    컴포넌트가 마운트될 때와 업데이트될 때 호출됨
  */
  static getDerivedStateFromProps(nextprops, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextprops.color !== prevState.color) {
      return { color: nextprops.color };
    }
    return null;
  }

  /*컴포넌트를 만든 뒤 첫 렌더링을 다 마친 후 실행한다.
    이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를
    호출하거나 이벤트 등록 , setTimeout , setInterval , 네트워크 등과 ㄱㅌ은 
    비동기 작업을 처리함
  */
  componentDidMount() {
    console.log("componentDidMount");
  }

  /*
    props 또는 state를 변경했을 떄 , 리렌더링을 시작할지 여부를 지정하는 메서드
   이 메서드에선 반드시 true 혹은 false값을 반환함
  */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  /*
    컴포넌트를  DOM에서 제거할 때 실행
  */

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  /*render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됨
    주로 업데이트 하기 전의 값을 참고할 일이 있을 때 활용됨
  */

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  /*리렌더링을 완료하고 실행 / 업데이트가 끝난 직후이므로, DOM과 관련 처리를 해도 무방
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기 직전 색상 : ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color
    };

    return (
      <div>
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>

        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
