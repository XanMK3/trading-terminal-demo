import {
    getContext,
    takeLatest,
    call,
    put,
    race,
    take,
} from 'redux-saga/effects';
import {
    START_NEWS_POLLING,
    STOP_NEWS_POLLING,
    requestNewsSuccess,
    requestNewsError,
} from './actions';

const TIMEOUT = 60 * 1000;

function delay(duration) {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(true), duration);
    });
    return promise;
}

function* pollSagaWorker() {
    const http = yield getContext('http');

    while (true) {
        try {
            const { data } = yield call(http.get, 'stock/market/news/last/50');
            yield put(requestNewsSuccess(data));
        }
        catch (error) {
            yield put(requestNewsError(error));
        }

        yield call(delay, TIMEOUT);
    }
}

function* pollSagaWatcher() {
    yield race([
        call(pollSagaWorker),
        take(STOP_NEWS_POLLING),
    ]);
}

export default function* rootSaga() {
    yield takeLatest(START_NEWS_POLLING, pollSagaWatcher);
}
