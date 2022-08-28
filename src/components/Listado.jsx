import { Link, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Listado() {
 
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const endpoint = "https://api.themoviedb.org/3/discover/movie?api_key=379f6ca71eb017bd6e9f97929ced1fde&language=es-ES&page1"
        axios.get(endpoint)
            .then (response => {
                const apiData = response.data.results;
                setMoviesList(apiData)
            })
    }, [setMoviesList]);

    console.log(moviesList)

    //token si no estas logueado es NULL
    let token = localStorage.getItem("token")
    return (
        <>
        { !token && <Navigate to="/"/>}
        <div className="row">
            <div className="col-3">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Movie title</h5>
                        <p className="card-text">
                            Review movie<br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quas rem iste dolor eos architecto maxime nihil sed minus reprehenderit
                            doloribus. Officia, omnis. Porro beatae ex recusandae dolore voluptatum?
                            Amet, blanditiis.
                        </p>
                        <Link to="/" className="btn btn-primary">
                            View details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Listado;
