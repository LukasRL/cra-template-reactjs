import { createSlice } from '@reduxjs/toolkit'

interface ExampleState {
    loading: boolean,
    succes: boolean,
    error: boolean,

  }

  const initialState: ExampleState = {
    loading: false,
    succes: false,
    error: false,
  }

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    initialExample: (state) => {
        state.loading = true
        state.succes = false
    },
    success: (state) => {
      state.succes = true
      state.loading = false
    },
    fail: (state) => {
      state.error = true
      state.loading = false
    },
  },
})

export const { initialExample, success, fail } = exampleSlice.actions

export default exampleSlice.reducer