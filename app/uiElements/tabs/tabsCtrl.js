﻿angular.module('app')
  .controller('tabsCtrl', ['$scope', 'pluginsService', function ($scope, pluginsService) {
      $scope.isTabActive = true;
      //$scope.$on('$viewContentLoaded', function () {
      //    pluginsService.init();
      //});
     
  }]);
