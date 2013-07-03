'use strict';

angular.module('yakApp')
  .service('alertsService', function AlertsService($timeout, $q) {
    this._alerts = [];
    this._listeners = [];

    this.addAlert = function addAlert(msg, type) {
      var newAlert = {msg: msg, type: type};
      this._alerts.push(newAlert);
      this._notifyListeners();
      return newAlert;
    };

    this.addTimedAlert = function addTimedAlert(msg, type, timeout) {
      var newAlert = this.addAlert(msg, type);
      var deferred = $q.defer();
      var promise = deferred.promise;
      $timeout(function() {
        this.removeAlert(newAlert);
        deferred.resolve();
      }.bind(this), timeout || 5000);
      return promise;
    };

    this.removeAlert = function removeAlert(alertToRemove) {
      var index = this._alerts.indexOf(alertToRemove);
      this._alerts.splice(index, 1);
      this._notifyListeners();
    };

    this.addChangeListener = function addChangeListener(listener) {
      if (angular.isFunction(listener)) {
        this._listeners.push(listener);
      }
    };

    this._notifyListeners = function _notifyListeners() {
      angular.forEach(this._listeners, function(listener) {
        listener.call(undefined, this._alerts);
      }.bind(this));
    }
  });
