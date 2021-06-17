import "../Styles/Frame.css";

const Frame = ({ item }) => {
  let box1Value;
  let box2Value;
  if (item.type === "strike") {
    box1Value = "";
    box2Value = "X";
  } else if (item.type === "spare") {
    box1Value = item.throw1;
    box2Value = "/";
  } else if (item.type === "open" && item.throw1 === 0) {
    box1Value = "-";
    box2Value = item.throw2;
  } else if (item.type === "open" && item.throw2 === 0) {
    box1Value = item.throw1;
    box2Value = "-";
  } else {
    box1Value = item.throw1;
    box2Value = item.throw2;
  }

  return (
    <div className="frame">
      <div className="score-boxes">
        <div className="throw-box">{box1Value}</div>
        <div className="throw-box">{box2Value}</div>
      </div>
      <div className="frame-total-score-box">{item.totalScoreAtCurrFrame}</div>
    </div>
  );
};

export default Frame;
