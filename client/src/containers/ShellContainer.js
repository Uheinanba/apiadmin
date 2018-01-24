import React, { Component } from 'react';
import ShellList from '../components/ShellList';
import { Layout } from 'antd';

class ShellContainers extends Component {
  render() {
    return (
      <Layout>
        <ShellList />
      </Layout>
    );
  }
}

export default ShellContainers;
