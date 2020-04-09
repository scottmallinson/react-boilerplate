import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Hello World</h1>
      </main>
    );
  }
}

export default hot(module)(App);
