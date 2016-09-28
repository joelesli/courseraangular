(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

 function LunchCheckController($scope) {

  $scope.lunch = "";
  $scope.message = "";

  $scope.checkLunch = function () {

    if ($scope.lunch == "") {
      $scope.message = "Please enter data first";
    }
    else {

      var array = $scope.lunch.split(",")
      if (array.length <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }

    }
  };
};

})();
