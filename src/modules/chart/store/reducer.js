import { initialState } from './selectors';
import { REQUEST_TIMESERIES_SUCCESS } from './actions';

export default (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case REQUEST_TIMESERIES_SUCCESS:
            return { ...state, data: payload };
        default:
            return state;
    }
};
