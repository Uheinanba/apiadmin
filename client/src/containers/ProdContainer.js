import _ from 'lodash';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { aliLogin, updateJsapiLib } from '../redux/modules/prod';
import ProdCard from '../components/ProdCard';
import NoAuth from '../components/NoAuth';
import Login from '../components/Login';

class ProdContainer extends Component {
  render() {
    const { aliLogin, auth } = this.props;
    return (
      <Layout>
        {_.isEmpty(auth) ? (
          <NoAuth onLogin={data => aliLogin(data)} />
        ) : (
          <ProdCard onUpdateJsapi={auth => updateJsapiLib(auth)} />
        )}
      </Layout>
    );
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
    aliLogin: data => dispatch(aliLogin(data)),
    updateJsapiLib: data => dispatch(updateJsapiLib(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdContainer);
