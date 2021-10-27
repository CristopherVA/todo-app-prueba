import { types } from "../types/types";

export const getUser = (user) => ({
    type: types.userGet,
    payload: user
})