import SYMBOLS from 'constants/symbols';
import reducer from './reducer';
import { getQuotes } from './actions';

export function getQuotesModule() {
    return {
        id: 'quotes',
        reducerMap: {
            quotes: reducer,
        },
        initialActions: [getQuotes(SYMBOLS)],
        finalActions: [],
    };
}
