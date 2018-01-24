import ProdApiForm from '../ProdApiForm';

import React, { Component } from 'react';
import { Card } from 'antd';

class ShellContainers extends Component {
  componentWillMount() {}

  render() {
    return (
      <Card title="发布管理">
        <ProdApiForm />
      </Card>
    );
  }
}

export default ShellContainers;
