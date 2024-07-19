import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        document.title = '404 Not Found';
    }, []);

    return (
        <div className='page'>
            <p>Esta página no está disponible. Disculpa las molestias.Prueba a realizar otra búsqueda.</p>
            <button className={'btn-l'} onClick={() => { navigate('../home') }}>Go to Home</button>
        </div>
    )
}

export default NotFoundPage