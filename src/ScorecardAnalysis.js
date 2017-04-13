var ScorecardAnalysis = function(){

  this.score = 0;

};

ScorecardAnalysis.prototype.getScore = function(preparedScorecard){
  this.score = this.sumGameWithoutBonuses(preparedScorecard) + this.strikeBonuses(preparedScorecard) + this.spareBonuses(preparedScorecard);
  return this.score;
};

ScorecardAnalysis.prototype.sumGameWithoutBonuses = (preparedScorecard)=> {
  var score = 0;
  for(var i = 0; i < 10; i++){
    score += preparedScorecard[i].reduce(function(sum, value) {return sum + value})
  }
  return score;
}

ScorecardAnalysis.prototype.strikeBonuses = (preparedScorecard)=> {
  var bonusScore = 0
  preparedScorecard.forEach(function(frame, i) {
    bowl = frame[0];
    if(i < 10){
      if(bowl === 10 && preparedScorecard[i+1].length > 1){
        bonusScore += (preparedScorecard[i+1].reduce(function(sum, value) {return sum + value}));
      } else if (bowl === 10 && preparedScorecard[i+1].length < 2){
        bonusScore += 10 + preparedScorecard[i+2][0];
      }
    }
  })
  return bonusScore;
}

ScorecardAnalysis.prototype.spareBonuses = (preparedScorecard)=> {
  var bonusScore = 0
  preparedScorecard.forEach(function(frame, i) {
    if (frame.reduce(function(sum, value) {return sum + value}) === 10 && frame.length > 1) {
      bonusScore += preparedScorecard[i+1][0]
    }
  })
  return bonusScore;
}
