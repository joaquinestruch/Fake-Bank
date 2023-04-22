import React from 'react'
import { BiTransferAlt, BiHomeAlt } from 'react-icons/bi'; 
function Nav({setChangeHomeMenu, }) {
  return (
    <nav className='nav-home-transfer'>
        <button onClick={(e) => {
            e.preventDefault
            setChangeHomeMenu(false)
        }}> <BiHomeAlt/> Home</button>
        <button onClick={(e) => {
            e.preventDefault
            setChangeHomeMenu(true)
        }}> <BiTransferAlt/> Transfer</button>
    </nav>
  )
}

export default Nav