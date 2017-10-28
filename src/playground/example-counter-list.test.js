import deepfreeze from 'deep-freeze';
import expect from 'expect';


const addCounter = (list) => {
    return [...list, 0];
    
    // return list.concat([0]);
    
    // modifies original array
    // list.push(0);
    // return list;
};

const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
    
    // return list
    //     .slice(0, index)
    //     .concat(list.slice(index + 1));

    // mutates array
    // list.splice(index, 1);
    // return list;
};

const incrementCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];

    // return list
    //     .slice(0, index)
    //     .concat([list[index] + 1])
    //     .concat(list.slice(index + 1));

    // mutates array
    // list[index]++
    // return list;
};

describe('AddCounter', () => {
    it('should add 0 to the list', () => {
        const listBefore = [];
        const listAfter = [0];

        deepfreeze(listBefore);
        
        expect(
            addCounter(listBefore)
        ).toEqual(listAfter);
    });
});

describe('RemoveCounter', () => {
    it('should remove 10 from the list', () => {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 20];

        deepfreeze(listBefore);

        expect(
            removeCounter(listBefore, 1)
        ).toEqual(listAfter);
    });
});

describe('IncrementCounter', () => {
    it('should increment the 2nd element', () => {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 11, 20];

        deepfreeze(listBefore);

        expect(
            incrementCounter(listBefore, 1)
        ).toEqual(listAfter);
    });
});