import React from 'react'
import UserData from '../UserData'
import Nav from '../Nav'
import "../home.css"
import "./transfer.css"
import MenuTransfer from './MenuTransfer'
function TransferMenu({setChangeHomeMenu}) {
  return (
    <>
    <main className='menu-transfer'>
        <UserData/>
        <MenuTransfer/>
        <Nav setChangeHomeMenu={setChangeHomeMenu}></Nav>
    </main>
    </>

  )
}

export default TransferMenu