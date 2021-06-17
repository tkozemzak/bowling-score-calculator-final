import { useState, useEffect } from "react";
import "../Styles/ScoreForm.css";

const ScoreForm = ({ currentFrame, handleFrameEntry, setFinishedGame }) => {
  const [throw1, setThrow1] = useState("");
  const [throw2, setThrow2] = useState("");
  const [throw3, setThrow3] = useState("");
  const [scoreSum, setScoreSum] = useState(0);
  const [additionalThrow, setAdditionalThrow] = useState(false);

  useEffect(() => {
    setScoreSum(throw1 + throw2);
  }, [throw1, throw2]);

  useEffect(() => {
    if (currentFrame === 10 && scoreSum >= 10) {
      setAdditionalThrow(true);
    }
  }, [scoreSum, currentFrame]);

  const handleScoreSubmit = (e) => {
    e.preventDefault();
    let formScoreObj = {
      frame: currentFrame,
      throw1,
      throw2,
      throw3,
    };

    if (throw1.length === 0 || throw2.length === 0) {
      alert("You must enter a score");
    } else if (scoreSum > 10) {
      alert("The score for one frame cannot be higher than 10");
    } else {
      handleFrameEntry(formScoreObj);
      setThrow1("");
      setThrow2("");

      return true;
    }
  };

  const handleGameEnd = (e) => {
    e.preventDefault();
    let isDone = handleScoreSubmit(e);
    isDone && setFinishedGame(true);
  };

  return (
    <div>
      {currentFrame < 10 ? (
        <div className="input-container">
          <input
            className="score-input"
            type="number"
            placeholder="How many pins did you hit on your first throw?"
            onChange={(e) => setThrow1(Number(e.target.value))}
            value={throw1}
          />
          <input
            className="score-input"
            type="number"
            placeholder="How many pins did you hit on your second throw?"
            onChange={(e) => setThrow2(Number(e.target.value))}
            value={throw2}
          />
          <button
            className="submit-button"
            onClick={(e) => handleScoreSubmit(e)}
          >
            Submit Scores for Frame {currentFrame}
          </button>
          <button
            className="final-submit-button"
            onClick={(e) => handleGameEnd(e)}
          >
            Submit Score Now (Did not finish all 10 frames)
          </button>
        </div>
      ) : (
        <div className="input-container">
          <input
            className="score-input"
            type="number"
            placeholder="How many pins did you hit on your first throw?"
            onChange={(e) => setThrow1(Number(e.target.value))}
            value={throw1}
          />
          <input
            className="score-input"
            type="number"
            placeholder="How many pins did you hit on your second throw?"
            onChange={(e) => setThrow2(Number(e.target.value))}
            value={throw2}
          />
          {additionalThrow && (
            <input
              className="score-input"
              type="number"
              placeholder="How many pins did you hit on your third throw?"
              onChange={(e) => setThrow3(Number(e.target.value))}
              value={throw3}
            />
          )}
          <button
            className="final-submit-button"
            onClick={(e) => handleGameEnd(e)}
          >
            Submit Final Score
          </button>
        </div>
      )}
    </div>
  );
};

export default ScoreForm;
