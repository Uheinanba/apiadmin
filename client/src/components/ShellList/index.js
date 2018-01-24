import ShellApiForm from '../ShellApiForm';

import React, { Component } from 'react';
import { Card } from 'antd';

class ShellContainers extends Component {
  componentWillMount() {}

  render() {
    return (
      <Card title="远程管理">
        <Card type="inner" title="Inner Card title">
          <ShellApiForm />
        </Card>
      </Card>
    );
  }
}

export default ShellContainers;
