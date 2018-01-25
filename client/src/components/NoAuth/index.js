import './NoAuth.less';
import React, { Component } from 'react';
import { Card, Icon, Button } from 'antd';
import Login from '../Login';

class NoAuth extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  render() {
    const errorAuth = this.props.errorAuth;
    const msg = errorAuth
      ? '登录验证错误, 请输入正确的用户名密码!'
      : '请登录完成操作!';
    const iconType = errorAuth ? 'anticon anticon-close-circle' : 'warning';
    return (
      <Card title="发布管理" className="no-auth">
        <div className="no-auth__wrap">
          <Icon type={iconType} style={{ fontSize: '65px', color: 'red' }} />
          <p className="auth-msg">{msg}</p>
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

export default NoAuth;
