import expect from 'expect';

import { counter } from '../reducer/counter';

describe('test counter reducer', () => {
    it('should increment and decrement appropiately', () => {
        expect(
            counter(0, { type: 'INCREMENT' })
        ).toEqual(1);
        
        expect(
            counter(1, { type: 'INCREMENT' })
        ).toEqual(2);
        
        expect(
            counter(2, { type: 'DECREMENT' })
        ).toEqual(1);
        
        expect(
            counter(1, { type: 'DECREMENT' })
        ).toEqual(0);
    });

    it('should return the current state if it cannot understand the action being dipatched', () => {
        expect(
            counter(1, { type: 'SOMETHING_ELSE' })
        ).toEqual(1);
    });

    it('should return intial state if the action is not defined', () => {
        expect(
            counter(undefined, {})
        ).toEqual(0);
    });
});