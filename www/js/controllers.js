angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('PokemonCtrl', function($scope, Pokemons) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.pokemons = Pokemons.all();

    $scope.add = function(pokemon) {
        pokemon.count++;
    }

})

.controller('PokemonDetailCtrl', function($scope, $stateParams, Pokemons) {
    $scope.Math = window.Math;
    $scope.pokemon = Pokemons.get($stateParams.pokeId);
})

.controller('EvolutionsCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});