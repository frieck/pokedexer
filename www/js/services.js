angular.module('starter.services', [])

.factory('Pokemons', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var pokemons = [{
            id: 0,
            number: "001",
            name: 'Bulbasaur',
            face: 'img/001.png',
            count: 0,
            nextEvo: 25
        },
        {
            id: 1,
            number: "002",
            name: 'Ivysaur',
            face: 'img/002.png',
            count: 0,
            nextEvo: 100
        },
        {
            id: 1,
            number: "003",
            name: 'Venusaur',
            face: 'img/003.png',
            count: 0,
            nextEvo: -1
        }
    ];

    return {
        all: function() {
            return pokemons;
        },
        get: function(pokeId) {
            for (var i = 0; i < pokemons.length; i++) {
                if (pokemons[i].id === parseInt(pokeId)) {
                    return pokemons[i];
                }
            }
            return null;
        }
    };
});