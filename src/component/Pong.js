import React, { Component } from 'react';

class Pong extends Component {
  constructor() {
    this.state = {

    }

  }
  conponentDidMount() {

  }

  update() {
    requestAnimationFrame(() => {this.update()});
  }


  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Pong;
