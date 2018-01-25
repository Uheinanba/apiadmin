import ProdApiForm from '../ProdApiForm';

import React, { Component } from 'react';
import { Card } from 'antd';

class ProdCard extends Component {
  componentWillMount() {}

  render() {
    return (
      <Card title="发布管理">
        <ProdApiForm />
      </Card>
    );
  }
}

export default ProdCard;
