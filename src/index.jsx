import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux-dynamic-modules';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
import modules from 'modules';
import App from 'app';
import http from 'services/http';
import 'style/main.scss';

const store = createStore({}, [], [{ middleware: [thunk.withExtraArgument({ http })] }]);

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App modules={modules} />
        </Provider>
    </AppContainer>,
    document.querySelector('.root'),
);

if (module.hot) {
    module.hot.accept('app', () => {
        // eslint-disable-next-line global-require
        const NextApp = require('app').default;
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <NextApp modules={modules} />
                </Provider>
            </AppContainer>,
            document.querySelector('.root'),
        );
    });
}
