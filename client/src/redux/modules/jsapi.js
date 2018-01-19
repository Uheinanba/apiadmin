import apis from '../../core/service/apis';

const ADD_CATE_SUCCESS = 'ADD_CATE_SUCCESS';
const GET_CATES_SUCCESS = 'GET_CATES_SUCCESS';

const initState = {
  cates: [],
};

export const successAddCate = () => ({
  type: ADD_CATE_SUCCESS,
});
export const successGetCates = () => ({
  type: GET_CATES_SUCCESS,
});

export const addCate = () => async dispatch => {
  const created = await apis.createCate();
  return dispatch(successAddCate());
};

export const fetchCate = () => async dispatch => {
  const cates = await apis.getCates();
  return dispatch(successGetCates());
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_CATE_SUCCESS:
    /* return Object.assign({}, state, {
        value: state.value + 1,
      }); */
    case GET_CATES_SUCCESS:
    /* return Object.assign({}, state, {
        value: state.value + 1,
      }); */
    default:
      return state;
  }
};
