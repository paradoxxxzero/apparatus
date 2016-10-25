import React, { Component } from 'react';

import Layout from './Layout';
import Counter from './Counter';
import './Counter.sass';
import Log from './Log';
import './Log.sass';

class App extends Component {
  render() {
    return (
      <Layout>
        <Counter />
        <Log />
      </Layout>
    );
  }
};

export default App;