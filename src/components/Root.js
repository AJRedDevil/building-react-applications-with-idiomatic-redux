import React from 'react';
import { Provider }  from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import TodoApp from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={TodoApp} />
        </BrowserRouter>
    </Provider>
);

export default Root;