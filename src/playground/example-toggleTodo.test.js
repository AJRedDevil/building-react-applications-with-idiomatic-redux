import deepfreeze from 'deep-freeze';
import expect from 'expect';

const toggleTodo = (todo) => {
    // Babel stage 2 preset
    return {
        ...todo,
        completed: !todo.completed
    };
    
    // // ES6 -- appolo field
    // return Object.assign({}, todo, {
    //     completed: !todo.completed
    // });

    // mutates object
    // todo.completed = !todo.completed;
    // return todo;
};

describe('ToggleTodo', () => {
    it('should', () => {
        const todoBefore = {
            id: 0,
            text: 'Learn Redux',
            completed: false
        };
        const todoAfter = {
            id: 0,
            text: 'Learn Redux',
            completed: true
        };

        deepfreeze(todoBefore);

        expect(
            toggleTodo(todoBefore)
        ).toEqual(todoAfter);
    });
});