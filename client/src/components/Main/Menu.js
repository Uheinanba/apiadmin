import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

class MainMenu extends Component {
  render() {
    const MENU_KEY = {
      data: '1',
      prod: '2',
    };
    const keys =
      this.props.path === '/prod' ? [MENU_KEY.prod] : [MENU_KEY.data];
    return (
      <Menu theme="dark" defaultSelectedKeys={keys} mode="inline">
        <Menu.Item key={MENU_KEY.data}>
          <Icon type="pie-chart" />
          <span>数据管理</span>
          <Link to={`/`} />
        </Menu.Item>
        <Menu.Item key={MENU_KEY.prod}>
          <Icon type="desktop" />
          <span>发布管理</span>
          <Link to={`/prod`} />
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainMenu;
