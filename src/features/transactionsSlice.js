import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  byHash: {},
  ordered: [],
}

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    createTx: (state, action) => {
      const { network, block, hash } = action.payload
      state.byHash[hash] = {
        hash,
        status: 'success',
        network,
        block: { isLink: true, value: `${block}`, url: `https://finder.terra.money/columbus-5/blocks/${block}` },
        fee: `0`,
        timestamp: Date.now(),
      }
      state.ordered.push(hash)
    },
  },
})

export const { createTx } = transactionsSlice.actions

export default transactionsSlice.reducer
