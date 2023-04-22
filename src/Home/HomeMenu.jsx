import Balance from "./Balance"
import Nav from "./Nav"
import TransferHistory from "./TransferHistory"
import UserData from "./UserData"

import "./home.css"
function HomeMenu() {
  return (

    <main className="main-menu-home">
    <UserData/>
    <Balance/>
    <TransferHistory/>
    <Nav/>
    </main>
  )
}

export default HomeMenu