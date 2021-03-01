import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    const obtenerUsuarios = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = await res.data;
        setUsuarios(users);
    }
    useEffect(() => {
        obtenerUsuarios();
    }, [])

    return (
        <div className="container">
            <h1>Lista de Usuarios</h1>
            <ul className="list-group" >
            {
                usuarios.map(usuario =>(
                        <Link to={`/usuario/${usuario.id}`} key={usuario.id} className="list-group-item">{usuario.name}</Link>
                ))
            }
            </ul>
        </div>
    )
}

export default Usuarios
