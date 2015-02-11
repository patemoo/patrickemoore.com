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
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque reiciendis veritatis possimus esse, deleniti eveniet cumque deserunt nulla dolorum architecto beatae vitae quas harum doloribus nobis ea quasi recusandae rem.'},
    {name:'Listo',
    url: $sce.trustAsResourceUrl('https://getlisto-pm.herokuapp.com'),
    github: 'https://github.com/patemoo/listo',
    desc: '... '}
  ]

  $scope.getSite = function(i) {
    console.log($scope.sites[i].url);
    $scope.url = $scope.sites[i].url;
    $scope.github = $scope.sites[i].github;
    $scope.name = $scope.sites[i].name;
    $scope.desc = $scope.sites[i].desc;
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
