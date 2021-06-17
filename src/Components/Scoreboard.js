import Frame from "./Frame.js";
import TenthFrame from "./TenthFrame.js";
import "../Styles/Scoreboard.css";

const Scoreboard = ({ scoresToSendToScoreboard, name, newGame }) => {
  let mappedScores = scoresToSendToScoreboard.map((item, i) => {
    return i < 9 && <Frame item={item} key={i} />;
  });

  let finalScore =
    scoresToSendToScoreboard[scoresToSendToScoreboard.length - 1]
      .totalScoreAtCurrFrame;

  return (
    <div className="scoreboard-container">
      <div className="scoreboard">
        <div className="name">
          <h3>Player: {name}</h3>
        </div>
        <div className="frame-container">
          {mappedScores}
          {scoresToSendToScoreboard.length > 9 && (
            <TenthFrame
              scoresToSendToScoreboard={scoresToSendToScoreboard}
              finalScore={finalScore}
            />
          )}
        </div>
        <div className="total-score">Total Score: {finalScore}</div>
      </div>
      <div className="new-game-button">
        <button onClick={() => newGame()}>New Game</button>
      </div>
    </div>
  );
};

export default Scoreboard;
