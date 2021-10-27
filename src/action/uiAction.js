import { types } from "../types/types";

export const setError = (error) => ({
    type: types.uiSetError,
    payload: error
})

export const removeError = () => ({
    type: types.uiRemoveError,
})

export const setLoading = () => ({
    type: types.uiSetLoading,

})

export const setRemoveLoading = () => ({
    type: types.uiRemoveLoading,
})