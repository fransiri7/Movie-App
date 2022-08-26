import axios from "axios";
import sweetAlert from '@sweetalert/with-react'
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regExpresionEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        
        if (email === "" || password === ""){
            sweetAlert(
                <div>
                    <h2>Todos los campos deben ser obligatorios</h2>
                    <p>Por favor completar todos los campos para poder continuar</p>
                </div>
            )
            return;
        }
        if (email !== "" && !regExpresionEmail.test(email)){
            sweetAlert(
                <div>
                    <h2>Debes ingresar un email valido</h2>
                </div>
            )
            return;
        }
        if (email !== "challenge@alkemy.org" && password !== "react"){
            sweetAlert(
                <div>
                    <h2>El mail o la contraseña no son correctos</h2>
                    <p>Por favor verifica que tanto el mail como la contraseña hayan sido ingresados correctamente</p>
                </div>
            )
        }

        axios.post("http://challenge-react.alkemy.org/", {email, password})
        .then(res =>{
            sweetAlert(<h2>Has ingresado correctamente</h2>)
            console.log(res.data);
            const resToken = res.data.token;
            localStorage.setItem("token", resToken)
            navigate("/listado")
        } )
    }

    return (
        <div>
            <h2>Formulario de Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Correo electronico:</span><br/>
                    <input type="email" name="email" />
                </label>
                <label><br/>
                    <span>Contraseña:</span><br/>
                    <input type="password" name="password" />
                </label><br/>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
}

export default Login;
