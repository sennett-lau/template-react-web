import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
  },
})

setupListeners(store.dispatch)

export { store }
export type RootState = ReturnType<typeof store.getState>

