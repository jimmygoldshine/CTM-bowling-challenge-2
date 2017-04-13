describe("ScorecardAnalysis", function(){

  describe("No eleventh frame, no specials", function(){

    beforeEach(function(){
      prepared = {scorecard: [[9],[2,3],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[4,0]]}
      scorecardAnalysis = new ScorecardAnalysis();
    })

    it("sums up the frames without strike and spare bonuses", function(){
      expect(scorecardAnalysis.sumGameWithoutBonuses(prepared.scorecard)).toEqual(62)
    })

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore(prepared.scorecard)).toEqual(62)
    })
  })

  describe("No eleventh frame, with strike followed by non-strike", function(){

    beforeEach(function(){
      prepared = {scorecard: [[10],[2,3],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[4,0]]}
      scorecardAnalysis = new ScorecardAnalysis();
    })

    it("sums up the frames without strike and spare bonuses", function(){
      expect(scorecardAnalysis.sumGameWithoutBonuses(prepared.scorecard)).toEqual(63)
    })

    it("sums up the strike bonuses", function(){
      expect(scorecardAnalysis.strikeBonuses(prepared.scorecard)).toEqual(5)
    })

    it("sums up the correct score", function(){
      expect(scorecardAnalysis.getScore(prepared.scorecard)).toEqual(68)
    })

  })

  describe("No eleventh frame, with strike followed by strike", function(){

    beforeEach(function(){
      prepared = {scorecard: [[10],[10],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[4,0]]}
      scorecardAnalysis = new ScorecardAnalysis();
    })

    it("sums up the frames without strike and spare bonuses", function(){
      expect(scorecardAnalysis.sumGameWithoutBonuses(prepared.scorecard)).toEqual(68)
    })

    it("sums up the strike bonuses", function(){
      expect(scorecardAnalysis.strikeBonuses(prepared.scorecard)).toEqual(23)
    })

    it("sums up the correct score", function(){
      expect(scorecardAnalysis.getScore(prepared.scorecard)).toEqual(91)
    })

  })

  describe("No eleventh frame, with spares", function(){

    beforeEach(function(){
      prepared = {scorecard: [[1,9],[1,8],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[4,0]]}
      scorecardAnalysis = new ScorecardAnalysis();
    })

    it("sums up the frames without strike and spare bonuses", function(){
      expect(scorecardAnalysis.sumGameWithoutBonuses(prepared.scorecard)).toEqual(67)
    })

    it("sums up the strike bonuses", function(){
      expect(scorecardAnalysis.spareBonuses(prepared.scorecard)).toEqual(1)
    })

    it("sums up the correct score", function(){
      expect(scorecardAnalysis.getScore(prepared.scorecard)).toEqual(68)
    })

  })

  describe("No eleventh frame, spares and strikes", function(){

    beforeEach(function(){
      prepared = {scorecard: [[10],[1,9],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[4,0]]}
      scorecardAnalysis = new ScorecardAnalysis();
    })

    it("sums up the frames without strike and spare bonuses", function(){
      expect(scorecardAnalysis.sumGameWithoutBonuses(prepared.scorecard)).toEqual(68)
    })

    it("sums up the strike bonuses", function(){
      expect(scorecardAnalysis.strikeBonuses(prepared.scorecard)).toEqual(10)
    })

    it("sums up the spare bonuses", function(){
      expect(scorecardAnalysis.spareBonuses(prepared.scorecard)).toEqual(4)
    })

    it("sums up the correct score", function(){
      expect(scorecardAnalysis.getScore(prepared.scorecard)).toEqual(82)
    })

  })

  describe("Eleventh frame: one bowl - Test1", function(){

    beforeEach(function(){
      prepared = {scorecard: [[10],[1,9],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[4,6],[8]]}
      scorecardAnalysis = new ScorecardAnalysis();
    })

    it("sums up the frames without strike and spare bonuses", function(){
      expect(scorecardAnalysis.sumGameWithoutBonuses(prepared.scorecard)).toEqual(74)
    })

    it("sums up the strike bonuses", function(){
      expect(scorecardAnalysis.strikeBonuses(prepared.scorecard)).toEqual(10)
    })

    it("sums up the spare bonuses", function(){
      expect(scorecardAnalysis.spareBonuses(prepared.scorecard)).toEqual(12)
    })

    it("sums up the correct score", function(){
      expect(scorecardAnalysis.getScore(prepared.scorecard)).toEqual(96)
    })

  })

  describe("Eleventh frame: one bowl - Test2", function(){

    beforeEach(function(){
      prepared = {scorecard: [[10],[1,9],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[4,6],[4]]}
      scorecardAnalysis = new ScorecardAnalysis();
    })

    it("sums up the frames without strike and spare bonuses", function(){
      expect(scorecardAnalysis.sumGameWithoutBonuses(prepared.scorecard)).toEqual(74)
    })

    it("sums up the strike bonuses", function(){
      expect(scorecardAnalysis.strikeBonuses(prepared.scorecard)).toEqual(10)
    })

    it("sums up the spare bonuses", function(){
      expect(scorecardAnalysis.spareBonuses(prepared.scorecard)).toEqual(8)
    })

    it("sums up the correct score", function(){
      expect(scorecardAnalysis.getScore(prepared.scorecard)).toEqual(92)
    })


  })

  describe("Eleventh frame: two bowls - Test1", function(){

    beforeEach(function(){
      prepared = {scorecard: [[10],[1,9],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[10],[8,1]]}
      scorecardAnalysis = new ScorecardAnalysis();
    })

    it("sums up the frames without strike and spare bonuses", function(){
      expect(scorecardAnalysis.sumGameWithoutBonuses(prepared.scorecard)).toEqual(74)
    })

    it("sums up the strike bonuses", function(){
      expect(scorecardAnalysis.strikeBonuses(prepared.scorecard)).toEqual(19)
    })

    it("sums up the spare bonuses", function(){
      expect(scorecardAnalysis.spareBonuses(prepared.scorecard)).toEqual(4)
    })

    it("sums up the correct score", function(){
      expect(scorecardAnalysis.getScore(prepared.scorecard)).toEqual(97)
    })

  })

  describe("Eleventh frame: two bowls - Test2", function(){

    beforeEach(function(){
      prepared = {scorecard: [[10],[1,9],[4,5],[5,0],[5,0],[3,2],[4,3],[5,2],[5,1],[10],[10,10]]}
      scorecardAnalysis = new ScorecardAnalysis();
    })

    it("sums up the frames without strike and spare bonuses", function(){
      expect(scorecardAnalysis.sumGameWithoutBonuses(prepared.scorecard)).toEqual(74)
    })

    it("sums up the strike bonuses", function(){
      expect(scorecardAnalysis.strikeBonuses(prepared.scorecard)).toEqual(30)
    })

    it("sums up the spare bonuses", function(){
      expect(scorecardAnalysis.spareBonuses(prepared.scorecard)).toEqual(4)
    })

    it("sums up the correct score", function(){
      expect(scorecardAnalysis.getScore(prepared.scorecard)).toEqual(108)
    })

  })

})
