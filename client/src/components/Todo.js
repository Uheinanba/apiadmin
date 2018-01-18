import React  from 'react';

export default (props) =>
    <div>
        <span>{props.todo.value}</span>
        <button onClick={props.onInc}>+</button>
        <button onClick={props.onDesc}>-</button>
    </div>