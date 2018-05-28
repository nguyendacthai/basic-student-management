var myApp = angular.module("myApp");
myApp.controller("studentController", function ($scope) {
    $scope.users = [
        {
            Name : "Linh",
            Age : 24,
            Gender : "F"
        },
        {
            Name : "Dat",
            Age : 23,
            Gender : "M"
        },
        {
            Name : "Thai",
            Age : 26,
            Gender : "M"
        }
    ];

    $scope.add = function () {

        this.object ={
            Name : $scope.name,
            Age: $scope.age,
            Gender : $scope.gender
        };

        $scope.users.push($scope.object);
    };

    $scope.remove = function (user) {
        var index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);
    };

    $scope.view = function (user) {
        $scope.name = user.Name;
        $scope.age = user.Age;
        $scope.gender = user.Gender;
    };
});