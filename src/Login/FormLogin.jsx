function FormLogin({changeLogin}) {
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new window.FormData(event.target)
    const username = data.get("user"); 
    const password = data.get("password");

    const reqOptions = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        "name": username,
        "password": password
      })  
    }
    
    fetch("https://fake-bank-server-production.up.railway.app/api/users", reqOptions)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error({"error": error})
    })

    }
  
  return (
    <form action="submit" className="form-login" onSubmit={(e) => {handleSubmit(e)}}>
      <input id="user" name="user" type="text" placeholder="Usuario"/>
      <input id="password" name="password" type="password" placeholder="Contraseña" />
      <button type="submit">
        {changeLogin === false ? "Register" : "Login"}
      </button>
    </form>
  );
}

export default FormLogin;
