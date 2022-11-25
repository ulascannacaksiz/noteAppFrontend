import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "../stores/login"
export const store = configureStore({
  reducer: {
    login:loginReducer,
  },
})