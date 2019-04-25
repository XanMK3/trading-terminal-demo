import reducer from './reducer';
import { getTimeseries } from './actions';

export function getChartModule() {
    return {
        id: 'chart',
        reducerMap: {
            chart: reducer,
        },
        initialActions: [getTimeseries('aapl')],
        finalActions: [],
    };
}
