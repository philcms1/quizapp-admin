import React, { Component } from 'react';

import './App.scss';
import Dashboard from './components/dashboard/dashboard.component';

class App extends Component {
  render() {
    return (
      <div className={'app'}>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
