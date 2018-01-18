import React from 'react';
import Button from 'antd/lib/button';

export default props => (
  <div>
    <span> {props.todo.value} </span>
    <button onClick={props.onInc}> + </button>
    <button onClick={props.onDesc}> - </button>
    <Button type="primary"> Button </Button>
  </div>
);
