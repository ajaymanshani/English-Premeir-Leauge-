myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
        	templateUrl		: 'views/main-view.html',
            controller 		: 'mainViewController',
        	controllerAs 	: 'mainView'
        })
        .when('/match/:id1/:id2/:date',{
            templateUrl     : 'views/match-view.html',
            controller      : 'singleMatchController',
            controllerAs    : 'match'
        })
        .when('/team2016',{
        	templateUrl : 'views/team16.html'
        })
        .when('/1617/:teamcode',{
            templateUrl     : 'views/teamStats16.html', 
            controller      : 'teamViewController',
            controllerAs    : 'team'
        })
        .when('/team2015',{
        	templateUrl : 'views/team15.html'
        })
        .when('/1516/:teamcode',{
            templateUrl     : 'views/teamStats15.html', 
            controller      : 'teamViewController15',
            controllerAs    : 'team15'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);
