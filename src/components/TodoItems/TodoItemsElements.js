import styled from "styled-components";

export const TodoItemsContainer = styled.ul`
    width: 90%;
    height: 240px;
    background-color: transparent;
    margin-top: 2rem;
    overflow-y: scroll;
    border-radius: 1rem;
`

export const TodoItemContainer = styled.li`
    width: 100%;
    height: 50px;
    background-color: lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 2rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    color: black;
`
export const TodoItemTitle = styled.h2`
    font-size: 1.5rem;
    color: black;
    font-weight: bold;
    cursor: pointer;
`

export const TodoItemButtons = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
`

export const TodoItemCheckbox = styled.input`
    cursor: pointer;
`
export const TodoItemButtonDelete = styled.button`
    width: 100px;
    height: 30px;
    background-color: darkred;
    color: white;
    border: none;
    outline: none;
    border-radius: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    margin-left: 1rem;
    padding: 0 1rem;

    &:hover{
        background-color: red;
       
    }
`