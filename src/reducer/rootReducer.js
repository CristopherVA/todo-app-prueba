import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import {todosReducer} from '../reducer/todosReducer';
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    todos: todosReducer,
    user: userReducer
})