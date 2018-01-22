import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import CateCreator from '../components/CateCreator';
import { Spin } from 'antd';
import { fetchCate, addCate } from '../redux/modules/cate';

class CategoryContainers extends Component {
  handleCreate = data => {
    this.props.addCate(data);
  };

  componentWillMount = () => {
    this.props.fetchCate();
  };

  render() {
    const { spinning, cates } = this.props;
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Spin tip="加载中..." spinning={spinning}>
          <Category data={cates} />
        </Spin>
        <CateCreator onCreate={this.handleCreate} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const cate = state.get('cate');
  return {
    spinning: cate.get('getCateStatus') === 'request',
    cates: cate.get('cates'),
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCate: () => dispatch(fetchCate()),
    addCate: data => dispatch(addCate(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainers);
