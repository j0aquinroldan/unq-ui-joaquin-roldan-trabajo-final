import React, { useEffect, useState } from 'react'
import { getQuestions } from '../../service/Api'
import QuestionCard from '../QuestionCard'
import { useNavigate } from 'react-router-dom'
import '../../styles/game.css'
import { ClipLoader } from 'react-spinners'


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
                    <div className='count'>
                        correct answers:
                        {localStorage.getItem('count') + "/" + questions.length}
                    </div>
                    {index < questions.length ?
                        <QuestionCard question={questions[index]} setIndex={setIndex} /> :
                        <>
                            <button onClick={() => { navigate('../home') }}>Home</button>
                            {/* {setQuestions([])} */}
                        </>
                    }
                </>
            }
            {console.log(index)}
        </div>


    )
}

export default GamePage