import React from 'react';
import { Provider }  from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import TodoApp from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/:filter?' component={TodoApp} />
        </BrowserRouter>
    </Provider>
);
Root.propTypes = {
    store: PropTypes.oneOfType( [
        PropTypes.func.isRequired,
        PropTypes.object.isRequired
    ] ).isRequired
};

export default Root;