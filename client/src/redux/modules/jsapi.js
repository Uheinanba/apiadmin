import apis from '../../core/service/apis';
import { List, Map } from 'immutable';

const ADD_CATE_SUCCESS = 'ADD_CATE_SUCCESS';

const GET_CATES_REQUEST = 'GET_CATES_REQUEST';
const GET_CATES_SUCCESS = 'GET_CATES_SUCCESS';
const GET_CATES_ERROR = 'GET_CATES_ERROR';

const initState = Map({
  addCateStatus: '',
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

export const addCate = () => async dispatch => {
  dispatch(requestGetCates());
  try {
    const created = await apis.createCate();
    dispatch(successAddCate());
  } catch (error) {
    dispatch(errorGetCates());
  }
};

export const fetchCate = () => async dispatch => {
  const cates = await apis.getCates();
  return dispatch(successGetCates(), cates);
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_CATE_SUCCESS:
      return state.set('addCateStatus', 'success');
    case GET_CATES_REQUEST:
      return state.set({ getCateStatus: 'request' });
    case GET_CATES_SUCCESS:
      return state.set({ cates: action.payload, getCateStatus: 'success' });
    case GET_CATES_ERROR:
      return state.set({ getCateStatus: 'error' });
    default:
      return state;
  }
};
