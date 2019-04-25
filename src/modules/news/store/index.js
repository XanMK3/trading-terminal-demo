import reducer from './reducer';
import { getNews } from './actions';

export function getNewsModule() {
    return {
        id: 'news',
        reducerMap: {
            news: reducer,
        },
        initialActions: [getNews()],
        finalActions: [],
    };
}
