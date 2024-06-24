import React, { useState } from 'react'
import { postAnswer } from '../service/Api'

const QuestionCard = ({ question, setIndex }) => {

    const [answer, setAnswer] = useState(null)

    const handleAnswer = (option) => {
        setIndex((prevIndex) => (prevIndex + 1))
        postAnswer(question.id, option).then(({ data }) => {
            setAnswer(data.answer)
            if (data.answer) {
                const count = Number(localStorage.getItem('count')) || 0;
                localStorage.setItem('count', count + 1);
            }
            console.log("correctas" + localStorage.getItem('count'))
        }
        )


    }

    return (
        <>
            <div>{question.question}</div>
            <button onClick={() => { handleAnswer("option1") }}>{question.option1}</button>
            <button onClick={() => { handleAnswer("option2") }}>{question.option2}</button>
            <button onClick={() => { handleAnswer("option3") }}>{question.option3}</button>
            <button onClick={() => { handleAnswer("option4") }}>{question.option4}</button>


        </>
    )
}

export default QuestionCard