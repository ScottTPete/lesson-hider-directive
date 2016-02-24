angular.module('directivePractice')
	.service('lessonSvc', function ($http) {
	this.getSchedule = function() {
		return $http.get('schedule.json');
	}
})

