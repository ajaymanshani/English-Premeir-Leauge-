myApp.controller('teamViewController15',['$http','$routeParams',function($http,$routeParams) {
  var match=this;
  this.matchesData=[];
  this.teamcode=$routeParams.teamcode;
  this.teamName="";
  this.matchesPlayed=0;
  this.totalWin=0;
  this.totalLoss=0;
  this.totalTied=0;
  this.goalScored=0;
  this.loadAllMatches = function(){

    $http({
      method: 'GET',
      url:'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json'
    }).then(function successCallback(response) {
      match.matchesData=response.data.rounds;
      for( var round in match.matchesData)
      {
        var rounds=match.matchesData[round];
          //console.log(rounds);
          for(var plays in rounds.matches)
          {
            var game=rounds.matches[plays];
            if((game.team1.code  === match.teamcode) || (game.team2.code === match.teamcode))
            {
              match.matchesPlayed+=1;
              if(game.team1.code  === match.teamcode)
              {
                match.teamName=game.team1.name;
                match.goalScored+=game.score1;
                if(game.score1 > game.score2)
                {
                  match.totalWin+=1;

                }
                else if(game.score1 < game.score2)
                {
                  match.totalLoss+=1;

                }
                else{
                  match.totalTied+=1;

                }

              }
              if(game.team2.code  === match.teamcode)
              {
                match.goalScored+=game.score2;
                match.teamName=game.team2.name;
                if(game.score1 > game.score2)
                {
                  match.totalWin+=1;

                }
                else if(game.score1 < game.score2)
                {
                  match.totalLoss+=1;

                }
                else{
                  match.totalTied+=1;

                }

              }
              else{}

            }
        }
      }
        //console.log(match.totalWin);
        //console.log(match.team2win);
        //console.log(match.matchTied);
        //console.log(match.goalScored);


      }, function errorCallback(response) {

        alert("some error occurred. Check the console.");
        console.log(response);


      });
  };

  this.loadAllMatches();
}]); 