import React, { useEffect, useState } from 'react'
import { postAnswer } from '../service/Api'
import '../styles/questionCard.css'

const QuestionCard = ({ question, setIndex }) => {

    const [answer, setAnswer] = useState(null)
    const [correctOption, setCorrectOption] = useState(null)
    const [clickedOption, setClickedOption] = useState(null)


    useEffect(() => {
        setCorrectOption(null)
        setClickedOption(null)
    }, [question])

    const handleAnswer = (option) => {

        postAnswer(question.id, option).then(({ data }) => {
            setAnswer(data.answer)
            setClickedOption(option)
            if (data.answer) {
                const count = Number(localStorage.getItem('count')) || 0;
                localStorage.setItem('count', count + 1);
                setCorrectOption(option)
            }
            console.log("correctas" + localStorage.getItem('count'))
        }
        )

        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1))
        }, 1000);

    }

    const getButtonClass = (option) => {
        if (clickedOption === null) {
            return '';
        }
        if (clickedOption === option) {
            return correctOption ? 'true' : ' false';
        }
        return '';
    };



    return (
        <div className='card' >
            <div className='question'>{question.question}</div>
            <button
                className={getButtonClass('option1')}
                onClick={() => { handleAnswer("option1") }}>
                {question.option1}
            </button>

            <button
                className={getButtonClass('option2')}
                onClick={() => { handleAnswer("option2") }}>
                {question.option2}
            </button>

            <button
                className={getButtonClass('option3')}
                onClick={() => { handleAnswer("option3") }}>
                {question.option3}
            </button>

            <button
                className={getButtonClass('option4')}
                onClick={() => { handleAnswer("option4") }}>
                {question.option4}
            </button>


        </div >
    )
}

export default QuestionCard