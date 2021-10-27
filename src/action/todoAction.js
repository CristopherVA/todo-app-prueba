
import Swal from "sweetalert2";
import { deleteFetchTodo, postFetchTodo, putFetchTodo } from "../helpers/FetchTodo";
import { types } from "../types/types";

export const getAllTodo = (todos) => ({
    type: types.todoGetAll,
    payload: todos
})

export const postTodo = (todo) => {
    return (dispatch) => {
        postFetchTodo(todo)
            .then(res => {
                dispatch(addNewTodo(todo))
                Swal.fire("Success", res, "success")
            })
            .catch( e => {
                Swal.fire("Error", e.message, "error")
            })
    }
}

export const putTodo = (todo) => {
    return async (dispatch) => {
        putFetchTodo(todo)
            .then(res => {
                console.log(res)
            })
            .catch( e => {
                Swal.fire("Error", e.message, "error")
            })
    }
}

export const deleteFTodo = (id) => {
    return(dispatch) => {
        deleteFetchTodo(id)
            .then(res => {
                dispatch(deleteTodo(id))
                Swal.fire("Success", res = "Elimindo", "success")
            })
            .catch(e => {
                Swal.fire("Error", e.message, "error")
               
            })
    }
}

export const activeTodo = (todoActive) => ({
    type: types.todoActive,
    action: todoActive
})


const addNewTodo = (todo) => ({
    type: types.todoAddNew,
    action: todo
})

const updateTodo = (id) => ({
    type: types.todoUpdate,
    action: id
})

const deleteTodo = (todoId) => ({
    type: types.todoAddNew,
    action: todoId
})