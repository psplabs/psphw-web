'use strict';

angular.module('app')
  .controller('pricingTableCtrl', function ($scope, pricingTableService) {
      $scope.$on('$viewContentLoaded', function () {
          pricingTableService.init();
      });
  });
