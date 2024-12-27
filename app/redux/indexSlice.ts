import { createSlice } from '@reduxjs/toolkit'

export interface indexState {
    value: number
}
const initialState = {
    value: 0
}

const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        increment: state => {
            state.value++
        },
        nullify: state => {
            state.value = 0
        },
    }
})

export const { increment, nullify } = indexSlice.actions

export default indexSlice.reducer