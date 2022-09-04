function Resultados (){
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get("pelicula");

    return (
        <>
        <h2>Seccion de resultados</h2>
        <h3>La palabra clave es {keyword}</h3>
        </>
    )
}

export default Resultados;