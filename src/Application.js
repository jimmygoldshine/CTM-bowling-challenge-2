var Bowling = function(){

};

Bowling.prototype.score = function(bowlingScorecard){
  var preparedScorecardObj = new PrepareScorecardForAnalysis();
  var analysisObj = new ScorecardAnalysis();
  var score = analysisObj.getScore(preparedScorecardObj.prepare(bowlingScorecard));
  return score;
}
