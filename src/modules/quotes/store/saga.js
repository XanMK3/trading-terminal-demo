import {
    getContext,
    takeLatest,
    call,
    put,
    race,
    take,
} from 'redux-saga/effects';
import {
    START_QUOTES_POLLING,
    STOP_QUOTES_POLLING,
    requestQuotesSuccess,
    requestQuotesError,
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
            const { data } = yield call(http.get, `tops/last?symbols=${symbols.join()}`);
            yield put(requestQuotesSuccess(data));
        }
        catch (error) {
            yield put(requestQuotesError(error));
        }

        yield call(delay, TIMEOUT);
    }
}

function* pollSagaWatcher(action) {
    const symbols = action.payload;

    yield race([
        call(pollSagaWorker, symbols),
        take(STOP_QUOTES_POLLING),
    ]);
}

export default function* rootSaga() {
    yield takeLatest(START_QUOTES_POLLING, pollSagaWatcher);
}
