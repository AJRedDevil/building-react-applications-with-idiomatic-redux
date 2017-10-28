import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from './todo';
import { toggleTodo } from '../actions';

const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
);
TodoList.propTypes = {
    todos: PropTypes.arrayOf( PropTypes.object ).isRequired,
    onTodoClick: PropTypes.func.isRequired,
};

const getVisibileTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return  todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
        default:
            return todos;
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibileTodos(
        state.todos,
        state.visibilityFilter
    )
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id));
    }
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;