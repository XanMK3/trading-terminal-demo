export const START_TRADES_POLLING = 'START_TRADES_POLLING';
export const STOP_TRADES_POLLING = 'STOP_TRADES_POLLING';
export const REQUEST_TRADES_SUCCESS = 'REQUEST_TRADES_SUCCESS';
export const REQUEST_TRADES_ERROR = 'REQUEST_TRADES_ERROR';

export const startTradesPolling = symbols => ({
    type: START_TRADES_POLLING,
    payload: symbols,
});

export const stopTradesPolling = () => ({
    type: STOP_TRADES_POLLING,
});

export const requestTradesSuccess = data => ({
    type: REQUEST_TRADES_SUCCESS,
    payload: data,
});

export const requestTradesError = error => ({
    type: REQUEST_TRADES_ERROR,
    payload: error,
});
