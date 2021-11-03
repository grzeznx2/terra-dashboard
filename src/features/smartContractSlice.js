import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  address: 'terra1kalp2knjm4cs3f59ukr4hdhuuncp648eqrgshw',
}

export const smartContractSlice = createSlice({
  name: 'smartContract',
  initialState,
  reducers: {},
})

export default smartContractSlice.reducer
