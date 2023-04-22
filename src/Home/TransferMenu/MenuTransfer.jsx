import React from 'react'

function MenuTransfer() {
  return (
    <div className='menu-transfer-send'>

        <form action="">
            <label htmlFor="BankId">Bank Id</label>
            <input type="text" name="BankId" placeholder='123213515135'/>
            
            <label htmlFor="amount">Amount</label>
            <input type="text" name="amount" placeholder='1000'/>

            <button>Send</button>
        </form>

    </div>
  )
}

export default MenuTransfer