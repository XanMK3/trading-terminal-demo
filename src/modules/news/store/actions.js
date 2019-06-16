export const START_NEWS_POLLING = 'START_NEWS_POLLING';
export const STOP_NEWS_POLLING = 'STOP_NEWS_POLLING';
export const REQUEST_NEWS_SUCCESS = 'REQUEST_NEWS_SUCCESS';
export const REQUEST_NEWS_ERROR = 'REQUEST_NEWS_ERROR';

export const startNewsPolling = symbols => ({
    type: START_NEWS_POLLING,
    payload: symbols,
});

export const stopNewsPolling = () => ({
    type: STOP_NEWS_POLLING,
});

export const requestNewsSuccess = data => ({
    type: REQUEST_NEWS_SUCCESS,
    payload: data,
});

export const requestNewsError = error => ({
    type: REQUEST_NEWS_ERROR,
    payload: error,
});
