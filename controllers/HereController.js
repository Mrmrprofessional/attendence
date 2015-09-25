attendence.controller('HereCtrl', function HereCtrl($scope, AttendenceFactory) {
    $scope.students = AttendenceFactory.students;
});
