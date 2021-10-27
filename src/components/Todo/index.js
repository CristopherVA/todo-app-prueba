import React, { useState, useEffect } from 'react';
import { TodoItems } from '../TodoItems';
import { useDispatch, useSelector } from 'react-redux';

import {
    TodoContainer,
    TodoTitle,
    TodoForm,
    TodoInput,
    TodoButton,
    TodoButtonSave
} from './TodoElements';

import { getAllTodo, postTodo, putTodo } from '../../action/todoAction';
// import { useFetchQuery } from '../../hooks/useFetchQuery';

import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import { getFetchTodo, getFetchUser } from '../../helpers/FetchTodo';
import { HeadBodyGrid } from '../HeadBodyGrid';
import { getUser } from '../../action/userAction';

export const Todo = () => {

    const {isLoading, isError, error, data} = useQuery('todos', getFetchTodo);
    const query = useQuery('user', getFetchUser);

    useEffect(() => {

        if(isLoading){
            return <HeadBodyGrid />
        }

        if(isError){
            return Swal.fire("Error", error, "error");
        }

        dispatch(getAllTodo(data))
        dispatch(getUser(query.data))

    }, [data])

    const [inputValue, setInputValue] = useState({
        title: '',
        completed: false
    })
    
    const { title, completed } = inputValue;

    const handleChange = e => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch();

    const {user} = useSelector(state => state.user)



    const hanldeSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
       
            title,
            completed
        }

        dispatch(postTodo(newTodo))
    }

    return (
        <TodoContainer>
            <TodoTitle>TODO APP</TodoTitle>
            <TodoItems />
            <TodoForm onSubmit={ hanldeSubmit } >
                <TodoInput 
                    type='text' 
                    name="title"
                    onChange={handleChange}
                    value={title}
                    placeholder='Add a new Task...' 
                />
                <input type="checkbox" onChange={handleChange} value={completed} />
                <TodoButton type='submit'>Add</TodoButton>
            </TodoForm>
            <TodoButtonSave type="button">Guardar</TodoButtonSave>
        </TodoContainer>
    )
}
