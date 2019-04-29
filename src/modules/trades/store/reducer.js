import { initialState } from './selectors';
import { FETCH_TRADES_SUCCESS } from './actions';

export default (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case FETCH_TRADES_SUCCESS:
            return { ...state, data: payload };
        default:
            return state;
    }
};
