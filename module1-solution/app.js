
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

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

      var myLunch = $scope.lunch.replace(/ /g, "");
      // var myLunch = replaceAll($scope.lunch, " ", "")
      console.log("Replace 1 " + myLunch);
      while (myLunch.contains(" ")) {
        myLunch = myLunch.replace(" " , "");
      }

      // myLunch = replaceAll(myLunch, ",," , ",")
      while (myLunch.contains(",,")) {
        myLunch = myLunch.replace(",," , ",");
      }
      console.log("Replace 2 " + myLunch);
      var array = myLunch.split(",");

      if (myLunch == "," || myLunch == "" ) {
          $scope.message = "Please enter data first!" + "\t" + array.length + "\t" + myLunch;
      }
      else if (array.length <= 3) {
        $scope.message = "Enjoy!" + "\t" + array.length + "\t" + myLunch;
      }
      else {
        $scope.message = "Too much! "+ "\t" + array.length + "\t" + myLunch;
      }

    }
  };

  function replaceAll(string, oldString, newString) {

    console.log(string);
    while (string.indexOf(oldString) >= 0) {
      string = string.replace(/oldString/g, newString);
      console.log(string);
    }

    return string;
  };

};

})();
