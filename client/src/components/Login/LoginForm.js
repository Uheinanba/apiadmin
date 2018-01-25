import React from 'react';
import { Modal, Form, Input } from 'antd';
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(props => {
  const { visible, onCancel, onCreate, form } = props;
  const { getFieldDecorator } = form;
  return (
    <Modal
      closable={false}
      visible={visible}
      title="登陆到云端服务器"
      cancelText="取消"
      okText="确定"
      onCancel={onCancel}
      onOk={onCreate}>
      <Form layout="vertical">
        <FormItem label="用户名">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入用户名',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入密码',
              },
            ],
          })(<Input type="password" />)}
        </FormItem>
      </Form>
    </Modal>
  );
});

export default CollectionCreateForm;
