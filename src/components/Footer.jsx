import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="text-center text-white" style={{"background-color": "#f1f1f1;"}}>
                {/* <!-- Grid container --> */}
                {/* <div className="container pt-4"> */}
                    {/* <!-- Section: Social media --> */}
                    {/* <section className="mb-4"> */}
                        {/* <!-- Facebook --> */}
                        {/* <Link
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            to="/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link> */}

                        {/* <!-- Twitter --> */}
                        {/* <Link
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            to="/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-twitter"></i>
                        </Link> */}

                        {/* Google */}
                        {/* <Link
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            to="https://www.google.com.ar/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-google"></i>
                        </Link> */}

                        {/* <!-- Instagram --> */}
                        {/* <Link
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            to="/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link> */}

                        {/* <!-- Linkedin --> */}
                        {/* <Link
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            to="/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link> */}
                        {/* <!-- Github --> */}
                        {/* <Link
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            to="/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-github"></i>
                        </Link>
                    </section> */}
                    {/* <!-- Section: Social media --> */}
                {/* </div> */}
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div
                    className="text-center text-dark p-3"
                    style={{"background-color": "rgba(1, 0, 0, 0.2);"}}
                >
                    © 2022 Copyright :
                    <Link className="text-dark" to="https://www.google.com.ar/">
                        Movie App
                    </Link>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    );
}

export default Footer;
