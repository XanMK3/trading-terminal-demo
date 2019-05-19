import SYMBOLS from 'constants/symbols';
import reducer from './reducer';
import saga from './saga';
import { startQuotesPolling } from './actions';

export function getQuotesModule() {
    return {
        id: 'quotes',
        reducerMap: {
            quotes: reducer,
        },
        sagas: [saga],
        initialActions: [startQuotesPolling(SYMBOLS)],
        finalActions: [],
    };
}
