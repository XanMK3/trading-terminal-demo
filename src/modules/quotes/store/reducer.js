import { initialState } from './selectors';
import { REQUEST_QUOTES_SUCCESS, REQUEST_QUOTES_ERROR } from './actions';

export default (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case REQUEST_QUOTES_SUCCESS:
            return {
                ...state,
                error: null,
                data: payload,
            };
        case REQUEST_QUOTES_ERROR:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};
