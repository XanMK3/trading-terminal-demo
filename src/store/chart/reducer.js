import { initialState } from './selectors';
import { FETCH_TIMESERIES_SUCCESS } from './actions';

export default (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case FETCH_TIMESERIES_SUCCESS:
            return { ...state, data: payload };
        default:
            return state;
    }
};
