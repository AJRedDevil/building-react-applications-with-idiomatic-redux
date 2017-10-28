import React  from 'react';

import AddTodo from './addTodo';
import VisibleTodoList from './VisibilityTodoList';
import Footer from './footer';

const TodoApp = ({ match : { params } }) => (
    <div>
        <AddTodo />
        <VisibleTodoList
            filter={params.filter || 'all'}
        />
        <Footer />
    </div>
);

export default TodoApp;