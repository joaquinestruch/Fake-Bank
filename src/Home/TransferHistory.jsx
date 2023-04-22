import React from 'react'
import { v4 as uuidv4 } from 'uuid';
function TransferHistory({transaccions}) {
  return (
    <div className='home-transfer-history'>

        {
          transaccions != undefined ? (
            transaccions.reverse().map((t) => {
              return(
                <div className='div-transaccion-history-indi' key={uuidv4()}>
                  <p>
                    Transaction
                  </p>

                  {
                      t.type == "received" ? <p className='p-green'>  +{t.amount}</p> : <p className='p-red'> -{t.amount}</p>
                  }
                </div>
              )
            })
          ) : <span>There are no transactions</span>
        }
        
    </div>
  )
}

export default TransferHistory