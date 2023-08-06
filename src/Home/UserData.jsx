import React from 'react'

function UserData() {

    let username = JSON.parse(sessionStorage.getItem("userData"))?.name
    const maxLength = 5

    if (username?.length > maxLength) {
        const shortStr = username?.slice(0, maxLength) + "...";
        username = shortStr
      }

    const twoKeys = username?.substring(0,2)
    return (
    <header>
        <span>{username}</span>

        <h1 className="title-userData-home">FB Copy</h1>

        <p>
            {
                twoKeys?.toUpperCase()
            }
        </p>
    </header>
  )
}

export default UserData