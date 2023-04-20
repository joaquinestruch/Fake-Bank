import React, { useState } from "react";
import FormLogin from "./FormLogin";
import "./login.css";

function Login() {

    const [changeLogin, setChangeLogin] = useState(false)

    return (
    <main className="main-background-login">
      <h1 className="title-login">Fake Bank</h1>
      <header>
        <FormLogin changeLogin={changeLogin}/>
        <button onClick={(e) => {
            setChangeLogin(!changeLogin)
        }} className="button-change-login">{changeLogin == false ? "Login" : "Register"}</button>
      </header>
    </main>
  );
}

export default Login;
