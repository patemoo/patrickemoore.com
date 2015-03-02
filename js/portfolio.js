var app = angular.module('PortfolioApp', ['ui.bootstrap','ngRoute','smoothScroll']);

app.controller('MuseumController', ['$scope','$sce', function($scope,$sce){

  $scope.isCollapsed = true;

  $scope.collapseMenu = function() {
    $scope.isCollapsed = true;
  }


  $scope.url = ""

  $scope.sites = [
    // {name:'Movie Search App',
    // url: $sce.trustAsResourceUrl('https://moviesearchapp.herokuapp.com/'),
    // github: 'https://github.com/patemoo/MovieSearchApp',
    // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius doloremque, nemo et natus ducimus enim sed ea, magnam corporis dolores temporibus vero, laborum mollitia blanditiis minima, a cumque qui recusandae.'},

    {name:'Pantry 2 Plate',
    url: $sce.trustAsResourceUrl('https://pantry2plate.herokuapp.com'),
    github: 'https://github.com/patemoo/pantry_2_plate',
    image: 'pantry2plate-image.jpg',
    desc: 'Pantry 2 Plate is a Node.js app that uses the Yummly API. Users add ingredients to their digital pantry, then search or browse through a curated list of recipes that have been filtered based on pantry items.'},

    {name:'Listo',
    url: $sce.trustAsResourceUrl('https://getlisto.herokuapp.com'),
    github: 'https://github.com/patemoo/listo',
    image: 'listo-image.jpg',
    desc: 'Users can use Listo to meet others in their neighborhood. An event is created when 4 users in a given area choose the same activity. Foursquare\'s API is used to pull in a meeting location then users communicate over a web sockets chat interface. For accountability a flake score is associated with each user. Listo is a Ruby on Rails app.'},

    {name:'Departure',
    url: $sce.trustAsResourceUrl('http://departuredashboard.herokuapp.com/'),
    github: 'https://github.com/patemoo/departure',
    image: 'departure-image.jpg',
    desc: 'Departure was created to be a one stop shop for information regarding a user\'s flight travel plans. Built with Sails, SASS, AngularJS and MongoDB Departure uses multiple APIs including FlightStats, Forecast for Developers, Foursquare and Google Maps to pull in relevant data to assist the user as they embark on their trip.'}

  ]

  $scope.getSite = function(i) {
    console.log($scope.sites[i].url);
    $scope.url = $scope.sites[i].url;
    $scope.github = $scope.sites[i].github;
    $scope.name = $scope.sites[i].name;
    $scope.desc = $scope.sites[i].desc;
    $scope.image = $scope.sites[i].image;
  };

  $scope.switchSize = function(screen) {
    $scope.screen = screen;
  };

}]);

app.directive("myNavscroll", ['$window', function($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (!scope.scrollPosition) {
                scope.scrollPosition = 0
            }

            if (this.pageYOffset > 5) {
                scope.boolChangeClass = true;
            } else {
                scope.boolChangeClass = false;
            }
            scope.scrollPosition = this.pageYOffset;
            scope.$apply();
        });
    };
}]);
