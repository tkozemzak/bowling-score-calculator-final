import { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import ScoreForm from "./ScoreForm";
import { handleFrameCalculations } from "../Functions/Functions";

// for testing only - sample array of score objects
import { defaultScores } from "../fixtures/defaultScores";

const EnterScores = ({ name }) => {
  const [scoresEntered, setScoresEntered] = useState(false);
  const [scores, setScores] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [scoresToSendToScoreboard, setScoresToSendToScoreBoard] = useState([]);
  const [finishedGame, setFinishedGame] = useState(false);

  const fetchScores = () => {
    let formattedScores = handleFrameCalculations(scores);
    setScoresToSendToScoreBoard(formattedScores);
    setScoresEntered(true);
  };

  const newGame = () => {
    setScoresEntered(false);
    setScores([]);
    setCurrentFrame(1);
    setScoresToSendToScoreBoard([]);
    setFinishedGame(false);
  };

  const handleFrameEntry = (formScores) => {
    handleStateUpdate(formScores);
  };

  const handleStateUpdate = (scoresArray) => {
    setScores([...scores, scoresArray]);
    setCurrentFrame(currentFrame + 1);
  };

  useEffect(() => {
    if (currentFrame > 10 || finishedGame) {
      fetchScores();
    }
  }, [currentFrame, finishedGame]);

  return (
    <div>
      {!scoresEntered ? (
        <>
          <h1>
            Welcome,
            {name}!
          </h1>
          <h1>Enter your scores for frame {currentFrame} here:</h1>
          <ScoreForm
            currentFrame={currentFrame}
            handleFrameEntry={handleFrameEntry}
            setFinishedGame={setFinishedGame}
          />
        </>
      ) : (
        <Scoreboard
          scoresToSendToScoreboard={scoresToSendToScoreboard}
          name={name}
          newGame={newGame}
        />
      )}
    </div>
  );
};

export default EnterScores;
