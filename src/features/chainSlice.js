import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  network: 'columbus-5',
  block: 0,
}

export const chainSlice = createSlice({
  name: 'chain',
  initialState,
  reducers: {
    updateBlock: (state, action) => {
      state.block = state.block++
    },
  },
})

export const { updateBlock } = chainSlice.actions

export default chainSlice.reducer
