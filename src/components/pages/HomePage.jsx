import React, { useEffect, useState } from 'react'
import { getDifficulties } from '../../service/Api'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import '../../styles/home.css'
import { Logo } from '../Logo'
import Modal from '../Modal'


const HomePage = () => {

    const [difficulties, setDifficulties] = useState([])
    const [diff, setDiff] = useState('')
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()


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
        } else {
            toggleModal()
        }
    }

    const toggleModal = () => {
        setModal(!modal);
    }
    console.log(modal)

    return (
        <div className='page'>
            {
                loading ? <ClipLoader color="#005daf" size={50} /> :
                    <>
                        <div className='text'><Logo /></div>
                        <div>Select a difficulty:</div>
                        <div className='difficulties'>
                            {difficulties.map((difficulty, index) => (
                                <button
                                    key={index} value={difficulty}
                                    onClick={handleDifficulty} className={`difficulty ${difficulty}`}>
                                    {difficulty}
                                </button>
                            ))}
                        </div>
                        <button className='btn-l start-btn' onClick={handlePlay}>Start game</button>
                        {modal ? <Modal text={'you must select a difficulty in order to play'} toggleModal={toggleModal} />
                            : null}
                    </>

            }
        </div>
    )
}

export default HomePage