attendence.controller('SignInCtrl', function SignInCtrl($scope, AttendenceFactory) {
    $scope.students = AttendenceFactory.students;
    $scope.signIn = function(item) {
        var index = $scope.students.indexOf(item);
        $scope.students[index].here = true;
        console.log( $scope.students[index].here);
    };
    $scope.signOut = function(item) {
        var index = $scope.students.indexOf(item);
        $scope.students[index].here = false;
        console.log( $scope.students[index].here);
    };
});
