import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import TodoList from './todoList';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

class VisibleTodoList extends Component {
    
    componentDidMount() {
        fetchTodos(this.props.filter).then(todos =>
            this.fetchData()
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }    
    }

    fetchData() {
        const { filter, receiveTodos } = this.props;
        fetchTodos(filter).then(todos =>
            receiveTodos(filter, todos)
        );
    }
    
    render() {
        const { toggleTodo, ...rest } = this.props;
        return (
            <TodoList
                {...rest}
                onTodoClick={toggleTodo}
            />
        );
    }
}

const mapStateToProps = (state, { match: { params } }) => {
    const filter = params.filter || 'all';
    return {
        todos: getVisibleTodos(state, filter),
        filter,
    }
};

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList));

export default VisibleTodoList;