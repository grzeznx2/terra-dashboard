import React from 'react'
import { useSelector } from 'react-redux'

const ChainData = () => {
  const { network, block } = useSelector(state => state.chain)
  return (
    <div style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
      <div>Network: {network}</div>
      <div>Current Block: {block}</div>
    </div>
  )
}

export default ChainData
