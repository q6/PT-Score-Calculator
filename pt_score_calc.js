var runTime = [
  [9.12, 60.0],
  [9.34, 59.7],
  [9.45, 59.3],
  [9.58, 58.9],
  [10.10, 58.5],
  [10.23, 57.9],
  [10.37, 57.3],
  [10.51, 56.6],
  [11.06, 55.7],
  [11.22, 54.8],
  [11.38, 53.7],
  [11.56, 52.4],
  [12.14, 50.9],
  [12.33, 49.2],
  [12.53, 47.2],
  [13.14, 44.9],
  [13.36, 42.3], // min score
  [13.37, 0]
];

var waist = [
  [35.0, 20.0],
  [35.5, 17.6],
  [36.0, 17.0],
  [36.5, 16.4],
  [37.0, 15.8],
  [37.5, 15.1],
  [38.0, 14.4],
  [38.5, 13.5],
  [39.0, 12.6], // min score
  [39.5, 0]
];

var pushUps = [
  [32, 0],
  [33, 5.0], // min score
  [34, 5.3],
  [35, 5.5],
  [36, 5.8],
  [37, 6.0],
  [38, 6.3],
  [39, 6.5],
  [40, 6.8],
  [41, 7.0],
  [42, 7.2],
  [43, 7.3],
  [44, 7.5],
  [45, 7.7],
  [46, 7.8],
  [47, 8.0],
  [48, 8.1],
  [49, 8.3],
  [50, 8.4],
  [51, 8.5],
  [52, 8.6],
  [53, 8.7],
  [54, 8.8],
  [55, 8.8],
  [56, 8.9],
  [57, 9.0],
  [58, 9.1],
  [59, 9.2],
  [60, 9.3],
  [61, 9.4],
  [66, 9.5], // 62 - 66 (incl. 66) get 9.5 points, we only need to include upper limit
  [67, 10.0]
];

var sitUps = [
  [41, 0],
  [42, 6.0], // min score
  [43, 6.3],
  [44, 6.5],
  [45, 7.0],
  [46, 7.5],
  [47, 8.0],
  [48, 8.3],
  [49, 8.5],
  [50, 8.7],
  [51, 8.8],
  [52, 9.0],
  [53, 9.2],
  [54, 9.4],
  [57, 9.5], // 44 - 57 (incl. 57) get 9.5 points, we only need to include upper limit
  [58, 10.0]
];

function getDisciplineScore(userCount, disciplineList) {
  for (var i = 0; i < disciplineList.length; i++) {
    if (userCount <= disciplineList[i][0]) {
      return disciplineList[i][1];
    }
  }
  // if the user did more <situps> than listed in the disciplineList we give them max points, this line below will only be reached at that point
  return disciplineList[i - 1][1]; // return max points
}

function didPassDiscipline(userScore) {
  if (userScore <= 0) {
    return "FAIL";
  }
  return "PASS";
}

function didOverallPass(scoresArray) {
  for (var i = 0; i < scoresArray.length; i++) {
    if (scoresArray[i] <= 0) {
      return "FAIL";
    }
  }
  return "PASS";
}

function getOverallScore(userRunTime, userPushUps, userSitUps, userWaist) {
  var scoreRun = getDisciplineScore(userRunTime, runTime);
  var scorePushUps = getDisciplineScore(userPushUps, pushUps);
  var scoreSitUps = getDisciplineScore(userSitUps, sitUps);
  var scoreWaist = getDisciplineScore(userWaist, waist);

  var overallScore = scoreRun + scorePushUps + scoreSitUps + scoreWaist;
  var overallScoreArray = [scoreRun, scorePushUps, scoreSitUps, scoreWaist];
  console.log("Count          |  " + "RESULT |  Score");
  console.log()
  console.log("Run            |   " + didPassDiscipline(overallScoreArray[0]) + "  |  " + overallScoreArray[0]);
  console.log("Push Ups       |   " + didPassDiscipline(overallScoreArray[1]) + "  |  " + overallScoreArray[1]);
  console.log("Sit Ups        |   " + didPassDiscipline(overallScoreArray[2]) + "  |  " + overallScoreArray[2]);
  console.log("Waist          |   " + didPassDiscipline(overallScoreArray[3]) + "  |  " + overallScoreArray[3]);
  console.log()
  console.log("Overall Score  |   " + didOverallPass(overallScoreArray) + "  |  " + overallScore);
}

// test cases
// console.log(getDisciplineScore(42, sitUps));
// console.log(getDisciplineScore(58, sitUps));
// console.log(getDisciplineScore(582, sitUps));
// console.log(getDisciplineScore(0, sitUps));
// console.log(getDisciplineScore(1, runTime));
// console.log(getDisciplineScore(14, runTime));
// console.log(getDisciplineScore(10.46, runTime));

getOverallScore(10.50, 44, 44, 30);