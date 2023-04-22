import React from 'react'

function UserData() {

    const twoKeys = "Username".substring(0,2)
    return (
    <header>
        <span>Username</span>
        <p>
            {
                (twoKeys[0]+twoKeys[1]).toUpperCase()
            }
        </p>
    </header>
  )
}

export default UserData