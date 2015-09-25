attendence.factory('AttendenceFactory', function AttendenceFactory() {
  var factory = {};
  factory.students = [{name: "John Wayne", here: false}, {name: "Frank Sinatra", here: true}, {name: "Amelia Earhart", here: false}];
  return factory;
});
