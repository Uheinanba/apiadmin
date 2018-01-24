import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { Layout } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const HTTP = 'http://';
const HTTPS = 'https://';

class FormLayoutDemo extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'vertical',
    };
  }

  render() {
    const { formLayout } = this.state;
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: HTTPS,
    })(
      <Select style={{ width: 100 }}>
        <Option value={HTTPS}>{HTTPS}</Option>
        <Option value={HTTP}>{HTTP}</Option>
      </Select>,
    );
    return (
      <Layout>
        <Form layout={formLayout}>
          <FormItem label="最新jaspi地址">
            <Input
              addonBefore={prefixSelector}
              placeholder="请输入最新的jsapi地址"
            />
          </FormItem>
          <FormItem>
            <Button type="primary">确定</Button>
          </FormItem>
        </Form>
      </Layout>
    );
  }
}

export default Form.create()(FormLayoutDemo);
