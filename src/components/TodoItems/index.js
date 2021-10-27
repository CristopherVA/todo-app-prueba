import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    TodoItemsContainer,
    TodoItemContainer,
    TodoItemTitle,
    TodoItemButtons,
    TodoItemCheckbox,
    TodoItemButtonDelete,
} from './TodoItemsElements';
import * as FaIcons from 'react-icons/fa';
import { activeTodo, deleteFTodo } from '../../action/todoAction';

export const TodoItems = () => {
    const { todos } = useSelector(state => state.todos)

    const dispatch = useDispatch()

    return (
        <TodoItemsContainer>
            {
                todos.map( (todo, i) => {
                    return (
                        <TodoItemContainer key={todo?.id} >
                            <TodoItemTitle>{todo?.title}</TodoItemTitle>
                            <TodoItemButtons>
                                <TodoItemCheckbox type='checkbox' checked={todo?.completed} />
                                <TodoItemButtonDelete 
                                    onClick={() => dispatch(deleteFTodo(todo?.id))}
                                ><FaIcons.FaRegTrashAlt /></TodoItemButtonDelete>
                            </TodoItemButtons>
                        </TodoItemContainer>
                    )
                })
            }
        </TodoItemsContainer>
    )
}
