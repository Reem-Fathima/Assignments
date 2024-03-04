import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render() {
    console.log('Render');
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          Increment Counter
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;
