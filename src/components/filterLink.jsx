import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions';

const Link = ({
    active,
    onClick,
    children
}) => {
    if (active) {
        return <span>{children}</span>;
    }
    
    return (
        <a
            href='#'
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
    );
};

const mapStateToProps = (
    state,
    ownProps
) => ({
    active:
        ownProps.filter ===
        state.visibilityFilter
});

const mapDispatchToProps = (
    dispatch,
    ownProps
) => ({
    onClick() {
        dispatch(setVisibilityFilter(ownProps.filter));
    },
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;