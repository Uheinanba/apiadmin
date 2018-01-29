import EditableCell from './EditableCell';
import { fixJSON } from '../../core/utils';

import React, { Component } from 'react';
import _ from 'lodash';
import { Table, Popconfirm, Layout, Button, notification } from 'antd';
const ButtonGroup = Button.Group;

class EditableTable extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        render: (text, record) => this.renderColumns(text, record, 'name'),
      },
      {
        title: 'action',
        dataIndex: 'action',
        render: (text, record) => this.renderColumns(text, record, 'action'),
      },
      {
        title: 'list',
        dataIndex: 'list',
        width: '40%',
        render: (text, record) => this.renderColumns(text, record, 'list'),
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) => {
          const { editable } = record;
          return (
            <div className="editable-row-operations">
              {editable ? (
                <ButtonGroup>
                  <Button type="primary" onClick={() => this.save(record.key)}>
                    保存
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => this.cancel(record.key)}>
                    取消
                  </Button>
                </ButtonGroup>
              ) : (
                <ButtonGroup>
                  <Button type="primary" onClick={() => this.edit(record.key)}>
                    修改
                  </Button>

                  <Popconfirm
                    okText="确定"
                    cancelText="取消"
                    title="确定删除吗?"
                    onConfirm={() => this.delete(record.key)}>
                    <Button type="primary">删除</Button>
                  </Popconfirm>
                </ButtonGroup>
              )}
            </div>
          );
        },
      },
    ];
    this.state = { data: [] };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEmpty(nextProps.data)) {
      let data = nextProps.data.map(item => {
        item.key = item._id;
        return item;
      });
      this.setState({ data });
      this.cacheData = data.map(item => ({ ...item }));
    }
  }

  renderColumns(text, record, column) {
    const vtext = typeof text === 'object' ? JSON.stringify(text) : text;
    return (
      <EditableCell
        editable={record.editable}
        value={vtext}
        onChange={value => this.handleChange(value, record.key, column)}
      />
    );
  }
  handleChange(value, key, column) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target[column] = value;
      this.setState({ data: newData });
    }
  }
  edit(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target.editable = true;
      this.setState({ data: newData });
    }
  }
  delete(key) {
    this.props.onDelete(key);
  }
  save(key) {
    let target = _.find(this.state.data, item => key === item.key);
    try {
      target.list = JSON.parse(fixJSON(target.list));
      this.props.onUpdate(key, _.pick(target, ['action', 'list', 'name']));
    } catch (error) {
      notification.error({
        message: '错误!',
        description: '请输入正确的JSON格式',
      });
    }
  }
  cancel(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
      delete target.editable;
      this.setState({ data: newData });
    }
  }
  render() {
    return (
      <Layout>
        <Table
          bordered
          pagination={false}
          dataSource={this.state.data}
          columns={this.columns}
          style={{ width: '100%' }}
        />
      </Layout>
    );
  }
}

export default EditableTable;
