import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import ApiList from '../components/ApiList';
import ApiCreator from '../components/ApiCreator';
import { fetchApis, addApi } from '../redux/modules/jsapi';

class ApiContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  handleCreate = apis => {
    this.props.addApi({
      id: this.context.router.route.match.params.id,
      apis,
    });
  };

  componentWillMount = () => {
    const params = this.context.router.route.match.params;
    this.props.fetchApis(params.id);
  };
  render() {
    const { spinning, apis } = this.props;
    return (
      <Layout>
        <ApiCreator onCreate={this.handleCreate} />
        <ApiList data={apis} />
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const jsapi = state.get('jsapi');
  return {
    apis: jsapi.get('apis'),
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchApis: id => dispatch(fetchApis(id)),
    addApi: data => dispatch(addApi(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiContainer);
