'use strict';

/**
 * @ngdoc function
 * @name newappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newappApp
 */
angular.module('app')
  .controller('chartsCtrl', function ($scope, chartService) {
      $scope.$on('$viewContentLoaded', function () {
          chartService.init();
      });
  });
