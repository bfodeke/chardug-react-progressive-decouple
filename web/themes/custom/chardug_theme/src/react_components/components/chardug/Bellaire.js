import React from 'react';

class Bellaire extends React.Component {
  constructor() {
    super();
    this.brentDunn = this.brentDunn.bind(this);
  }
  brentDunn(event) {
    event.preventDefault();

    console.log(event.target, 'The Results');
  }
  render() {
    return <button onClick={this.brentDunn}>Click Me</button>
  }
}

export default Bellaire;
