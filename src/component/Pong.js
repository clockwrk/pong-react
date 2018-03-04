import React, { Component } from 'react';

class Pong extends Component {
  constructor() {
    super();
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      }

    }

  }
  conponentDidMount() {
    const context = this.refs.canvas.getContext('2d');
    this.setState({ context: context});
    this.start();
    requestAnimationFrame(() => {this.update()});
  }

  update() {
    requestAnimationFrame(() => {this.update()});
  }


  render() {
    return (
      <div>
        <span>SCORE: 100</span>
        <canvas ref="canvas"
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * this.state.screen.ratio}
        />
      </div>
    );
  }
}

export default Pong;
