function FormLogin({changeLogin}) {
    
  return (
    <form action="submit" className="form-login">
      <input id="user" name="user" type="text" placeholder="Usuario"/>
      <input id="password" name="password" type="password" placeholder="Contraseña" />
      <button type="submit">
        {changeLogin === false ? "Register" : "Login"}
      </button>
    </form>
  );
}

export default FormLogin;
