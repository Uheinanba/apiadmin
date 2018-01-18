import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoContainers from './containers/TodoContainers';
import configureStore from './redux/configureStore';

import './assets/App.css';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoContainers />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
