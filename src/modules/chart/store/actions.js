export const START_TIMESERIES_POLLING = 'START_TIMESERIES_POLLING';
export const STOP_TIMESERIES_POLLING = 'STOP_TIMESERIES_POLLING';
export const REQUEST_TIMESERIES_SUCCESS = 'REQUEST_TIMESERIES_SUCCESS';
export const REQUEST_TIMESERIES_ERROR = 'REQUEST_TIMESERIES_ERROR';

export const startTimeseriesPolling = symbol => ({
    type: START_TIMESERIES_POLLING,
    payload: symbol,
});

export const stopTimeseriesPolling = () => ({
    type: STOP_TIMESERIES_POLLING,
});

export const requestTimeseriesSuccess = data => ({
    type: REQUEST_TIMESERIES_SUCCESS,
    payload: data,
});

export const requestTimeseriesError = error => ({
    type: REQUEST_TIMESERIES_ERROR,
    payload: error,
});
