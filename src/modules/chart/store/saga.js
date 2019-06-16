import {
    getContext,
    takeLatest,
    call,
    put,
    race,
    take,
} from 'redux-saga/effects';
import {
    START_TIMESERIES_POLLING,
    STOP_TIMESERIES_POLLING,
    requestTimeseriesSuccess,
    requestTimeseriesError,
} from './actions';

const TIMEOUT = 60 * 1000;

function delay(duration) {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(true), duration);
    });
    return promise;
}

function* pollSagaWorker(symbol) {
    const http = yield getContext('http');

    while (true) {
        try {
            const { data } = yield call(http.get, `stock/${symbol}/time-series/1d`);
            const formattedData = data.map((d) => {
                const yyyy = d.date.substr(0, 4);
                const MM = d.date.substr(4, 2);
                const dd = d.date.substr(6, 2);
                const hh = d.minute.substr(0, 2);
                const mm = d.minute.substr(3, 2);
                return { ...d, date: new Date(yyyy, MM, dd, hh, mm, 30) };
            });
            yield put(requestTimeseriesSuccess(formattedData));
        }
        catch (error) {
            yield put(requestTimeseriesError(error));
        }

        yield call(delay, TIMEOUT);
    }
}

function* pollSagaWatcher(action) {
    const symbol = action.payload;

    yield race([
        call(pollSagaWorker, symbol),
        take(STOP_TIMESERIES_POLLING),
    ]);
}

export default function* rootSaga() {
    yield takeLatest(START_TIMESERIES_POLLING, pollSagaWatcher);
}
