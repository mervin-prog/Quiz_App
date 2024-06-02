import React from "react";

function Result(props){
    return (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{props.questions.length}</span>
          </p>
          <p>
            Total Score:<span> {props.result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {props.result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {props.result.wrongAnswers}</span>
          </p>
        </div>
    )
}

export default Result;