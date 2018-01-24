import React, { Component } from 'react';
import Main from '../components/Main';
import { Route } from 'react-router-dom';

class MainContainer extends Component {
  render() {
    return <Route path="/" component={Main} />;
  }
}

export default MainContainer;
