import React from 'react'

function MenuTransfer() {
  return (
    <div className='menu-transfer-send'>

        <form action="" onSubmit={(e) => e.preventDefault}>
            <label htmlFor="BankId">Bank Id</label>
            <input type="text" name="BankId" placeholder='123213515135'/>
            
            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" placeholder='1000'/>

            <button type='submit'>Send</button>
        </form>

    </div>
  )
}

export default MenuTransfer