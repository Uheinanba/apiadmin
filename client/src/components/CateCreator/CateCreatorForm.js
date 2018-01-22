import React from 'react';

import { Modal, Form, Input } from 'antd';
const FormItem = Form.Item;

const CreatorForm = Form.create()(props => {
  const { visible, onCancel, onCreate, form } = props;
  const { getFieldDecorator } = form;
  return (
    <Modal
      visible={visible}
      title="新建"
      cancelText="取消"
      okText="确定"
      onCancel={onCancel}
      onOk={onCreate}>
      <Form layout="vertical">
        <FormItem label="Version">
          {getFieldDecorator('version', {
            rules: [
              {
                required: true,
                message: '请输入version',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Order">
          {getFieldDecorator('order')(<Input />)}
        </FormItem>
      </Form>
    </Modal>
  );
});

export default CreatorForm;
