import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import sampleSlice from './sampleSlice'

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    sample: sampleSlice,
  },
})

setupListeners(store.dispatch)

export { store }
export type RootState = ReturnType<typeof store.getState>

