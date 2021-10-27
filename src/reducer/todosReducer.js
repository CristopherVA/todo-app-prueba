import { types } from "../types/types";

const initialState = {
    todos: [],
    todoActive: {}
}

export const todosReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.todoGetAll:
            return{
                ...state,
                todos: [
                    ...action.payload
                ]
            }
        case types.todoAddNew:
            return {
                ...state,
                todos: [ action.payload, ...state.todos]
            }
        case types.todoDelete:
            return {
                ...state,
                todos: [
                    ...state.todos.filter(todo => todo.id !== action.payload)
                ]
            }   
        case types.todoActive:
            return {
                ...state,
                todoActive: action.payload
            }
        default:
            return state;
    }
}