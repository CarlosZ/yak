'use strict';

angular.module('yakApp')
  .controller('AlertsCtrl', function ($scope, alertsService) {
    $scope.alerts = [];
    alertsService.addChangeListener(function(alerts) {
      $scope.alerts = alerts;
      $scope.$apply();
    });

    $scope.closeAlert = function closeAlert(alert) {
      alertsService.removeAlert(alert);
    }
  });
