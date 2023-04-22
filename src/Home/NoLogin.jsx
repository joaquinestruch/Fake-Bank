
function NoLogin() {
  return (
    <>
    <header className="header-no-login">
        <h1 className="title-userData-home">Fake Bank</h1>
    </header>
    <main className="main-no-login">
        <h1>You are not logged in</h1>
        <a href="/">Login</a>
    </main>
    </>
  )
}

export default NoLogin