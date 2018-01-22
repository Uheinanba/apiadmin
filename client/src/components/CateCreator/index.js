import './CateCreator.less';
import React, { Component } from 'react';
import { Icon } from 'antd';
import CateCreatorForm from './CateCreatorForm';

class CateCreator extends Component {
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) return;
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
      this.props.onCreate(values);
    });
  };
  saveFormRef = form => {
    this.form = form;
  };

  render() {
    return (
      <div>
        <div className="m-cate__creator" onClick={this.showModal}>
          <Icon type="file-add" />
        </div>
        <CateCreatorForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default CateCreator;
