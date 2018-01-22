import React from 'react';

import { Modal, Form, Input } from 'antd';
const { TextArea } = Input;
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
        <FormItem label="Action">
          {getFieldDecorator('action', {
            rules: [
              {
                required: true,
                message: '请输入action',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入name',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="List">
          {getFieldDecorator('list', {
            validateTrigger: 'onBlur',
            rules: [
              (rule, value, callback, source, options) => {
                const errors = [];
                try {
                  JSON.parse(value);
                } catch (e) {
                  errors.push(
                    new Error(value + '不是合法JSON数据', rule.field),
                  );
                }
                callback(errors);
              },
            ],
          })(<TextArea rows={4} />)}
        </FormItem>
      </Form>
    </Modal>
  );
});

export default CreatorForm;
