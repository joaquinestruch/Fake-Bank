import Balance from "./Balance"
import Nav from "./Nav"
import TransferHistory from "./TransferHistory"
import UserData from "./UserData"

import "./home.css"
function HomeMenu({changeHomeMenu, setChangeHomeMenu}) {
  return (

    <main className="main-menu-home">
    <UserData/>
    <Balance/>
    <TransferHistory/>
    <Nav changeHomeMenu={changeHomeMenu} setChangeHomeMenu={setChangeHomeMenu}/>
    </main>
  )
}

export default HomeMenu