import reducer from './reducer';
import saga from './saga';
import { startNewsPolling } from './actions';

export function getNewsModule() {
    return {
        id: 'news',
        reducerMap: {
            news: reducer,
        },
        sagas: [saga],
        initialActions: [startNewsPolling()],
        finalActions: [],
    };
}
