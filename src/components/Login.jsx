function Login() {
    return (
        <div>
            <h2>Formulario de Login</h2>
            <form>
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
