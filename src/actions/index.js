//ACTION CREATORS   

let todoId = 1000;
let listId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: todoId++,
    text
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const editTodo =  (id, text) => ({
    type: 'EDIT_TODO',
    id,
    text
});

export const newList = text => ({
    type: 'NEW_LIST',
    id: listId++,
    text
});

export const changeList = id => ({
    type: 'CHANGE_LIST',
    id
});