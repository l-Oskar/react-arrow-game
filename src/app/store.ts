import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"

import playgroundReducer from "../components/Playground/store/slices"

export const store = configureStore({
  reducer: {
    playground: playgroundReducer,
  },
})

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]

export type RootState = ReturnType<typeof store.getState>
