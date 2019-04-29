import SYMBOLS from 'constants/symbols';
import reducer from './reducer';
import { getTrades } from './actions';

export function getTradesModule() {
    return {
        id: 'trades',
        reducerMap: {
            trades: reducer,
        },
        initialActions: [getTrades(SYMBOLS)],
        finalActions: [],
    };
}
