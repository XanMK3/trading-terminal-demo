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

const render = (AppComponent) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <AppComponent modules={modules} />
            </Provider>
        </AppContainer>,
        document.querySelector('.root'),
    );
};

if (module.hot) {
    module.hot.accept('app', () => {
        // eslint-disable-next-line global-require
        render(require('app').default);
    });
}

window.onload = () => {
    render(App);
};
