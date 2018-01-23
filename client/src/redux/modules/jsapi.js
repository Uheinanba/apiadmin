import { Map } from 'immutable';
import _ from 'lodash';
import apis from '../../core/service/apis';

const GET_APIS_SUCCESS = 'GET_APIS_SUCCESS';
const ADD_APIS_SUCCESS = 'ADD_APIS_SUCCESS';
const DEL_APIS_SUCCESS = 'DEL_APIS_SUCCESS';
const UPDATE_APIS_SUCCESS = 'UPDATE_APIS_SUCCESS';

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

export const successDelApi = payload => ({
  type: DEL_APIS_SUCCESS,
  payload,
});

export const successUpdateApi = payload => ({
  type: UPDATE_APIS_SUCCESS,
  payload,
});
/* 获取jsapi列表 */
export const fetchApis = id => async dispatch => {
  const cates = await apis.getApis({ data: { id } });
  dispatch(successGetApis(cates));
};

export const addApi = data => async dispatch => {
  await apis.createApi({ data });
  dispatch(fetchApis(data.id));
  dispatch(successAddApi());
};

export const deleteApi = data => async dispatch => {
  await apis.deleteApi({ data });
  dispatch(fetchApis(data.id));
  dispatch(successDelApi());
};

export const updateApi = data => async dispatch => {
  await apis.updateApi({ data });
  dispatch(fetchApis(data.id));
  dispatch(successUpdateApi());
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_APIS_SUCCESS:
      return state.set('apis', action.payload);
    case DEL_APIS_SUCCESS:
    case ADD_APIS_SUCCESS:
    case UPDATE_APIS_SUCCESS:
    default:
      return state;
  }
};
