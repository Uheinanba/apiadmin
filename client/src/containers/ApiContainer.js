import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import ApiList from '../components/ApiList';
import ApiCreator from '../components/ApiCreator';
import {
  fetchApis,
  addApi,
  deleteApi,
  updateApi,
} from '../redux/modules/jsapi';

class ApiContainer extends Component {
  componentWillMount = () => {
    console.log(3434);
    const params = this.props.match.params;
    this.props.fetchApis(params.id);
  };
  render() {
    const { apis, deleteApi, updateApi, addApi, match } = this.props;
    const id = match.params.id;
    return (
      <Layout>
        <ApiCreator onCreate={apis => addApi({ id, apis })} />
        <ApiList
          data={apis}
          onUpdate={(apiId, data) => updateApi({ id, apiId, data })}
          onDelete={apiId => deleteApi({ id, apiId })}
        />
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
    deleteApi: data => dispatch(deleteApi(data)),
    updateApi: data => dispatch(updateApi(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiContainer);
