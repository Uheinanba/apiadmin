import { Map } from 'immutable';
import _ from 'lodash';
import apis from '../../core/service/apis';

const GET_APIS_SUCCESS = 'GET_APIS_SUCCESS';

const ADD_APIS_SUCCESS = 'ADD_APIS_SUCCESS';

const initState = Map({
  apis: [],
});

export const successGetApis = payload => ({
  type: GET_APIS_SUCCESS,
  payload,
});

export const successAddApi = payload => ({
  type: ADD_APIS_SUCCESS,
  payload,
});

/* 获取jsapi列表 */
export const fetchApis = id => async dispatch => {
  const cates = await apis.getApis({ data: { id } });
  return dispatch(successGetApis(cates));
};

export const addApi = data => async dispatch => {
  await apis.createApi({ data });
  return dispatch(successAddApi());
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_APIS_SUCCESS:
      return state.set('apis', action.payload);
    // state.merge({ apis: action.payload });
    case ADD_APIS_SUCCESS:
    default:
      return state;
  }
};
