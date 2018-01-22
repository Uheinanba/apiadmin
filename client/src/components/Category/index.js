import './Category.less';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

class Api extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="m-category">
        {data.map(item => (
          <Link to={`/jsapi/${item.get('_id')}`}>
            <Card
              key={item.get('_id')}
              title="version"
              bordered={false}
              style={{ marginLeft: '20px', float: 'left' }}>
              {item.get('version')}
            </Card>
          </Link>
        ))}
      </div>
    );
  }
}

export default Api;
