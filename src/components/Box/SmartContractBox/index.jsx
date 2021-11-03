import React from 'react'
import { useSelector } from 'react-redux'
import Box from '..'

const smartContractData = {
  'Instantiate Messages': 'something',
  'Execute Messages': {
    addmodperson: {
      isExecutable: true,
      fields: [
        {
          name: 'id',
          type: 'i32',
        },
        {
          name: 'name',
          type: 'String',
        },
      ],
    },
  },
  'Query Messages': 'something',
}

const SmartContractBox = () => {
  const smartContract = useSelector(state => state.smartContract)

  return <Box title="Smart Contract" linkType="address" linkTo={smartContract.address} data={smartContractData} />
}

export default SmartContractBox
