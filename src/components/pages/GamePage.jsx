import React, { useEffect, useState } from 'react'
import { getQuestions } from '../../service/Api'
import QuestionCard from '../QuestionCard'
import { useNavigate } from 'react-router-dom'
import '../../styles/game.css'


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

            {!isLoading ?
                index < questions.length ?
                    <QuestionCard question={questions[index]} setIndex={setIndex} /> :
                    <>
                        correctas = {localStorage.getItem('count') + "/" + questions.length}
                        <button onClick={() => { navigate('../home') }}>Home</button>
                    </>

                :
                null
            }
            {console.log(index)}
        </div>


    )
}

export default GamePage