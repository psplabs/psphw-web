'use strict';

angular.module('app')
  .controller('mailSendCtrl', ['$scope', 'mailBoxService', function ($scope, mailBoxService) {
      $scope.$on('$viewContentLoaded', function () {
          mailBoxService.initSend();
      });
  }]);
