import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
      name: string,
      email: string,
      password: string,
      repeatPassword: string
}

const initialState: CounterState = {
  name: "Mr. X",
  email: "",
  password: "",
  repeatPassword: ""
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<any>) => {
      state.name = action.payload.name,
      state.email = action.payload.email,
      state.password = action.payload.password,
      state.repeatPassword = action.payload.repeatPassword
    },
  },
})

export const { registerUser } = registerSlice.actions

export default registerSlice.reducer