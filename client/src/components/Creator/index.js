import './Creator.less';
import React, { Component } from 'react';
import { Icon } from 'antd';

class Creator extends Component {
  render() {
    return (
      <div className="m-cate__creator" onClick={this.props.onCreate}>
        <Icon type="file-add" />
      </div>
    );
  }
}

export default Creator;
