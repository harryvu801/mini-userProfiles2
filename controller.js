angular.module('userProfiles').controller('MainController', function($scope, mainService) {

   $scope.currentPage = 2;

   $scope.getUsers = function() {

      var promise = mainService.getData($scope.currentPage);

      promise.then(function(users) {
        $scope.users = users.data;
        $scope.total_pages = users.total_pages;
      })

  }

   $scope.getUsers();

   $scope.prev = function () {
     $scope.currentPage--;
     $scope.getUsers();
  }

   $scope.next = function () {
      $scope.currentPage++;
      $scope.getUsers();
   }

});
