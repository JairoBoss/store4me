import { SetStateAction, useContext, useState } from 'react';
import { AuthContext, IAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/User.service';
import './Login.css';

function Login() {
  const { login } = useContext(AuthContext) as IAuthContext;
  const [datos, setDatos] = useState({ nombre: '', contraseña: '' });
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const iniciarSesion = async () => {
    if (datos) {
      const data = {
        password: datos.contraseña,
        email: datos.nombre
      };
      try {
        setLoading(true);
        const promise = UserService.login(data).then((response) => {
          login(response.user, 'userToken ' + response.access_token);
          navigate('/aaaaaa');
        });
                
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    } else {
    }
  };

  return (
    <div className="materialContainer">
      <div className="box">
        <div className="title">LOGIN</div>
        <div className="input">
          <input
            type="text"
            placeholder="Username"
            name="name"
            id="name"
            onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
          />
          <span className="spin" />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            name="pass"
            id="pass"
            onChange={(e) => setDatos({ ...datos, contraseña: e.target.value })}
          />
          <span className="spin" />
        </div>
        <div className="button login">
          <button onClick={iniciarSesion}>
            <span>GO</span> <i className="fa fa-check" />
          </button>
        </div>
        <a className="pass-forgot">Forgot your password?</a>
      </div>
    </div>
  );
}

export default Login;
