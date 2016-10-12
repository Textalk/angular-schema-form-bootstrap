(function() {
  'use strict';

  angular
    .module('schemaForm')
    .directive('radiosHelper', radiosHelper);

  radiosHelper.$inject = ['$log'];

  function radiosHelper($log) {
    var directive = {
      controller: Controller,
      controllerAs: 'radiosHelper',
      restrict: 'A',
      scope: false 
    };
    return directive;

  }

  Controller.$inject = ['$scope']

  /* @ngInject */
  function Controller($scope) {

  	var form = $scope.form;

    var vm = this;
    vm.getName = getName;

    function getName() {
      return form.key.join('.') + _getArrayIndexIfAny();
    }

    function _getArrayIndexIfAny() {
    	var possibleIndex = $scope.$parent.$parent.$index;
    	return angular.isNumber(possibleIndex) ? possibleIndex : '';
    }
  }
})();