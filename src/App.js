import React, { useState} from "react"
import './App.css';
import data from "./data";

function App() {
  const [current , setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const HandleClick = (trueAnswer) =>{
    if(trueAnswer){
      setScore(score + 1);
    }
    const nextQuestion = current + 1;
    if(nextQuestion < data.length){
      setCurrent(nextQuestion)
    }
    else{
      setShowScore(true)
    }
  }
    const Again = () =>{
        setCurrent(0);
        setScore(0);
        setShowScore(false)
    }
  return (
    <div className="app">
      { showScore ? (
        <div style={{color:"white", fontSize:"20px"}}>You Scored :  {score} / {data.length} 
        <button onClick={Again}className="answer">Again</button>
        </div>
      ) : (
        <>
          <div className="question">
            <div>
              <span>Question { current + 1} </span> / {data.length}
              <div style={{color:"skyblue"}}>{data[current].question}</div>
            </div>
          </div>
          <div>
            {data[current].answerOption.map((option ,index) =>(
              <button key={index} className="answer" onClick={() =>HandleClick(option.trueAnswer)}>{option.answerText}</button>
            ))}
          </div>
        </>
      )
}
    </div>
  );
}
export default App;
