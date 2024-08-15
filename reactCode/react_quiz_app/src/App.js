import React, { useState} from 'react';
import Question from './components/question';
import qBank from './components/questionBank';
import './App.css';

function App() {
    const [questionBank] = useState(qBank);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [quizEnd, setQuizEnd] = useState(false);
    const [score, setScore] = useState(0);

    function handleOptionChange(e) {
        setSelectedOption(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        checkAnswer();
        handleNextQuestion();
    }

    function checkAnswer() {
        if (selectedOption === questionBank[currentQuestion].answer) {
            setScore(score + 10);
        }
    }

    function handleNextQuestion() {
        if (currentQuestion + 1 < questionBank.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption("");
        } else {
            setQuizEnd(true);
        }
    }

    return (
        <div className="App-container">
            <h1>Quiz App</h1>
            {!quizEnd ? (
                <Question 
                    question={questionBank[currentQuestion]}
                    handleOptionChange={handleOptionChange} 
                    selectedOption={selectedOption} 
                    handleSubmit={handleSubmit}
                />
            ) : (<div className='score'>Your Score: {score}</div>)}
        </div>
    );
}

export default App;