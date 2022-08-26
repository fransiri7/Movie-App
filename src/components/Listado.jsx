import { useNavigate } from 'react-router-dom';
import {useEffect} from "react"

function Listado (){
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token)
        if (token === null){
            navigate("/")
        }
    }, []);
    
    return (
        <h2>Soy el componente listado</h2>
    )
}

export default Listado;