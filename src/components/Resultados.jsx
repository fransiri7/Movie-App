import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import sweetAlert from "@sweetalert/with-react";


function Resultados() {
    // let query = new URLSearchParams(window.location.search);
    // let keyword = query.get("keyword");
    const {keyword} = useParams()
    console.log("el kiwor", keyword)

    const [moviesResult, setMoviesResult] = useState([]);

    // el hooks useEffect escucha y ante cualquier cambio renderiza nueamente el componente

    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=379f6ca71eb017bd6e9f97929ced1fde&language=es-ES&query=${keyword}`;
        axios
            .get(endpoint)
            .then((response) => {
                const moviesArray = response.data.results;
                if (moviesArray.length === 0) {
                    setMoviesResult([])
                    sweetAlert(
                        <h5>No se encontraron peliculas que coincidan con el nombre buscado</h5>
                    );
                } else {
                     setMoviesResult(moviesArray);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [keyword]);

    return (
        <>
            <h2>
                Palabra buscada: <em>{keyword}</em>
            </h2>
            <div className="row">
                {moviesResult.map((movie, index) => {
                    return (
                        <div className="col-4 my-4" key={index}>
                            <div className="card">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">
                                        {movie.overview.substring(0, 100)}...
                                    </p>
                                    <Link
                                        to={`/detalle?movieID=${movie.id}`}
                                        className="btn btn-primary"
                                    >
                                        Detalle
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Resultados;
