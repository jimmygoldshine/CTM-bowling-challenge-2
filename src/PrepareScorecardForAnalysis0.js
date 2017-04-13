var PrepareScorecardForAnalysis = function(input){

  this.rawScorecard = input;
  this.translatedScorecard = [];
  this.rawEleventhFrame = [];
  this.translatedEleventhFrame = [];

  this.isElementAPipe = function(element){
    return element != "|";
  };

  this.symbolsToNumbers = function(rawScorecard){
    var translatedOutput = rawScorecard.map(function(bowl, index){
      switch(bowl) {
        case "X": return 10
  		    break;
        case "-": return 0
  		    break;
        case "/": return (10 - parseInt(rawScorecard[index-1]));
          break;
        default: return parseInt(bowl)
      }
    })
    return translatedOutput;
  }

  this.eleventhFrameCheck = function(rawScorecard, eleventhFrame){
    if(eleventhFrame) {
      eleventhFrame = gameArray[1];
      eleventhFrameArray.pop().split("");
    }
    rawScorecard = gameArray[0];
    return eleventhFrame;
  };

  this.toArrayOfChars = function(rawScorecard){
    var gameArray = rawScorecard.split("||");
    rawScorecard = gameArray[0];
    return rawScorecard.split("");
  };

  this.removePipeElements = function(rawScorecard){
    return rawScorecard.filter(this.isElementAPipe);
  }
};

PrepareScorecardForAnalysis.prototype.prepare = function(){
  var rawScorecard = this.rawScorecard;
  this.rawScorecard = this.removePipeElements(this.toArrayOfChars(this.rawScorecard));
  this.translatedScorecard = rawScorecard.split("||")[0];
  this.translatedScorecard = this.symbolsToNumbers(this.rawScorecard);
  this.eleventhFrame = rawScorecard.split("||").pop();
  this.eleventhFrame = this.eleventhFrame.split("");
  this.translatedEleventhFrame = this.symbolsToNumbers(this.eleventhFrame);
  return this
}
