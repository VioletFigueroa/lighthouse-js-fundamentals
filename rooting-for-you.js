const judgeVegetable = function (vegetables, metric) {
  let output = "";
  let highscore = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highscore) {
      output = vegetables[i]["submitter"];
      highscore = vegetables[i][metric];
    }
  }
  return output;
};