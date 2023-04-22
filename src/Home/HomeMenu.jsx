import { useEffect, useState } from "react"
import Balance from "./Balance"
import Nav from "./Nav"
import TransferHistory from "./TransferHistory"
import UserData from "./UserData"

import "./home.css"
import BankId from "./BankId"
import NoLogin from "./NoLogin"

const getUserData = (funcion) => {

  const userId = sessionStorage.getItem("userId"); 

  fetch(`https://fake-bank-server-production.up.railway.app/api/users/${userId}`)
  .then((res) => {
    return res.json()
  })
  .then(data => {
    sessionStorage.setItem("userData", JSON.stringify(data));
    funcion(data)
  }) 

}; 


function HomeMenu({changeHomeMenu, setChangeHomeMenu}) {

    const [userDataMain, setUserDataMain] = useState({});

    useEffect(() => {
      getUserData(setUserDataMain);
    }, [])  


    return (
      sessionStorage.getItem("userId") != undefined ?  (
    
      
        <main className="main-menu-home">
          <UserData/>
          <Balance money={userDataMain?.money}/>
          <BankId/>
          <TransferHistory transaccions={userDataMain.transaccions}/>
          <Nav changeHomeMenu={changeHomeMenu} setChangeHomeMenu={setChangeHomeMenu}/>
        </main>
      )
  
      : <NoLogin/>
    )


}

export default HomeMenu