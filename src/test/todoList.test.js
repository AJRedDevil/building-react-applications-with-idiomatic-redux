import deepfreeze from 'deep-freeze';
import expect from 'expect';

import todos from '../reducer/todos';

describe('AddTodo', () => {
    it('should add new todo', () => {
        const stateBefore = [];
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ];

        deepfreeze(stateBefore);
        deepfreeze(action);

        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter);
    });
});


describe('ToggleTodo', () => {
    it('should toggle completed', () => {
        const stateBefore = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Take Rest',
                completed: false
            }
        ];
        const action = {
            type: 'TOGGLE_TODO',
            id: 1
        }
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Take Rest',
                completed: true
            }
        ];

        deepfreeze(stateBefore);
        deepfreeze(action);

        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter);
    });
});