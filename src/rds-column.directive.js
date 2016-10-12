(function() {
  'use strict';

  angular
    .module('schemaForm')
    .directive('rdsColumn', rdsColumn);

  /* @ngInject */
  function rdsColumn() {
    var directive = {
      require: 'rdsMultiColumns',
      controller: ColumnController,
      controllerAs: 'colCtrl',
      restrict: 'AE',
      scope: false
    };
    return directive;
  }

  ColumnController.$inject = ['$scope', '$log'];

  /* @ngInject */
  function ColumnController($scope, $log) { 
    var vm = this;
    $scope.$watch(function() {
      return $scope.multiColCtrl.size;
    }, function(size) {
      var multiColCtrl = $scope.multiColCtrl;
      vm.colIndex = $scope.$index;
      vm.isLast = $scope.$last;
      vm.isFirst = $scope.$first;
      vm.itemsCount = multiColCtrl.itemsPerColumn;
  
      // Distribute the items evenlly according to modulus
      vm.indexFrom = vm.colIndex * (vm.itemsCount + (vm.colIndex < multiColCtrl.modulus ? 1 : 0));
      vm.indexFrom += (vm.colIndex >= multiColCtrl.modulus ? multiColCtrl.modulus : 0);
      vm.indexTo = !vm.isLast ? (vm.indexFrom + vm.itemsCount + (vm.colIndex < multiColCtrl.modulus ? 1 : 0)) : multiColCtrl.size;
    });
  }
})();