import { useEffect, useState } from "react";

import {
  Alert,
  AlertIcon
} from "@chakra-ui/react";

function FormLogin({ changeLogin }) {
  const [dataUserLogin, setDataUserLogin] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);


  async function loginUser(username, password) {
    const reqOptions = {
      method: "POST",
      body: JSON.stringify({
        "name": username,
        "password": password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await fetch(
        "https://fake-bank-server-production.up.railway.app/api/users",
        reqOptions
      );
      const data = await res.json();
      setDataUserLogin(data);
      
      if(dataUserLogin._id != undefined){
        setSuccess(true);
        setError(false);

        setTimeout(function(){
          window.location.href = window.location.href + "home";
        }, 1500)
        return
      }
      setSuccess(false);
      setError(true);
      console.log(dataUserLogin)
      

    } catch (error) {
      console.log({ "fetch error": error });
      setError(true);
      setSuccess(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new window.FormData(event.target);
    const username = data.get("user");
    const password = data.get("password");

    loginUser(username, password);
  };

  return (
    <>
      <form action="submit" className="form-login" onSubmit={handleSubmit}>
        <input id="user" name="user" type="text" placeholder="Username" />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button type="submit">
          {changeLogin === false ? "Register" : "Login"}
        </button>
      </form>

      {success && (
        <Alert status="success" variant="subtle" maxWidth={"210px"} maxHeight={"40px"} marginTop={"10px"} borderRadius={"20px"}>
          <AlertIcon />
          {changeLogin ? "Login success" : "Account created"}
        </Alert>
      )}
      
      {error && (
        <Alert status="error" maxWidth={"210px"} maxHeight={"40px"} marginTop={"10px"} borderRadius={"20px"}>
          <AlertIcon />
          {"There was an error"}
        </Alert>
    )}


    </>
  );
}

export default FormLogin;
