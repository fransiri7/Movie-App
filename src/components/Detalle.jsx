import { Navigate } from "react-router-dom";

function Detalle (){
    let token = sessionStorage.getItem("token");

    return (
        <>
        {!token && <Navigate to="/" />}
        <h2>Soy el detalle</h2>
        </>
    )
}

export default Detalle;