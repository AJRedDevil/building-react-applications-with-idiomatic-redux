import React from 'react';
import { withRouter } from 'react-router';
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

const mapStateToProps = (state, { match: { params } }) => ({
    todos: getVisibileTodos(
        state.todos,
        params.filter || 'all'
    )
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;