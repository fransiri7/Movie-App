import axios from "axios";

function Login() {

    const handleSubmit = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regExpresionEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if (email === "" || password === ""){
            console.log ("Todos los campos deben ser obligatorios")
            return;
        }
        if (email !== "" && !regExpresionEmail.test(email)){
            console.log ("Debes ingresar un email valido")
            return;
        }
        if (email !== "challenge@alkemy.org" && password !== "react"){
            console.log ("El mail o la contraseña no son correctos")
        }

        console.log("Ok, estamos listos para enviar la informacion")
        axios.post("http://challenge-react.alkemy.org/", {email, password})
        .then(res =>{
            console.log(res.data);
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
