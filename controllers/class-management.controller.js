var myApp = angular.module("myApp");
myApp.controller("classController", function ($scope, $uibModal, classService) {
    $scope.classes = [];
    $scope.items = [];
    $scope.name = '';
    $scope.major = '';

    $scope.editClassModel = {
        id: null,
        name: '',
        major: ''
    };

    $scope.cancelModal = {};


    $scope.ngOnInit = function () {
        $scope.classes = classService.getClass();
        $scope.items = classService.getMajors();
    };

    $scope.createClass = function ($event) {
        $event.preventDefault();
        if($scope.addClassForm.$invalid){
            return;
        }
        classService.add($scope.name, $scope.major);
        $scope.classes = classService.getClass();
        $scope.name = null;
        $scope.major = null;


        angular.forEach($scope.addClassForm.$$controls, function(control){
            control.$setValidity(false);
        });
    };
    
    $scope.removeClass = function (id) {
        classService.remove(id);
        $scope.classes = classService.getClass();
    };

    $scope.showModal = function(id){

        var object = classService.view(id);
        $scope.editClassModel.name = object.name;
        $scope.editClassModel.major = object.majors;
        $scope.editClassModel.id = id;

        $scope.cancelModal = $uibModal.open({
            size: 'md',
            scope : $scope,
            templateUrl : 'class-modal.html',
            backdrop : false,
        });
    };

    $scope.updateClass = function ($event) {
        $event.preventDefault();
        $scope.submitted = true;
        if ($scope.editClassModel.id != 0){
            classService.update($scope.editClassModel.id, $scope.editClassModel.name, $scope.editClassModel.major);
            $scope.classes = classService.getClass();
        }
        $scope.cancelModal.dismiss();
    };
});
