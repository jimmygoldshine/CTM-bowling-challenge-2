var PrepareScorecardForAnalysis = function(){

  this.scorecard;

};

PrepareScorecardForAnalysis.prototype.removePipes = (scorecard)=> {
  let array = scorecard.split("|");
  array = array.filter(function(frame){
    if(frame){
      return frame
    }
  })
  return array;
}

PrepareScorecardForAnalysis.prototype.toArrayOfFrames = (scorecard)=> {
  let array = scorecard.map(function(frame){
    return [frame]
  })
  return array;
}

PrepareScorecardForAnalysis.prototype.splitStrings = (scorecard)=> {
  let array = [];
  for(frame in scorecard) {
      array.push(scorecard[frame][0].split(""));
  }
  return array;
}

PrepareScorecardForAnalysis.prototype.bowlsToScores = (scorecard)=> {
  let array = scorecard;
  for (frame in array) {
    for (bowl in array[frame]) {
      switch(array[frame][bowl]) {
        case "X": array[frame][bowl] = 10
          break;
        case "-": array[frame][bowl] = 0
          break;
        case "/": array[frame][bowl] = (10 - array[frame][bowl-1]);
          break;
        default: array[frame][bowl] = parseInt(array[frame][bowl]);
      }
    }
  }
  return array;
}

PrepareScorecardForAnalysis.prototype.prepare = function(scorecard){
  this.scorecard = this.bowlsToScores((this.splitStrings(this.toArrayOfFrames(this.removePipes(scorecard)))))
  return this.scorecard;
}
