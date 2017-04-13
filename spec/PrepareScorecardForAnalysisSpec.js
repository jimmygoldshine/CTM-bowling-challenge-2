describe('PrepareScorecardForAnalysis', function(){

  describe('No bonus frame', function(){

    beforeEach(function(){
      preparation = new PrepareScorecardForAnalysis();
    })

    it("removes pipes", function(){
      var input = "X|23|45|5-|5-|32|43|52|51|4-||"
      expect(preparation.removePipes(input)).toEqual(["X","23","45","5-","5-","32","43","52","51","4-"])
    })

    it("stores scorecard as a 2d array with each element a frame", function(){
      var input = "X|23|45|5-|5-|32|43|52|51|4-||"
      var output = preparation.removePipes(input)
      expect(preparation.toArrayOfFrames(output)).toEqual([["X"],["23"],["45"],["5-"],["5-"],["32"],["43"],["52"],["51"],["4-"]])
    })

    it("splits the stings to chars",function(){
      var input = "X|23|45|5-|5-|32|43|52|51|4-||"
      var output = preparation.removePipes(input)
      var output2 = preparation.toArrayOfFrames(output)
      expect(preparation.splitStrings(output2)).toEqual([["X"],["2","3"],["4","5"],["5","-"],["5","-"],["3","2"],["4","3"],["5","2"],["5","1"],["4","-"]])
    })

    it("converts each bowl to its score",function(){
      var input = "X|23|45|5-|5-|32|43|52|51|4-||"
      var output = preparation.removePipes(input);
      var output2 = preparation.toArrayOfFrames(output);
      var output3 = preparation.splitStrings(output2);
      expect(preparation.bowlsToScores(output3)).toEqual([[10],[2,3],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[4,0]])
    })

    it("stores scorecard as a 2d array with each element a frame", function(){
      var scorecard = "X|23|45|5-|5-|32|43|52|51|4-||"
      expect(preparation.prepare(scorecard)).toEqual([[10],[2,3],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[4,0]])
    })
  })

  describe('One bonus ball', function (){

    beforeEach(function(){
      preparation = new PrepareScorecardForAnalysis();
    })

    it("removes pipes", function(){
      var input = "X|23|45|5-|5-|32|43|52|51|4/||8"
      expect(preparation.removePipes(input)).toEqual(["X","23","45","5-","5-","32","43","52","51","4/","8"])
    })

    it("to array of frames", function(){
      var input = "X|23|45|5-|5-|32|43|52|51|4/||8"
      var output = preparation.removePipes(input)
      expect(preparation.toArrayOfFrames(output)).toEqual([["X"],["23"],["45"],["5-"],["5-"],["32"],["43"],["52"],["51"],["4/"],["8"]])
    })

    it("splits the stings to chars",function(){
      var input = "X|23|45|5-|5-|32|43|52|51|4/||8"
      var output = preparation.removePipes(input)
      var output2 = preparation.toArrayOfFrames(output)
      expect(preparation.splitStrings(output2)).toEqual([["X"],["2","3"],["4","5"],["5","-"],["5","-"],["3","2"],["4","3"],["5","2"],["5","1"],["4","/"],["8"]])
    })

    it("converts each bowl to its score",function(){
      var input = "X|23|45|5-|5-|32|43|52|51|4/||8"
      var output = preparation.removePipes(input);
      var output2 = preparation.toArrayOfFrames(output);
      var output3 = preparation.splitStrings(output2);
      expect(preparation.bowlsToScores(output3)).toEqual([[10],[2,3],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[4,6],[8]])
    })

    it("stores scorecard as a 2d array with each element a frame", function(){
      var scorecard = "X|23|45|5-|5-|32|43|52|51|4/||8"
      expect(preparation.prepare(scorecard)).toEqual([[10],[2,3],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[4,6],[8]])
    })

  })


  describe('Two bonus balls', function (){

    beforeEach(function(){
      preparation = new PrepareScorecardForAnalysis();
    })

    it("removes pipes", function(){
      var input = "X|23|45|5-|5-|32|43|52|51|X||81"
      expect(preparation.removePipes(input)).toEqual(["X","23","45","5-","5-","32","43","52","51","X","81"])
    })

    it("stores scorecard as a 2d array with each element a frame", function(){
      var input = "X|23|45|5-|5-|32|43|52|51|X||81"
      var output = preparation.removePipes(input)
      expect(preparation.toArrayOfFrames(output)).toEqual([["X"],["23"],["45"],["5-"],["5-"],["32"],["43"],["52"],["51"],["X"],["81"]])
    })

    it("splits the stings to chars",function(){
      var input = "X|23|45|5-|5-|32|43|52|51|X||81"
      var output = preparation.removePipes(input)
      var output2 = preparation.toArrayOfFrames(output)
      expect(preparation.splitStrings(output2)).toEqual([["X"],["2","3"],["4","5"],["5","-"],["5","-"],["3","2"],["4","3"],["5","2"],["5","1"],["X"],["8","1"]])
    })

    it("converts each bowl to its score",function(){
      var input = "X|23|45|5-|5-|32|43|52|51|X||81"
      var output = preparation.removePipes(input);
      var output2 = preparation.toArrayOfFrames(output);
      var output3 = preparation.splitStrings(output2);
      expect(preparation.bowlsToScores(output3)).toEqual([[10],[2,3],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[10],[8,1]])
    })

    it("stores scorecard as a 2d array with each element a frame", function(){
      var scorecard = "X|23|45|5-|5-|32|43|52|51|X||81"
      expect(preparation.prepare(scorecard)).toEqual([[10],[2,3],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[10],[8,1]])
    })

  })

})
