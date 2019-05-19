export const START_QUOTES_POLLING = 'START_QUOTES_POLLING';
export const STOP_QUOTES_POLLING = 'STOP_QUOTES_POLLING';
export const REQUEST_QUOTES_SUCCESS = 'REQUEST_QUOTES_SUCCESS';
export const REQUEST_QUOTES_ERROR = 'REQUEST_QUOTES_ERROR';

export const startQuotesPolling = symbols => ({
    type: START_QUOTES_POLLING,
    payload: symbols,
});

export const stopQuotesPolling = () => ({
    type: STOP_QUOTES_POLLING,
});

export const requestQuotesSuccess = data => ({
    type: REQUEST_QUOTES_SUCCESS,
    payload: data,
});

export const requestQuotesError = error => ({
    type: REQUEST_QUOTES_ERROR,
    payload: error,
});
