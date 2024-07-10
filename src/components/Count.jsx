import React from 'react'
import '../styles/home.css'

const Count = ({ questions }) => {
    return (
        <div className='count'>
            <p>correct answers:</p>
            <p>{localStorage.getItem('count') + "/" + questions.length}</p>
        </div>
    )
}

export default Count