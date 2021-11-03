import { BlockBox, ChainData, SmartContractBox, TransactionBox, VMBox } from './components'

import './App.scss'

function App() {
  return (
    <div className="app" style={{ padding: '30px' }}>
      <ChainData />
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="col-12">
              <SmartContractBox />
            </div>
            <div className="col-12">
              <VMBox />
            </div>
          </div>
        </div>
        <div className="col-4">
          <TransactionBox />
        </div>
        <div className="col-4">
          <BlockBox />
        </div>
      </div>
    </div>
  )
}

export default App
