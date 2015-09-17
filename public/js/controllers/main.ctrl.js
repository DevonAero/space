angular.module('Space')
	.controller('MainCtrl', ['getPlaces', '$http', function(getPlaces, $http) {
		var vm = this;
		vm.message = 'Hello world!';
		vm.loading = true;

		getPlaces.getPlaces().then(function(data) {
			vm.place = data.venues;
			console.log(vm.place);
			vm.cityName = vm.place[0].location.city;
			vm.loading = false;
		});

	}]);