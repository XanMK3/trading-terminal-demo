import {
    getContext,
    takeLatest,
    call,
    put,
    race,
    take,
} from 'redux-saga/effects';
import {
    START_TRADES_POLLING,
    STOP_TRADES_POLLING,
    requestTradesSuccess,
    requestTradesError,
} from './actions';

const TIMEOUT = 1000;

function delay(duration) {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(true), duration);
    });
    return promise;
}

function* pollSagaWorker(symbols) {
    const http = yield getContext('http');

    while (true) {
        try {
            const { data } = yield call(http.get, `deep/trades?symbols=${symbols.join()}`);
            yield put(requestTradesSuccess(data));
        }
        catch (error) {
            yield put(requestTradesError(error));
        }

        yield call(delay, TIMEOUT);
    }
}

function* pollSagaWatcher(action) {
    const symbols = action.payload;

    yield race([
        call(pollSagaWorker, symbols),
        take(STOP_TRADES_POLLING),
    ]);
}

export default function* rootSaga() {
    yield takeLatest(START_TRADES_POLLING, pollSagaWatcher);
}
