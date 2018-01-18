import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incTodo, descTodo } from '../redux/modules/todo';

import Todo from '../components/Todo';

class TodoContainers extends Component {
  render() {
    return <Todo {...this.props} />;
  }
}

const mapStateToProps = ({ todo }, ownProps) => {
  return {
    todo,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInc: () => dispatch(incTodo()),
    onDesc: () => dispatch(descTodo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainers);
