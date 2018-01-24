import React, { Component } from 'react';
import ProdList from '../components/ProdList';
import { Layout } from 'antd';

class ShellContainers extends Component {
  render() {
    return (
      <Layout>
        <ProdList />
      </Layout>
    );
  }
}

export default ShellContainers;
