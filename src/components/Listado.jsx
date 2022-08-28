import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Listado() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
            navigate("/");
        }
    }, [navigate]);

    return (
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
    );
}

export default Listado;
