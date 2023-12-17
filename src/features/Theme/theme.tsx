import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { string } from 'yup';


export interface CounterState {
      theme: string,
}

const initialState: CounterState = {
      theme: "light",
}

export const setTheme = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    setThemeColor: (state, action) => {
      state.theme = action.payload
    }
  },
})

export const { setThemeColor } = setTheme.actions

export default setTheme.reducer