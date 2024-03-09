import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6'

import { history, store } from '@redux/configure-store';

import 'normalize.css';
import './index.scss';
import Router from './routes/router';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU'
import moment from "moment";
import ru from 'antd/es/date-picker/locale/ru_RU';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

moment.locale("ru")

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider locale={ruRU}>
                <HistoryRouter history={history}>
                    <Router/>
                </HistoryRouter>
            </ConfigProvider>
        </Provider>
    </React.StrictMode>,
);
