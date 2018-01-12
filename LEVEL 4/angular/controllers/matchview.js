myApp.controller('singleMatchController',['$http','$routeParams', function($http , $routeParams){

	var main = this;
	this.heading  = "";
	this.id1 = $routeParams.id1;
	this.id2 = $routeParams.id2;
	this.date = $routeParams.date;

	this.name1 = "";
	this.name2 = "";
	this.score1 = '';
	this.score2 = '';
	this.winner = "";

	this.loadSingleMatchStats = function() {

		function matchStatsCalculator(response) {

			main.data = response.data.rounds;

			for(var i in main.data){

				for(var j in main.data[i].matches){

					if( (i == main.id1) && (j == main.id2) && (main.date == main.data[i].matches[j].date))
					{

						main.name1 = main.data[i].matches[j].team1.name ;
						main.name2 = main.data[i].matches[j].team2.name ;
						main.heading = main.name1 + " vs " + main.name2 ;
						main.score1 = main.data[i].matches[j].score1 ;
						main.score2 = main.data[i].matches[j].score2 ;
						main.team1 = main.data[i].matches[j].team1.code ;
						main.team2 = main.data[i].matches[j].team2.code ;

						if( main.score2 > main.score1)
						main.winner = "Winner : " + main.name2 ;
						else if(main.score2 < main.score1)
						main.winner = "Winner : " + main.name1 ;
						else main.winner = " Match tied !";
					}
				}
			}
		}

		main.loadSingleMatchStatsOf2016 = function () {
			$http({
				method: "GET",
				url: "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"
			}).then(function(response){
				console.log(response.data.rounds);
						
				matchStatsCalculator(response) ;
			}, function(reason){
				alert(" Some Error Occured! Check Console");
				console.log("reason");
			}
			)

        } ();

        main.loadSingleMatchStatsOf2015 = function () {
			$http({
				method: "GET",
				url: "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"
			}).then(function(response){
				console.log(response.data.rounds);
						
				matchStatsCalculator(response) ;
			}, function(reason){
				alert(" Some Error Occured! Check Console");
				console.log("reason");
			}
			);

        } ();



	}();
		
}]);