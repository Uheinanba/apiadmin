import './Main.less';
import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Menu from './Menu';
import asyncComponent from '../AsyncComponent';

// react-loadable
const ProdContainer = asyncComponent(() =>
  import('../../containers/ProdContainer'),
);
const CategoryContainer = asyncComponent(() =>
  import('../../containers/CategoryContainer'),
);
const ApiContainer = asyncComponent(() =>
  import('../../containers/ApiContainer'),
);
/* 
import ProdContainer from '../../containers/ProdContainer';
import CategoryContainer from '../../containers/CategoryContainer';
import ApiContainer from '../../containers/ApiContainer'; */

const { Content, Footer, Sider } = Layout;

class Main extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const collapsed = this.state.collapsed;
    return (
      <Layout
        style={{ minHeight: '100vh' }}
        className="components-layout-demo-top-side">
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="menu-logo">
            {!collapsed ? (
              <i className="icon-open" />
            ) : (
              <i className="icon-close" />
            )}
          </div>
          <Menu path={this.props.location.pathname} />
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <div className="m-content">
              <Switch>
                <Route exact path="/" component={CategoryContainer} />
                <Route exact path="/api/:id" component={ApiContainer} />
                <Route path="/prod" component={ProdContainer} />
                <Redirect to="/" />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            JsApi Admin @2018 Created by Fxiaoke FE
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
