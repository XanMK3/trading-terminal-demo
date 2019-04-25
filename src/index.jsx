import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux-dynamic-modules';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
import App from 'components/app';
import http from 'services/http';
import 'style/main.scss';

const store = createStore(
    /* initial state */
    {},

    /* enhancers */
    [],

    /* Extensions to load */
    [{ middleware: [thunk.withExtraArgument({ http })] }],

    /* modules */
    // getModule(),
);

window.store = store;

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    document.querySelector('.root'),
);

if (module.hot) {
    module.hot.accept('./components/app', () => {
        // eslint-disable-next-line global-require
        const NextApp = require('./components/app').default;
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <NextApp />
                </Provider>
            </AppContainer>,
            document.querySelector('.root'),
        );
    });
}
