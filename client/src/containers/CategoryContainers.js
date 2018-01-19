import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import Creator from '../components/Creator';
import { addCate } from '../redux/modules/jsapi';

class CategoryContainers extends Component {
  handleCreate = () => {
    console.log(345);
  };

  componentWillMount = () => {
    this.props.addCate();
  };

  render() {
    return (
      <div>
        <Category />
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
    addCate: () => dispatch(addCate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainers);
