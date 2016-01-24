import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

require('./test.scss')

var JadeTitleComponent = React.createClass({
    render: require('./title.html')
});

console.log(require('./test.json'));

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
	//return (<h1>Test</h1>);
    return (
      <h1 style={{ color: this.props.color }}>
        ({__("Counter")} {this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
	    <JadeTitleComponent title="Test" />
        <Counter increment={100} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}