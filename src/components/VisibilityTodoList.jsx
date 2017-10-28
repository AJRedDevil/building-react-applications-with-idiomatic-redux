import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleTodo } from '../actions';
import TodoList from './todoList';

const getVisibileTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return  todos.filter(
                t => t.completed
            );
        case 'active':
            return todos.filter(
                t => !t.completed
            );
        default:
            return todos;
    }
}

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibileTodos(
        state.todos,
        ownProps.filter
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