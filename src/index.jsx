import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
import App from './components/app';
import configureStore from 'store/configure';

const store = configureStore();

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
            </AppContainer>, document.querySelector('.root'),
        );
    });
}
