import React, { useEffect, useState } from 'react'
import { getQuestions } from '../../service/Api'
import QuestionCard from '../QuestionCard'
import { useNavigate } from 'react-router-dom'
import '../../styles/game.css'
import { ClipLoader } from 'react-spinners'
import Count from '../Count'


const GamePage = () => {

    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        getQuestions().then((data) => {
            setQuestions(data)
            setIsLoading(false)
        })
    }, [])


    return (


        <div className='page'>



            {isLoading ?

                <ClipLoader color="#005daf" size={50} />
                :
                <>
                    <Count questions={questions} />
                    {index < questions.length ?
                        <QuestionCard question={questions[index]} setIndex={setIndex} /> :
                        <>
                            <button className={'btn-l'} onClick={() => { navigate('../home') }}>Home</button>
                        </>
                    }
                </>
            }
            {console.log(index)}
        </div>


    )
}

export default GamePage