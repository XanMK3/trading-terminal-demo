import SYMBOLS from 'constants/symbols';
import reducer from './reducer';
import saga from './saga';
import { startTradesPolling } from './actions';

export function getTradesModule() {
    return {
        id: 'trades',
        reducerMap: {
            trades: reducer,
        },
        sagas: [saga],
        initialActions: [startTradesPolling(SYMBOLS)],
        finalActions: [],
    };
}
