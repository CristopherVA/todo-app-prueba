import styled from "styled-components";

export const TodoContainer = styled.div`
    width: 350px;
    height: 450px;
    border-radius: 1rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0rem 0rem 1rem black;
    position: relative;
    
`

export const TodoTitle = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    color: gray;
    margin-top: 2rem;
    color: black;
`

export const TodoForm = styled.form`
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;
    

`
export const TodoInput = styled.input`
    width: 70%;
    height: 3.5rem;
    border: none;
    outline: none;
    background-color: lightgray;
    color: grey;
    padding-left: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 1rem;
`
export const TodoButton = styled.button`
    width: 20%;
    height: 30px;
    background-color: grey;
    color: white;
    border: none;
    outline: none;
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background-color: darkgray;
        color: black;
    }
`
export const TodoButtonSave = styled.button`
    width: 30%;
    height: 5rem;
    background-color: grey;
    color: white;
    border: none;
    outline: none;
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;  
    position: absolute;
    bottom: 10px;
    right: 10px;

    &:hover{
        background-color: darkgray;
        color: black;
    }
`