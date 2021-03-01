import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

const Usuario = () => {
    const {id} = useParams();

    const [usuario, setUsuario] = useState([]);

    const obtenerUsuario = async() => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await res.data;
        setUsuario(user);
    }
    useEffect(() => {
        obtenerUsuario();
    }, [])

    return (
        <div className="container">
            <h1>Usuario {usuario.name} </h1>
            <p>Email: {usuario.email}</p>
            <small>Teléfono: {usuario.phone}</small>
        </div>
    )
}

export default Usuario
