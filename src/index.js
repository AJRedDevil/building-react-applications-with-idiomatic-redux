import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider }  from 'react-redux';

import TodoApp from './todoApp/app';
import todos from './reducer/todoApp';

const store = createStore(
    todos,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);