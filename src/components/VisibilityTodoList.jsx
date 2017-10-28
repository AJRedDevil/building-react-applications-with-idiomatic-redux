import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleTodo } from '../actions';
import TodoList from './todoList';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, { match: { params } }) => ({
    todos: getVisibleTodos(
        state,
        params.filter || 'all'
    )
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;