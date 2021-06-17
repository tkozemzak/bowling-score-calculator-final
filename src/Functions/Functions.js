/*
 * Tenth frame comes here as a single object. Depending on the scores it must be separated into multiple frames/objects here.
 */

const separateTenthFrameScores = (scores) => {
  if (scores.length > 9) {
    scores.push({
      frame: 11,
      throw1: scores[9].throw2,
      throw2: 0,
      scoreSum: scores[9].throw2,
    });

    if (scores[9].throw3 > 0) {
      scores.push({
        frame: 12,
        throw1: scores[9].throw3,
        throw2: 0,
        scoreSum: scores[9].throw2,
      });
    }

    scores[9].throw2 = 0;
    scores[9].throw3 = 0;
  }

  return scores;
};

/*
 * After dispersing tenth frame into separate objects, determine how each pseudo frame should be condensed and how frame scores should be calculated
 */

const condenseTenthFrame = (scores) => {
  if (scores.length > 9) {
    if (scores[9].throw1 !== 10) {
      scores[9].throw2 = scores[10].throw1;
      scores[9].scoreSum = scores[9].throw1 + scores[10].throw1;

      scores.splice(10, 1);
    } else if (scores[10].throw1 !== 10) {
      if (scores[11]) {
        scores[10].throw2 = scores[11].throw1;
        scores[10].scoreSum = scores[10].throw1 + scores[11].throw1;

        scores.splice(11, 1);
      }
    }
  }

  return scores;
};

/*
 * Format each frame object with the proper frame type (i.e strike, spare, open).
 */

const formatScoreObj = (scores) => {
  let formattedScores = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i].throw1 + scores[i].throw2 === 10) {
      if (scores[i].throw1 === 10) {
        formattedScores.push({
          type: "strike",
          frame: scores[i].frame,
          throw1: scores[i].throw1,
          throw2: scores[i].throw2,
          score: 10,
          amountOfThrows: 1,
        });
      } else {
        formattedScores.push({
          type: "spare",
          frame: scores[i].frame,
          throw1: scores[i].throw1,
          throw2: scores[i].throw2,
          score: 10,
          amountOfThrows: 2,
        });
      }
    }
    if (scores[i].throw1 + scores[i].throw2 !== 10) {
      let frameScore = scores[i].throw1 + scores[i].throw2;
      formattedScores.push({
        type: "open",
        frame: scores[i].frame,
        throw1: scores[i].throw1,
        throw2: scores[i].throw2,
        score: frameScore,
        amountOfThrows: 2,
      });
    }
  }

  return formattedScores;
};

/*
 * Check each frame object for the frame type (i.e strike, spare, open) and consolidate individual frame scores according to consecutive strikes or spares.
 */

const caclulateUniqueScores = (scores) => {
  for (let i = scores.length - 1; i >= 0; i--) {
    let currentFrame = scores[i];
    let nextFrame = scores[i + 1];
    let secondNextFrame = scores[i + 2];

    if (i > 8 && currentFrame.type === "strike") {
      if (currentFrame.type === "strike" && nextFrame?.type === "strike") {
        currentFrame.score = 10;
      }
    } else {
      if (currentFrame.type === "strike") {
        if (nextFrame && nextFrame.type !== "strike") {
          currentFrame.score += nextFrame.throw1;
          currentFrame.score += nextFrame.throw2;
        }
        if (nextFrame && nextFrame.type === "strike") {
          currentFrame.score += 10;
          if (secondNextFrame && secondNextFrame.type === "strike") {
            currentFrame.score += 10;
          }
          if (secondNextFrame && secondNextFrame.type !== "strike") {
            currentFrame.score += secondNextFrame.throw1;
          }
        }
      }
      if (currentFrame.type === "spare" && nextFrame) {
        currentFrame.score += nextFrame.throw1;
      }
    }
  }

  return scores;
};

/*
 * Assign a total score at each frame, for each frame for UI to pull and render according to each frame.
 */
const calculateFinalScores = (scores) => {
  for (let i = 0; i < scores.length; i++) {
    let currentFrame = scores[i];
    let previousFrame = scores[i - 1];
    if (previousFrame) {
      currentFrame["totalScoreAtCurrFrame"] =
        currentFrame.score + previousFrame.totalScoreAtCurrFrame;
    } else {
      currentFrame["totalScoreAtCurrFrame"] = currentFrame.score;
    }
  }

  return scores;
};

/*
 * Run all functions to calculate each frame score and type. Return formatted list of scores for UI to render.
 */

export const handleFrameCalculations = (scores) => {
  let separatedTenthFrameScores = separateTenthFrameScores(scores);
  let handledTenthFrameScores = condenseTenthFrame(separatedTenthFrameScores);
  let formattedObjects = formatScoreObj(handledTenthFrameScores);
  let strikeScores = caclulateUniqueScores(formattedObjects);
  let calculatedFinalScores = calculateFinalScores(strikeScores);
  return calculatedFinalScores;
};
