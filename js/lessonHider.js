angular.module('directivePractice')
	.directive('lessonHider', function () {
		return {
			templateUrl: '../lessonHiderTmpl.html',
			restrict: 'E',

			//A quick refresher on the different scope options here: scope: {twoWayDataBinding: '=', stringBinding: '@', functionBinding: '&'}
			scope: {
				lesson: '=',
				dayAlert: '&'

			},
			controller: function ($scope, lessonSvc) {
				$scope.getSchedule = lessonSvc.getSchedule();
//				$scope.strikeThrough = false;
			},
			link: function (scope, element, attributes) {

				scope.getSchedule.then(function (response) {
					scope.schedule = response.data;

					scope.schedule.forEach(function (scheduleDay) {
						if (scheduleDay.lesson === scope.lesson) {
							element.css('text-decoration', 'line-through');
							scope.lessonDay = scheduleDay.weekday;
							return;
						}
					});
					
					/*scope.toggle = function() {
						if(scope.strikeThrough) {
							element.css('text-decoration', 'line-through');
						} else {
							element.css('text-decoration', 'none');
						}
					}
					
					scope.toggle();*/
					scope.remove = function() {
						element.html('');
					}
						
				});
			}
		}
	});