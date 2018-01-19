import './Main.less';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import TodoContainers from '../../containers/TodoContainers';
// import JsapiContainers from '../../containers/JsapiContainers';
import CategoryContainers from '../../containers/CategoryContainers';

const { Content, Footer, Sider } = Layout;

class SiderDemo extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const collapsed = this.state.collapsed;
    return (
      <Layout
        style={{ minHeight: '100vh' }}
        className="components-layout-demo-top-side">
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">
            {!collapsed ? (
              <i className="icon-open" />
            ) : (
              <i className="icon-close" />
            )}
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>数据管理</span>
              <Link to={`/jsapi`} />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>shell</span>
              <Link to={`/shell`} />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <div
              className="m-content"
              style={{
                padding: 24,
                minHeight: 360,
                display: 'flex',
              }}>
              <Route exact path="/jsapi" component={CategoryContainers} />
              <Route exact path="/shell" component={TodoContainers} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
