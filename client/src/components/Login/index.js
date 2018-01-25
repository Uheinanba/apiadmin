import React, { Component } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import LoginForm from './LoginForm';

const FormItem = Form.Item;

class CollectionsPage extends Component {
  state = {
    visible: false,
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) return;
      this.props.onLogin(values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };
  saveFormRef = form => {
    this.form = form;
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible || this.props.visible)
      this.setState({ visible: true });
  }

  render() {
    return (
      <div>
        <LoginForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default CollectionsPage;
