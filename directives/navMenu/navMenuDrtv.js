//nav menu directive
angular.module('portal').directive('navMenu', [ function(mainService) {
	return {
		restrict: 'E',
		templateUrl: 'directives/navMenu/navMenu.html',
		controllerAs: 'nav',
		scope: {navOptions:'='},
		controller: ['$scope', function($scope){
			var _this = this;			
			_this.goToDest = function(dest) {
				alert('placeholder');
			}
		}]
	};
}]);