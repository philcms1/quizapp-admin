import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import 'semantic-ui-css/semantic.min.css';
import './index.scss';
import App from './app/layout/App';

const store = configureStore();

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
