import _ from 'lodash';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { sshLogin } from '../redux/modules/prod';
import ProdList from '../components/ProdList';
import SshLogin from '../components/SshLogin';

class ProdContainer extends Component {
  componentWillReceiveProps(nextProps) {
    _.isEmpty(nextProps.auth);
    console.log(nextProps);
  }

  render() {
    const hasAuth = _.isEmpty(this.props.auth);
    return hasAuth ? (
      <Layout>
        <ProdList />
        <SshLogin visible={true} />
      </Layout>
    ) : null;
  }
}

const mapStateToProps = (state, ownProps) => {
  const prod = state.get('prod');
  return {
    auth: prod.get('auth'),
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sshLogin: data => dispatch(sshLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdContainer);
