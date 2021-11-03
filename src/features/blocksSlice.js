import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  byHeight: {},
  //   ordered: [],
}

export const blocksSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    addTxToBlock: (state, action) => {
      const { hash, network, block } = action.payload

      if (state.byHeight[block]) {
        state.byHeight[block].transactions.push(hash)
      } else {
        state.byHeight[block] = {
          'chain ID': network,
          'block height': `${block}`,
          timestamp: Date.now(),
          transactions: [hash],
          proposer: 'terra bites',
        }
      }
      //   state.ordered.push(txHash)
    },
  },
})

export const { addTxToBlock } = blocksSlice.actions

export default blocksSlice.reducer
