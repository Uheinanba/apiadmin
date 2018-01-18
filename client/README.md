### 目录结构
1. Ducks: redux reducer bundles
> 每次在创建redux应用时，按照功能性划分，每次会添加`actionTypes, actions, reducer`这样的组合。我之前会把它们分成不同的文件，甚至分到不同的文件夹，但是95%的情况下, 只有一对reducer/action 会用到对应的actions。对我来说,把这些相关的代码放在一个独立的文件中更加方便,这样做更加容易的打包到软件库中。

```
// widgets.js

// Actions
const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}
```
2. 规则
- 必须export default函数名为reducer()的reducer
- 必须作为函数 export 它的action creators
- 必须把action types定义为形为npm-module-or-app/reducer/ACTION_TYPE 的字符串
- 如果有外部的reducer需要监听这个action type,或者作为可重用的库发布时，可以用UPPER_SNAKE_CASE 形式 export 它的 action types。