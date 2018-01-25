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

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) return;
      const { path, prefix } = values;
      const reqPath = path.indexOf('http') === 0 ? path : `${prefix}${path}`;
      this.props.onUpdateJsapi(reqPath);
    });
  };

  render() {
    const { formLayout } = this.state;
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: HTTP,
    })(
      <Select style={{ width: 100 }}>
        <Option value={HTTPS}>{HTTPS}</Option>
        <Option value={HTTP}>{HTTP}</Option>
      </Select>,
    );
    return (
      <Layout>
        <Form layout={formLayout} onSubmit={this.handleSubmit}>
          <FormItem label="最新jaspi地址">
            {getFieldDecorator('path', {
              rules: [{ required: true, message: '请输入Url路径' }],
              initialValue: 'www.fxiaoke.com/open/jsapi/2.1.7/fsapi.min.js',
            })(
              <Input
                addonBefore={prefixSelector}
                placeholder="请输入最新的jsapi地址"
              />,
            )}
          </FormItem>
          <FormItem>
            <Button htmlType="submit" type="primary">
              确定
            </Button>
          </FormItem>
        </Form>
      </Layout>
    );
  }
}

export default Form.create()(FormLayoutDemo);
