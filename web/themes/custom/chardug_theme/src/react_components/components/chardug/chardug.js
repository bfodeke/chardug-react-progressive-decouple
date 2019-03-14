import React from 'react';
import ReactDOM from 'react-dom';
import Bellaire from './Bellaire';
import DrupalSettings from './DrupalSettings';

class ChardugReact extends React.Component {
  render() {
    return (
      <div>
        <h3>This content is coming straight to react</h3>
        <Bellaire />
        <hr />
        <DrupalSettings />
      </div>
    )
  }
}

ReactDOM.render(
  <ChardugReact />,
  document.getElementById('chardug-react')
);