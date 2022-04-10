import { AuthContext, IAuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const { logout } = useContext(AuthContext) as IAuthContext;
    const user = localStorage.getItem("currentUser");
    let navigate = useNavigate();
    
    let jsonUser;
    if (user) {
      jsonUser = JSON.parse(user);
    }

    const salir = () => {
        logout();
        navigate("/");
      };
    
      return(
          <>
          <h1>Hola admin</h1>
          <h6>Este es el admin</h6>
          <button onClick={salir}>Salir</button>
          </>
      )
}

export default Index;