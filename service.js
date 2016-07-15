angular.module('apiApp').service('apiSvc', ['$http','$q', function ($http, $q) {
	this.getAllPokemon = function (offset) {
		var limit = offset == 0  ? 'limit=181' : 'limit=180'
		var stroffset = '&offset=' + offset;

		var defer = $q.defer();
		$http({
			method: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/?' + limit + stroffset
		}).then(function (response) {
			var results = response.data.results;
			for (var i = 0; i < results.length; i++) {
				results[i]['num'] = i+1+offset;
			};
			defer.resolve(results);
		})
		return defer.promise;
	}

	// this.getAllPokemon = function () {
	// 	var deferred = $q.defer();
	// 	$http.get('http://pokeapi.co/api/v2/pokemon/?limit=721')
	// 	.then(function (response) {
	// 		// return response.data.results;
	// 	})
	// 	return defer.promise;
	// }



	this.getPokeInfo = function (apiURL) {
		return $http({
			method: 'GET',
			url: apiURL
		}).then(function (infoResponse) {
			return infoResponse;
		}) 
	}
}])


// loading icon like in weather app

// routes?