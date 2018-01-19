import './core/service/api';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContainers from './containers/MainContainers';
import configureStore from './redux/configureStore';

import './assets/App.css';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <MainContainers />
          </div>
        </Provider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
