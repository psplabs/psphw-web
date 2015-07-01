angular.module('app')
  .controller('componentsCtrl', ['$scope', 'pluginsService', function ($scope, pluginsService) {
      $scope.$on('$viewContentLoaded', function () {
          pluginsService.init();
      });
  }]);
