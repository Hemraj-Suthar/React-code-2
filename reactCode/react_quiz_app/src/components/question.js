import React from 'react'

function Question({question, handleOptionChange, selectedOption, handleSubmit }) {

    return(
        <div className="question-container">
            <h1>Question {question.id}</h1>  
            <h2>{question.question}</h2>
            <form onSubmit={handleSubmit} className="mt-2 mb-2">
                {question.options.map((option, index) => (
                    <div key={index} className='option'>
                        <input type="radio" name="option" value={option} checked={selectedOption === option} onChange={handleOptionChange} />
                        {/* console.log(checked); */}
                        <label>{option}</label>
                    </div>
                ))}
                <button type="submit" className="btn btn-primary mt-2"> SUBMIT </button>
            </form>
        </div>
    )
}

export default Question;
				
			