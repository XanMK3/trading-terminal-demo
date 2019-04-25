import api from './api';

export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';

export const getNews = () => (dispatch, getState, { http }) => api.getAll(http)
    .then(({ data }) => {
        dispatch({
            type: FETCH_NEWS_SUCCESS,
            payload: data,
        });
    });
