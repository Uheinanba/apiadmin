import './Main.less';
import React, { Component } from 'react';
import { Link, Redirect, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import TodoContainers from '../../containers/TodoContainers';
import CategoryContainer from '../../containers/CategoryContainer';
import ApiContainer from '../../containers/ApiContainer';

const { Content, Footer, Sider } = Layout;

class Main extends Component {
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
              <Link to={`/cate`} />
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
            <div className="m-content">
              <Switch>
                <Route exact path="/cate" component={CategoryContainer} />
                <Route path="/jsapi/:id" component={ApiContainer} />
                <Route path="/shell" component={TodoContainers} />
                <Redirect to="/cate" />
              </Switch>
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

export default Main;
