import sweetAlert from "@sweetalert/with-react";

function Buscador() {
    const handleSubmit = e =>{
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value;
        if (keyword.length === 0){
            sweetAlert(<h2>Debes ingresar el nombre de una pelicula</h2>)
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
