import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from '../features/transactionsSlice'
import smartContractReducer from '../features/smartContractSlice'
import chainReducer from '../features/chainSlice'
import blocksReducer from '../features/blocksSlice'

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    chain: chainReducer,
    blocks: blocksReducer,
    smartContract: smartContractReducer,
  },
})
