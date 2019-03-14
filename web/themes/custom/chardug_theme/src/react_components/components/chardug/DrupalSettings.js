import React from 'react';

class DrupalSettings extends React.Component {
  constructor() {
    super();
    this.state = {
      brentdunn: drupalSettings.path,
    }
  }
  render() {
    return (
      <div>
        <h2>Current Path from Drupal Settigns</h2>
        <p>{ this.state.brentdunn.currentPath }</p>
      </div>
    );
  }
}

export default DrupalSettings;
