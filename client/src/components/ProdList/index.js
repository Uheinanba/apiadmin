import ProdApiForm from '../ProdApiForm';

import React, { Component } from 'react';
import { Card } from 'antd';

class ShellContainers extends Component {
  componentWillMount() {}

  render() {
    return (
      <Card title="远程管理">
        <Card type="inner" title="Inner Card title">
          <ProdApiForm />
        </Card>
      </Card>
    );
  }
}

export default ShellContainers;
