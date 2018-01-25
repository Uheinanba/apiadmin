import _ from 'lodash';
import { Layout, Spin, Card, Button } from 'antd';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { aliLogin, updateJsapiLib, execBuild } from '../redux/modules/prod';
import ProdUpdateApi from '../components/ProdUpdateApi';
import NoAuth from '../components/NoAuth';

class ProdContainer extends Component {
  render() {
    const { aliLogin, auth, spinning, updateJsapiLib, execBuild } = this.props;
    const showLogin = _.isEmpty(auth) || _.isString(auth);

    return (
      <Layout>
        <Spin spinning={spinning}>
          {showLogin ? (
            <NoAuth
              onLogin={data => aliLogin(data)}
              errorAuth={_.isString(auth)}
            />
          ) : (
            <Card title="发布管理">
              <Card type="inner" title="更新jsapi">
                <ProdUpdateApi
                  onUpdateJsapi={path =>
                    updateJsapiLib(_.extend({}, auth, { path }))
                  }
                />
              </Card>
              <Card
                type="inner"
                title="执行build命令"
                style={{ marginTop: 16 }}>
                <Button type="primary" onClick={() => execBuild(auth)}>
                  执行
                </Button>
              </Card>
            </Card>
          )}
        </Spin>
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const prod = state.get('prod');
  return {
    auth: prod.get('auth'),
    spinning: prod.get('status') === 'request' ? true : false,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    execBuild: data => dispatch(execBuild(data)),
    aliLogin: data => dispatch(aliLogin(data)),
    updateJsapiLib: data => dispatch(updateJsapiLib(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdContainer);
