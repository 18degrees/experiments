import { configureStore } from '@reduxjs/toolkit'
import indexReducer from '@/app/redux/indexSlice'

export const store = configureStore({
    reducer: {
        index: indexReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store