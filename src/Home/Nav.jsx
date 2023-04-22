import React from 'react'
import { BiTransferAlt, BiHomeAlt } from 'react-icons/bi'; 
function Nav() {
  return (
    <nav className='nav-home-transfer'>
        <button> <BiHomeAlt/> Home</button>
        <button> <BiTransferAlt/> Transfer</button>
    </nav>
  )
}

export default Nav