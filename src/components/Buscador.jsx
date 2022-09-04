import sweetAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

function Buscador() {
    const navigate = useNavigate();
    const handleSubmit = e =>{
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        if (keyword.length === 0){
            sweetAlert(<h5>Debes ingresar el nombre de una pelicula</h5>)
        } else if (keyword.length < 4){
            sweetAlert(<h5>Debes ingresar 3 caracteres o mas</h5>)
        } else {
            e.currentTarget.keyword.value = "";
            navigate(`/resultados?pelicula=${keyword}`)
        }
    }

    return (
        <form className="d-flex align-items-center" onSubmit={handleSubmit}>
            <label className="form-label mb-0 mx-1">
               <input className="form-control" type="text" name="keyword" placeholder="Nombre de la pelicula" />
            </label>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    );
}

export default Buscador;
