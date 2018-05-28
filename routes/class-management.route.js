myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('default', {
        controller : 'classController',
        name : 'class-management',
        url : '/class',
        templateUrl : '/views/class-management.html'
    })
    $urlRouterProvider.otherwise('/class')
}]);