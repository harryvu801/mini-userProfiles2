angular.module('userProfiles').service('mainService', function($http) {



	this.getData = function (pageNum) {
		var promise2 = $http({
				method: 'GET',
				url: 'https://reqres.in/api/users?page=' + pageNum
		})

		return promise2.then(function (response) {
				if (response.status === 200) {
					 	return response.data;
				}
	 	});
}



});
