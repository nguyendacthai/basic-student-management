myApp.config(function($stateProvider) {
    var studentState = {
        name: 'student-management',
        url: '/student',
        templateUrl: '/views/student-management.html'
    }

    $stateProvider.state(studentState);
});