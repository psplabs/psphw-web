'use strict';

angular.module('app')
  .controller('mailboxCtrl', ['$scope', 'mailBoxService', function ($scope, mailBoxService) {
      $scope.$on('$viewContentLoaded', function () {
          mailBoxService.init();
      });
  }]);
