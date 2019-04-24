import api from './api';

export const FETCH_TIMESERIES_SUCCESS = 'FETCH_TIMESERIES_SUCCESS';

export const getTimeseries = symbol => (dispatch, getState, { http }) => (
    api.getTimeseries(http, symbol)
        .then(({ data }) => {
            dispatch({
                type: FETCH_TIMESERIES_SUCCESS,
                payload: data,
            });
        })
);
