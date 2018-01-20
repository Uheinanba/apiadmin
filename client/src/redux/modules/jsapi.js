import apis from '../../core/service/apis';
import { List, Map } from 'immutable';

const ADD_CATE_SUCCESS = 'ADD_CATE_SUCCESS';
const GET_CATES_SUCCESS = 'GET_CATES_SUCCESS';

const initState = Map({
  addCateStatus: '',
  cates: [],
});

export const successAddCate = () => ({
  type: ADD_CATE_SUCCESS,
});
export const successGetCates = payload => ({
  type: GET_CATES_SUCCESS,
  payload,
});

export const addCate = () => async dispatch => {
  const created = await apis.createCate();
  return dispatch(successAddCate());
};

export const fetchCate = () => async dispatch => {
  const cates = await apis.getCates();
  return dispatch(successGetCates(), cates);
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_CATE_SUCCESS:
      return state.set('addCateStatus', 'success');
    /* return Object.assign({}, state, {
        value: state.value + 1,
      }); */
    case GET_CATES_SUCCESS:
      return state.set('cates', action.payload);
    /* return Object.assign({}, state, {
        value: state.value + 1,
      }); */
    default:
      return state;
  }
};
