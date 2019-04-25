import api from './api';

export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';

export const getQuotes = symbols => (dispatch, getState, { http }) => api.get(http, symbols)
    .then(({ data }) => {
        dispatch({
            type: FETCH_QUOTES_SUCCESS,
            payload: data,
        });
    });
