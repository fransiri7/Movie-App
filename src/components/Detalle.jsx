import { Navigate } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Detalle (){
    let token = sessionStorage.getItem("token");
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get("movieID");

    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        const responseDetail = `https://api.themoviedb.org/3/movie/${movieID}?api_key=379f6ca71eb017bd6e9f97929ced1fde&language=es-ES`
        axios.get(responseDetail)
        .then((response)=>{
            const movieData = response.data
            setMovie(movieData)
        })
        .catch(error => {
            console.log(error, "Hubo erroes, intenta mas tarde")
        })
    }, [])

    return (
        <>
        {!token && <Navigate to="/" />}
        { !movie && <p>Cargando ... </p>}
        { movie &&
        <>
            <h2>Titulo: {movie.title}</h2>
            <div className="row">
                <div className="col-4">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="img-fluid" alt="movie-poster" />
                </div>
                <div className="col-8">
                    <h5>Fecha de estreno: {movie.release_date}</h5>
                    <h5>Reseña:</h5>
                    <p>{movie.overview}</p>
                    <h5>Generos:</h5>
                    {movie.genres.map((el)=>{
                        return (
                           <li key={el.id}>{el.name}</li>
                        )
                    })}
                </div>
            </div>
        </>
        }
        </>
    )
}

export default Detalle;