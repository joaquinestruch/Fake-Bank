

import { FaCopy } from 'react-icons/fa';

function BankId() {
  return (
    <div className="bankId-user-home">
        <button onClick={e => {
            navigator.clipboard.writeText(sessionStorage.getItem("userId"))
            
        }}>Bank Id <FaCopy/></button>
        
    </div>
  )
}

export default BankId