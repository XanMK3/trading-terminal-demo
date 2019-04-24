import { initialState } from './selectors';
import { FETCH_QUOTES_SUCCESS } from './actions';

export default (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case FETCH_QUOTES_SUCCESS:
            return { ...state, data: payload };
        default:
            return state;
    }
};
