import './Category.less';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

class Api extends Component {
  render() {
    const data = this.props.data;
    return (
      <Card title="jsapi组">
        {data.map(item => (
          <Link to={`/api/${item.get('_id')}`} key={item.get('_id')}>
            <Card
              className="ant-card-grid"
              key={item.get('_id')}
              title="version"
              bordered={false}
              style={{ width: '20%', textAlign: 'center' }}>
              {item.get('version')}
            </Card>
          </Link>
        ))}
      </Card>
    );
  }
}

export default Api;
