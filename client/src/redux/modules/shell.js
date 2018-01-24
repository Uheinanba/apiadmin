import { Map } from 'immutable';
import _ from 'lodash';
import apis from '../../core/service/apis';

const UPDATE_JSAPI_LIB_SUCCESS = 'UPDATE_JSAPI_LIB_SUCCESS';

const initState = Map({
  cates: [],
});

export const successAddCate = () => ({
  type: UPDATE_JSAPI_LIB_SUCCESS,
});

/* 添加分类 */
export const addCate = payload => async dispatch => {
  try {
    await apis.createCate({ data: payload });
    dispatch(successAddCate());
    dispatch(fetchCate());
  } catch (error) {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_JSAPI_LIB_SUCCESS:
      return state;
    default:
      return state;
  }
};
