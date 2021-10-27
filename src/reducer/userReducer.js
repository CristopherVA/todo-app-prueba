import { types } from "../types/types";

const initialState = {
    user: []
}

export const userReducer = (state =  initialState, action) => {
    switch (action.type) {

        case types.userGet:
            return{
                ...state,
                user: [action.payload]
            }
    
        default:
            return state;
    }
}