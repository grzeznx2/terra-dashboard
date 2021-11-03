import React from 'react'
import { useSelector } from 'react-redux'
import Box from '..'

const BlockBox = () => {
  const { block } = useSelector(state => state.chain)
  const currentBlock = useSelector(state => state.blocks.byHeight[block])

  return <Box title="Block" hasGetInfo={true} linkType="blocks" linkTo={currentBlock?.['block height']} data={currentBlock} />
}

export default BlockBox
