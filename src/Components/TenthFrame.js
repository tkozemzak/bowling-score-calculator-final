import React from "react";
import "../Styles/TenthFrame.css";

const TenthFrame = ({ scoresToSendToScoreboard, finalScore }) => {
  let filteredTenthFrameScores = scoresToSendToScoreboard.filter(
    (item, index) => {
      if (index > 8) return item;
    }
  );

  let box1Value;
  let box2Value;
  let box3Value;

  let firstThrow = filteredTenthFrameScores[0];
  let secondThrow = filteredTenthFrameScores[1];
  let thirdThrow = filteredTenthFrameScores[2] && filteredTenthFrameScores[2];

  /*
   * Check conditions on throws to determine which symbol should show for * each throw box
   */

  if (firstThrow.type === "strike") {
    box1Value = "X";
  } else if (firstThrow.type === "spare") {
    box1Value = firstThrow.throw1;
    box2Value = "/";
  } else if (firstThrow.type === "open") {
    box1Value = firstThrow.throw1;
    box2Value = firstThrow.throw2 || "-";
  }

  if (secondThrow) {
    if (secondThrow.type === "strike") {
      box2Value = "X";
    } else if (secondThrow.type === "spare") {
      box2Value = secondThrow.throw1;
      box3Value = "/";
    } else if (secondThrow.type === "open") {
      box2Value = secondThrow.throw1 || "-";
      box3Value = secondThrow.throw2 || "-";
    }
  }

  if (thirdThrow !== undefined) {
    if (thirdThrow.type === "strike") {
      box3Value = "X";
    } else {
      box3Value = thirdThrow.throw1 || "-";
    }
  }

  return (
    <div className="tenth-frame">
      <div className="score-boxes">
        <div className="tenth-frame-throw-box">{box1Value}</div>
        <div className="tenth-frame-throw-box">{box2Value}</div>
        <div className="tenth-frame-throw-box">{box3Value}</div>
      </div>
      <div className="frame-total-score-box">{finalScore}</div>
    </div>
  );
};

export default TenthFrame;
