import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const configureStore = (initialState, { http }) => {
    const getMiddleware = () => applyMiddleware(thunk.withExtraArgument({ http }));

    const store = createStore(reducer, initialState, getMiddleware());

    return store;
};

export default configureStore;
