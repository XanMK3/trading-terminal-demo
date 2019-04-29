import api from './api';

export const FETCH_TRADES_SUCCESS = 'FETCH_TRADES_SUCCESS';

export const getTrades = symbols => (dispatch, getState, { http }) => api.get(http, symbols)
    .then(({ data }) => {
        dispatch({
            type: FETCH_TRADES_SUCCESS,
            payload: data,
        });
    });
