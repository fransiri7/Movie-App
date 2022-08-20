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
        if (email !== "fransiri@gmail.com" && password !== "1234"){
            console.log ("El mail o la contraseña no son correctos")
        }

        console.log("Ok, estamos listos para enviar la informacion")
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
