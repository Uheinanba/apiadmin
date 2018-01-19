import './Category.less';
import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class Api extends Component {
  render() {
    return (
      <div style={{ padding: '30px' }} className="m-category">
        <Row gutter={16} style={{ marginTop: '-10px' }}>
          <Col span={4}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={4} style={{ marginTop: '20px' }}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Api;
