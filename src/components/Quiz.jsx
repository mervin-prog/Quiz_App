import React, { useState } from "react";
import quiz from "../data";
import Result from "./Result";

function Quiz(){

    const [activeQuestion , setActiveQuestion] = useState(0);
    const [selectedAnswer , setSelectedAnswer] = useState("");
    const [selectedAnswerIndex , setSelectedAnswerIndex] = useState(null);
    const [showResult , setShowResult] = useState(false);
    const [result , setResult] = useState({
        score : 0,
        correctAnswers : 0,
        wrongAnswers : 0,
    })

    const {questions} = quiz;
    //console.log(questions);

    //destructuring 
    const {question , choices , correctAnswer} = questions[activeQuestion]; //questions[0] --default

    function handleNext(){
        setSelectedAnswerIndex(null); //reset again so that next question dont get affected.

        setResult((prevValue) => 
            selectedAnswer ? 
            {...prevValue, score : prevValue.score+5, correctAnswers : prevValue.correctAnswers+1} : 
            {...prevValue, wrongAnswers : prevValue.wrongAnswers+1}
        )

        if(activeQuestion !== questions.length -1){
            setActiveQuestion((prevValue) => prevValue +1);
        }

        else{
            setActiveQuestion(0);
            setShowResult(true);
        }

    }

    function onAnswerSelection(answer,index){
        setSelectedAnswerIndex(index);

        if(answer === correctAnswer){
            setSelectedAnswer(true);
        }
        else{
            setSelectedAnswer(false);
        }
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

    return (
        <div className="quiz">
        {!showResult ? (
            <div>
            <h1>Quiz</h1>
            <div>
                <span className="active-question">{addLeadingZero(activeQuestion+1)}</span>
                <span className="total-question">/{addLeadingZero(questions.length)}</span>
            </div>
            <h2>{question}</h2>
            <ul>
                {choices.map((answer , index) => (
                    <li  
                    key={answer} 
                    onClick={() => onAnswerSelection(answer,index)}
                    className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                    {answer}
                    </li>
                ))}
            </ul>

            <button onClick={handleNext} disabled={selectedAnswerIndex === null}>
            {activeQuestion === questions.length -1 ? "Finish" : "Next"}
            </button>

            </div>
        ) 
        : ( <Result questions={questions} result={result} /> )}   
      </div>
    );
}

export default Quiz;