import { Map } from 'immutable';
import _ from 'lodash';
import apis from '../../core/service/apis';

const ADD_CATE_SUCCESS = 'ADD_CATE_SUCCESS';

const GET_CATES_REQUEST = 'GET_CATES_REQUEST';
const GET_CATES_SUCCESS = 'GET_CATES_SUCCESS';
const GET_CATES_ERROR = 'GET_CATES_ERROR';

const initState = Map({
  getCateStatus: '',
  cates: [],
});

export const successAddCate = () => ({
  type: ADD_CATE_SUCCESS,
});

export const requestGetCates = () => ({
  type: GET_CATES_REQUEST,
});
export const successGetCates = payload => ({
  type: GET_CATES_SUCCESS,
  payload,
});
export const errorGetCates = payload => ({
  type: GET_CATES_ERROR,
});

/* 添加分类 */
export const addCate = payload => async dispatch => {
  try {
    await apis.createCate({ data: payload });
    dispatch(successAddCate());
    dispatch(fetchCate());
  } catch (error) {}
};

/* 获取分类列表 */
export const fetchCate = () => async dispatch => {
  dispatch(requestGetCates());
  try {
    const cates = await apis.getCates();
    return dispatch(successGetCates(cates));
  } catch (error) {
    dispatch(errorGetCates());
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_CATE_SUCCESS:
      return state;
    case GET_CATES_REQUEST:
      return state.set('getCateStatus', 'request');
    case GET_CATES_SUCCESS:
      return state.merge({ cates: action.payload, getCateStatus: 'success' });
    case GET_CATES_ERROR:
      return state.set('getCateStatus', 'error');
    default:
      return state;
  }
};
