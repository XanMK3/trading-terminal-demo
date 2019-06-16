import { initialState } from './selectors';
import { REQUEST_NEWS_SUCCESS } from './actions';

export default (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case REQUEST_NEWS_SUCCESS:
            return { ...state, data: payload };
        default:
            return state;
    }
};
