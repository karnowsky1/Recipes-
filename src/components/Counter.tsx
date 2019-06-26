import React, { Component } from 'react'

interface CounterProps{
    value: number;
    onDecrement: ()=> any;
    onIncrement: ()=> any;
}



export default class Counter extends Component<CounterProps,{}> {
  render() {
    return (
      <div>
          <button onClick={this.props.onDecrement}> - </button>
          <button onClick={this.props.onIncrement}> + </button>
          <h1>{this.props.value}</h1>
      </div>
    )
  }
}
