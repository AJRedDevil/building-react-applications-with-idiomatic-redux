import React  from 'react';

import AddTodo from './addTodo';
import VisibleTodoList from './VisibilityTodoList';
import Footer from './footer';

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default TodoApp;