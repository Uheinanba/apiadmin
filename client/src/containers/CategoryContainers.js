import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import Creator from '../components/Creator';
import { Spin } from 'antd';
import { fetchCate } from '../redux/modules/jsapi';

class CategoryContainers extends Component {
  handleCreate = () => {
    console.log(345);
  };

  componentWillMount = () => {
    this.props.fetchCate();
  };

  render() {
    return (
      <div>
        <Spin tip="加载中...">
          <Category />
        </Spin>
        <Creator onCreate={this.handleCreate} />
      </div>
    );
  }
}

const mapStateToProps = ({ jsapi }, ownProps) => {
  return {
    jsapi,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCate: () => dispatch(fetchCate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainers);
