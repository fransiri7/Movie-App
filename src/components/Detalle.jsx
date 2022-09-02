import { Navigate } from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

function Detalle (){
    let token = sessionStorage.getItem("token");
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get("movieID");

    useEffect(()=>{
        console.log(movieID)
    }, [movieID])

    return (
        <>
        {!token && <Navigate to="/" />}
        <h2>Titulo: titulo de la peli</h2>
        <div className="row">
            <div className="col-4">
                imagen de la peli
            </div>
            <div className="col-8">
                <h5>Fecha de estreno:</h5>
                <h5>Reseña:</h5>
                <p>El detalle de la pelicula, contame de q se trata</p>
                <h5>Generos:</h5>
                <ul>
                    <li>Genero 1</li>
                    <li>Genero 2</li>
                    <li>Genero 3</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Detalle;