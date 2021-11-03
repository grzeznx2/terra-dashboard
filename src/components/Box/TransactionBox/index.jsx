import React from 'react'
import { useSelector } from 'react-redux'
import Box from '..'

const TransactionBox = () => {
  const txCount = useSelector(state => state.transactions.ordered.length)
  const lastHash = useSelector(state => state.transactions.ordered[txCount - 1])
  const lastTransaction = useSelector(state => state.transactions.byHash[lastHash])
  return <Box title="Transaction" hasGetInfo={true} linkType="tx" linkTo={lastHash} data={lastTransaction} />
}

export default TransactionBox
