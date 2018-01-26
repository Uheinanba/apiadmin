import './core/api';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import MainContainer from './containers/MainContainer';
import configureStore from './redux/configureStore';

import './assets/App.css';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <MainContainer />
        </Provider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
