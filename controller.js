angular.module('apiApp').controller('apiCtrl', ['$scope', 'apiSvc', function ($scope, apiSvc) {
	$scope.shown = true;

	// $scope.sortProp = 'Name';

	$scope.filterOptions = {
    		filterText: ''
  	};

	$scope.getPokemon = function (offset) {
		apiSvc.getAllPokemon(offset).then(function(pokemon) {
			if (offset === 0) {
				$scope.pokemon = pokemon;
			}
			else if (offset === 181) {
				$scope.pokemon2 = pokemon;
			}
			else if (offset === 361) {
				$scope.pokemon3 = pokemon;
			}
			else if (offset === 541) {
				$scope.pokemon4 = pokemon;
			}
		})
	}

	$scope.getPokemon(0);
	$scope.getPokemon(181);
	$scope.getPokemon(361);
	$scope.getPokemon(541);

	var dataArray = ['pokemon', 'pokemon2', 'pokemon3', 'pokemon4'];
	var off = [1, 182, 362, 542];

	$scope.gridOptions = [];
	for (var i = 0; i < dataArray.length; i++) {
		$scope.gridOptions.push(
			{enableColumnResize: true,
			enableSorting: true,
			sortInfo: {fields: ['Name', '#'], directions: ['asc']},
			filterOptions: $scope.filterOptions,
		      data: dataArray[i],
		      jqueryUITheme: true,
		      enableRowSelection: false,
		      height: '110px',
		      columnDefs: [
		      {field: 'num', displayName: '#', width: '50px', cellClass: 'grid-align', pinned: true },
		      {field: 'name', displayName: 'Name', width: '145px', cellClass: 'grid-align', pinned: true},
		      {field: 'url', displayName: 'Get More Info', width: '150px',cellTemplate: '<button ng-click="getPokeInfo(row.getProperty(col.field))">More</button>', cellClass: 'grid-align', pinned: true},
		      ]})
	};

	$scope.getPokeInfo = function (pokemonInfoURL) {
		$scope.shown = !$scope.shown;
		apiSvc.getPokeInfo(pokemonInfoURL).then(function(response) {
			$scope.pokemonInfo = response.data;
			// console.log(response.data);
			
		})
	}

	
	
}])




