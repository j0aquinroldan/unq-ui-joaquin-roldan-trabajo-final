import React, { useEffect, useState } from 'react'
import { getDifficulties } from '../../service/Api'
import { useNavigate } from 'react-router-dom'
import Spinner from '../Spinner'
import { ClipLoader } from 'react-spinners'

const HomePage = () => {

    const [difficulties, setDifficulties] = useState([])
    const [diff, setDiff] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    console.log(difficulties)

    useEffect(() => {
        localStorage.setItem('count', 0)
        getDifficulties().then((data) => {
            setDifficulties(data)
            setLoading(false)
        })

    }, [])

    const handleDifficulty = (event) => {
        const difficulty = event.target.value;
        setDiff(difficulty)
        console.log(`seteaste diff ${diff}`);
    };

    const handlePlay = () => {
        if (diff) {
            localStorage.setItem('difficulty', diff);
            console.log(`diste play ${localStorage.getItem('difficulty')}`);
            navigate('../game')
        }

    }

    return (
        loading ? <ClipLoader color="#c42a1f" size={50} /> :
            <>
                <div>PREGUNTADOS</div>
                <div className='difficulties'>
                    {difficulties.map((difficulty, index) => (
                        <button key={index} value={difficulty} onClick={handleDifficulty}>
                            {difficulty}
                        </button>
                    ))}
                </div>
                <button onClick={handlePlay}>Start game</button>
            </>


    )
}

export default HomePage