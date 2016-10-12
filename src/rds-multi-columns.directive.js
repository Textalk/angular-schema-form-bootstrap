(function() {
  'use strict';

  angular
    .module('schemaForm')
    .directive('rdsMultiColumns', rdsMultiColumns);

  /* @ngInject */
  function rdsMultiColumns($log) {
    var directive = {
      controller: RdsMultiColumnsController,
      controllerAs: 'multiColCtrl',
      restrict: 'AE',
      templateUrl: 'decorators/bootstrap/rds-multi-columns.template.html',
      scope: true,
      transclude: true,
      link: link
    };

    function link(scope, element, attrs) {
      // May need to figure out a better way to bind these values to controller while still use non-isolated scope
      attrs.$observe('size', function(size) {
        scope.multiColCtrl.size = parseInt(size);
        scope.multiColCtrl.itemsPerColumn = parseInt(size / scope.form.columns);
        scope.multiColCtrl.modulus = size % scope.form.columns;
      });
    }

    return directive;
  }

  RdsMultiColumnsController.$inject = ['$scope', '$log'];

  /* @ngInject */
  function RdsMultiColumnsController($scope, $log) {
    var vm = this;
    vm.bootstrapCol = 12 / $scope.form.columns;
  }
})();