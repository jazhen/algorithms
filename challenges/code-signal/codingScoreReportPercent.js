function codingScoreReportPercent(input) {
  //poor 300-599
  //fair 600-699
  //good 700-749
  //exccellent 750-799
  //elite 800+
  var output = [];

  var scoreMapCount = {
      Poor: 0,
      Fair: 0,
      Good: 0,
      Excellent: 0,
      Elite: 0
  }
  var scoreMapCountReverse = {};
  var scoreMapArr = new Array(5).fill(0);

  for (let i = 0; i < input.length; i++){

      score = input[i]
      //if(score >= 300 && score <= 599)console.log('poor++')
      if (score >= 300 && score <= 599) {
          scoreMapCount.Poor++;
          scoreMapArr[0]++;
      }
      else if (score >= 600 && score <= 699) {
          scoreMapCount.Fair++;
          scoreMapArr[1]++;
      }
      else if (score >= 700 && score <= 749) {
          scoreMapCount.Good++;
          scoreMapArr[2]++;
      }
      else if (score >= 750 && score <= 799) {
          scoreMapCount.Excellent++;
          scoreMapArr[3]++;
      }
      else if (score >= 800) {
          scoreMapCount.Elite++;
          scoreMapArr[4]++;
      }
  }
  scoreMapArr = scoreMapArr.sort((a, b) => a).reverse();



  for (let i = 0; i < scoreMapArr.length; i++) {


  }



  for (var levelName in scoreMapCount) {



      scoreMapCount[levelName] = percentage = scoreMapCount[levelName] / input.length * 100;

      var formattedPercentage = '';
      //no decimals
      if (percentage.toString().indexOf('.') === -1) {
          formattedPercentage = percentage.toString() + '.00%';
      }
      //more than 2 decimals
      else if (percentage.toString().indexOf('.') + 2 < percentage.toString().length) {
          formattedPercentage = percentage.toString().substring(0, (percentage.toString().indexOf('.') + 3)) + '%';
      }
      //1 decimals
      else if (percentage.toString().indexOf('.') + 2 > percentage.toString().length) {
          formattedPercentage = percentage.toString().substring(0, (percentage.toString().indexOf('.') + 2)) + '0%';
      }
      //2 decimals
      else formattedPercentage = percentage.toString() + '%';


      var levelScore = `${levelName}: ${formattedPercentage}`;

      output.push(levelScore)

      //console.log(levelName, scoreMapCount[levelName])

  }


  console.log(output)
}

var input = [330, 723, 730, 825, 825, 825, 999];
var input = [330, 723, 730, 825];
codingScoreReportPercent(input);
