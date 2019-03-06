import React, { Component } from 'react';

import './App.scss';
import CollectionsDashboard from '../../features/collection/CollectionsDashboard/CollectionsDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <NavBar/>
          <div className="app">
            <CollectionsDashboard/>
          </div>
        </React.Fragment>
    );
  }
}

export default App;
