myApp.controller('mainViewController',['$http',function($http) {

  //create a context
  var main = this;

  // i knew the result is going to be array, so i declared an empty array to initialize
  this.contentsOf2016 = [];
  this.contentsOf2015 = [];
  console.log(this.contentsOf2016);
  console.log(this.contentsOf2015);

  this.baseUrl16 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
  this.baseUrl15 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';



  this.loadAllMatches16 = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl16
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          main.contentsOf2016 = response.data.rounds;
          console.log(main.contentsOf2016);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });
    }();

  this.loadAllMatches15 = function(){

    $http({
      method: 'GET',
      url: main.baseUrl15
    }).then(function successCallback(response) {

      console.log(response);
      main.contentsOf2015 = response.data.rounds;

    }, function errorCallback(response) {

      alert("some error occurred. Check the console.");
      console.log(response);
    });
  }();


}]); // end controller



