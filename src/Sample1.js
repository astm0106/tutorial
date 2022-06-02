import React from 'react'

class Sample1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.ParentAddCount = this.ParentAddCount.bind(this)
  }

  //カウントアップ
  ParentAddCount() {
    let count = this.state.count + 1;
    this.setState({count:count});
  }

  render() {
    return (
      <div>
        <Child onCountUp={this.ParentAddCount}></Child>
        <div>{this.state.count}回押しました。</div>
      </div>);
  }
}

//子コンポーネント
class Child extends React.Component {

  render() {
    return <button onClick={this.props.onCountUp}>加算</button>
  }
}

export default Sample1