import reducer from './reducer';
import saga from './saga';
import { startTimeseriesPolling } from './actions';

export function getChartModule() {
    return {
        id: 'chart',
        reducerMap: {
            chart: reducer,
        },
        sagas: [saga],
        initialActions: [startTimeseriesPolling('aapl')],
        finalActions: [],
    };
}
