import { Map } from 'immutable';
import _ from 'lodash';
import apis from '../../core/service/apis';

const GET_SSH_AUTH = 'GET_SSH_AUTH';
const UPDATE_JSAPI_LIB_SUCCESS = 'UPDATE_JSAPI_LIB_SUCCESS';

const initState = Map({
  auth: {},
});

export const getAuth = payload => ({
  type: GET_SSH_AUTH,
  payload,
});

export const successUpdateJsapiLib = () => ({
  type: UPDATE_JSAPI_LIB_SUCCESS,
});

/* 登陆 */
export const aliLogin = payload => dispatch => {
  dispatch(getAuth(payload));
};

export const updateJsapiLib = payload => async dispatch => {
  try {
    await apis.updateJsapiLib({ data: payload });
    dispatch(successUpdateJsapiLib());
  } catch (error) {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_SSH_AUTH:
      return state.set('auth', action.payload);
    case UPDATE_JSAPI_LIB_SUCCESS:
    default:
      return state;
  }
};
