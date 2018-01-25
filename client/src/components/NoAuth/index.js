import './NoAuth.less';
import React, { Component } from 'react';
import { Card, Icon, Button } from 'antd';
import Login from '../Login';

class ShellContainers extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  render() {
    return (
      <Card title="发布管理" className="no-auth">
        <div className="no-auth__wrap">
          <Icon type="warning" style={{ fontSize: '65px', color: 'red' }} />
          <p className="auth-msg">请登录完成操作!</p>
          <Button
            onClick={this.showModal}
            type="primary"
            style={{ width: '100px', marginTop: '20px' }}>
            登录
          </Button>
          <Login
            visible={this.state.visible}
            onLogin={data => this.props.onLogin(data)}
          />
        </div>
      </Card>
    );
  }
}

export default ShellContainers;
