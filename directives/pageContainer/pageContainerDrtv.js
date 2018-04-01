//nav menu directive
angular.module('portal').directive('pageContainer', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/pageContainer/pageContainer.html',
		controllerAs: 'page',
		scope: {
			pageType: '@'
		},
		controller: ['$scope', function($scope, mainService){
			var _this = this;			
			
		}]
	};
});