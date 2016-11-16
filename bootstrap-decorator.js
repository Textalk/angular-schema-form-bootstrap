angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/bootstrap/actions-trcl.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\" ng-transclude=\"\"></div>");
$templateCache.put("decorators/bootstrap/actions.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\"><input ng-repeat-start=\"item in form.items\" type=\"submit\" class=\"btn {{ item.style || \'btn-default\' }} {{form.fieldHtmlClass}}\" value=\"{{item.title}}\" ng-if=\"item.type === \'submit\'\"> <button ng-repeat-end=\"\" class=\"btn {{ item.style || \'btn-default\' }} {{form.fieldHtmlClass}}\" type=\"button\" ng-disabled=\"form.readonly\" ng-if=\"item.type !== \'submit\'\" ng-click=\"buttonClick($event,item)\"><span ng-if=\"item.icon\" class=\"{{item.icon}}\"></span>{{item.title}}</button></div>");
$templateCache.put("decorators/bootstrap/array.html","<div class=\"schema-form-array {{form.htmlClass}}\" sf-field-model=\"sf-new-array\" sf-new-array=\"\"><label class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</label><ol class=\"list-group\" sf-field-model=\"\" ui-sortable=\"form.sortOptions\"><li class=\"list-group-item {{form.fieldHtmlClass}}\" schema-form-array-items=\"\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\"><button ng-hide=\"form.readonly || form.remove === null\" ng-click=\"deleteFromArray($index)\" ng-disabled=\"form.schema.minItems >= modelArray.length\" style=\"position: relative; z-index: 20;\" type=\"button\" class=\"close pull-right\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button></li></ol><div class=\"clearfix\" style=\"padding: 15px;\" ng-model=\"modelArray\" schema-validate=\"form\"><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div><button ng-hide=\"form.readonly || form.add === null || form.disableAdd === true\" ng-click=\"appendToArray()\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" type=\"button\" class=\"btn {{ form.style.add || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</button></div></div>");
$templateCache.put("decorators/bootstrap/btn-group.html","<div class=\"schema-form-section {{form.htmlClass}} text-center\"></div>");
$templateCache.put("decorators/bootstrap/checkbox.html","<div class=\"checkbox schema-form-checkbox {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"{{form.labelHtmlClass}}\"><input type=\"checkbox\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" class=\"{{form.fieldHtmlClass}}\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.title\"></span></label><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/checkboxes.html","<div sf-field-model=\"sf-new-array\" sf-new-array=\"\" class=\"form-group schema-form-checkboxes {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" sf-field-model=\"\" schema-validate=\"form\" ng-show=\"showTitle()\">{{form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label><div class=\"checkbox\" ng-if=\"!form.columns || form.columns === 1\" ng-repeat=\"entry in form.titleMap track by $index\"><label><input type=\"checkbox\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"{{form.fieldHtmlClass}}\" ng-model=\"titleMapValues[$index]\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.titleMap[$index].name\"></span></label></div><rds-multi-columns size=\"{{form.titleMap.length}}\" ng-if=\"form.columns > 1\"><div ng-repeat=\"val in titleMapValues.slice($parent.colCtrl.indexFrom, $parent.colCtrl.indexTo) track by $index\" class=\"checkbox\"><label><input type=\"checkbox\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"{{form.fieldHtmlClass}}\" ng-model=\"titleMapValues[$index + $parent.$parent.colCtrl.indexFrom]\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.titleMap[$index + $parent.$parent.colCtrl.indexFrom].name\"></span></label></div></rds-multi-columns><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/default.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label> <input ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\" ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" sf-field-model=\"\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"><div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\"><span ng-if=\"form.fieldAddonLeft\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonLeft\"></span> <input ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" sf-field-model=\"\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"> <span ng-if=\"form.fieldAddonRight\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonRight\"></span></div><span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\" aria-hidden=\"true\"></span> <span ng-if=\"hasError() || hasSuccess()\" id=\"{{form.key.slice(-1)[0] + \'Status\'}}\" class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/fieldset.html","<fieldset ng-disabled=\"form.readonly\" class=\"schema-form-fieldset {{form.htmlClass}}\"><legend ng-class=\"{\'sr-only\': !showTitle() }\">{{ form.title }}</legend><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div></fieldset>");
$templateCache.put("decorators/bootstrap/help.html","<div class=\"helpvalue schema-form-helpvalue {{form.htmlClass}}\" ng-bind-html=\"form.helpvalue\"></div>");
$templateCache.put("decorators/bootstrap/key-container.html","<div class=\"schema-form-section {{form.htmlClass}}\" sf-field-model=\"\"></div>");
$templateCache.put("decorators/bootstrap/radio-buttons.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><div><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label></div><div class=\"btn-group\"><label sf-field-model=\"replaceAll\" class=\"btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-default\' : form.style.unselected || \'btn-default\'; }}\" ng-class=\"{ active: item.value === $$value$$ }\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" style=\"display: none;\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/radios-inline.html","<div class=\"form-group schema-form-radios-inline {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\" sf-field-model=\"\" schema-validate=\"form\">{{form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label><div><label class=\"radio-inline\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"item.value\" radios-helper=\"\" name=\"{{radiosHelper.getName()}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/radios.html","<div class=\"form-group schema-form-radios {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" sf-field-model=\"\" schema-validate=\"form\" ng-show=\"showTitle()\">{{form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label><div ng-if=\"!form.columns || form.columns === 1\" class=\"radio\" ng-repeat=\"entry in form.titleMap\"><label><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"entry.value\" radios-helper=\"\" name=\"{{radiosHelper.getName()}}\"> <span ng-bind-html=\"entry.name\"></span></label></div><rds-multi-columns size=\"{{form.titleMap.length}}\" ng-if=\"form.columns > 1\"><div class=\"radio\" ng-repeat=\"entry in form.titleMap.slice($parent.colCtrl.indexFrom, $parent.colCtrl.indexTo)\"><label><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"entry.value\" radios-helper=\"\" name=\"{{radiosHelper.getName()}}\"> <span ng-bind-html=\"entry.name\"></span></label></div></rds-multi-columns><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/rds-multi-columns.template.html","<div class=\"row\"><div ng-repeat=\"n in [].constructor(form.columns) track by $index\" rds-column=\"\" ng-class=\"[\'col-xs-\'+multiColCtrl.bootstrapCol, \'col-sm-\'+multiColCtrl.bootstrapCol, \'col-md-\'+multiColCtrl.bootstrapCol, \'col-lg-\'+multiColCtrl.bootstrapCol]\"><div ng-transclude=\"\"></div></div></div>");
$templateCache.put("decorators/bootstrap/section.html","<div class=\"schema-form-section {{form.htmlClass}}\"></div>");
$templateCache.put("decorators/bootstrap/select.html","<div class=\"form-group {{form.htmlClass}} schema-form-select\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label><select sf-field-model=\"\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"form-control {{form.fieldHtmlClass}}\" schema-validate=\"form\" ng-options=\"item.value as item.name group by item.group for item in form.titleMap\" name=\"{{form.key.slice(-1)[0]}}\"></select><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/submit.html","<span class=\"schema-form-submit {{form.htmlClass}}\"><input type=\"submit\" class=\"btn {{ form.style || \'btn-primary\' }} {{form.fieldHtmlClass}}\" value=\"{{form.title}}\" ng-disabled=\"form.readonly\" ng-if=\"form.type === \'submit\'\"> <button class=\"btn {{ form.style || \'btn-default\' }}\" type=\"button\" ng-click=\"buttonClick($event,form)\" ng-disabled=\"form.readonly\" ng-if=\"form.type !== \'submit\'\"><span ng-if=\"form.icon\" class=\"{{form.icon}}\"></span> {{form.title}}</button></span>");
$templateCache.put("decorators/bootstrap/tabarray.html","<div ng-init=\"selected = { tab: 0 }\" ng-model=\"modelArray\" schema-validate=\"form\" sf-field-model=\"sf-new-array\" sf-new-array=\"\" class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || \'left\'}} {{form.htmlClass}}\"><div ng-if=\"!form.tabType || form.tabType !== \'right\'\" ng-class=\"{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}\"><ul class=\"nav nav-tabs\" ng-class=\"{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}\"><li sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div><div ng-class=\"{\'col-xs-9\': !form.tabType || form.tabType === \'left\' || form.tabType === \'right\'}\"><div class=\"tab-content {{form.fieldHtmlClass}}\"><div class=\"tab-pane clearfix tab{{selected.tab}} index{{$index}}\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><div schema-form-array-items=\"\"></div><div class=\"row\"><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left\"><button ng-hide=\"form.readonly\" ng-click=\"selected.tab = indexDown($index)\" ng-disabled=\"$index <= 0\" type=\"button\" class=\"btn {{ form.style.moveUp || \'btn-info\' }}\"><i class=\"glyphicon glyphicon-arrow-up\"></i> {{ form.moveUp || \'Move Up\'}}</button> <button ng-hide=\"form.readonly\" ng-click=\"selected.tab = indexUp($index)\" ng-disabled=\"$index >= modelArray.length - 1\" type=\"button\" class=\"btn {{ form.style.moveDown || \'btn-info\' }}\"><i class=\"glyphicon glyphicon-arrow-down\"></i> {{ form.moveDown|| \'Move Down\'}}</button></div><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right\"><button ng-hide=\"form.readonly\" ng-click=\"selected.tab = deleteFromArray($index).length - 1\" ng-disabled=\"form.schema.minItems >= modelArray.length\" type=\"button\" class=\"btn {{ form.style.remove || \'btn-default\' }}\"><i class=\"glyphicon glyphicon-trash\"></i> {{ form.remove || \'Remove\'}}</button></div></div></div><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div></div></div><div ng-if=\"form.tabType === \'right\'\" class=\"col-xs-3\"><ul class=\"nav nav-tabs tabs-right\"><li sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div>");
$templateCache.put("decorators/bootstrap/tabs.html","<div ng-init=\"selected = { tab: 0 }\" class=\"schema-form-tabs {{form.htmlClass}}\"><ul class=\"nav nav-tabs\"><li ng-repeat=\"tab in form.tabs\" ng-disabled=\"form.readonly\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{ tab.title }}</a></li></ul><div class=\"tab-content {{form.fieldHtmlClass}}\"></div></div>");
$templateCache.put("decorators/bootstrap/textarea.html","<div class=\"form-group has-feedback {{form.htmlClass}} schema-form-textarea\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label> <textarea ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\" class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\"> </textarea><div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\"><span ng-if=\"form.fieldAddonLeft\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonLeft\"></span> <textarea class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\"> </textarea><span ng-if=\"form.fieldAddonRight\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonRight\"></span></div><span class=\"help-block\" sf-message=\"form.description\"></span></div>");}]);
angular.module('schemaForm').config(['schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider',
function(decoratorsProvider, sfBuilderProvider, sfPathProvider) {
  var base = 'decorators/bootstrap/';

  var simpleTransclusion  = sfBuilderProvider.builders.simpleTransclusion;
  var ngModelOptions      = sfBuilderProvider.builders.ngModelOptions;
  var ngModel             = sfBuilderProvider.builders.ngModel;
  var sfField             = sfBuilderProvider.builders.sfField;
  var condition           = sfBuilderProvider.builders.condition;
  var array               = sfBuilderProvider.builders.array;
  var complexValidation   = sfBuilderProvider.builders.complexValidation;

  // Tabs is so bootstrap specific that it stays here.
  var tabs = function(args) {
    if (args.form.tabs && args.form.tabs.length > 0) {
      var tabContent = args.fieldFrag.querySelector('.tab-content');

      args.form.tabs.forEach(function(tab, index) {
        var div = document.createElement('div');
        div.className = 'tab-pane';
        div.setAttribute('ng-disabled', 'form.readonly');
        div.setAttribute('ng-show', 'selected.tab === ' + index);
        div.setAttribute('ng-class', '{active: selected.tab === ' + index + '}');

        var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);
        div.appendChild(childFrag);
        tabContent.appendChild(div);
      });
    }
  };

  // Set tabArray sortOptions.items default.
  var tabArray = function(args) {
    if(args.form.hasOwnProperty('sortOptions')) {
      if(!args.form.sortOptions.hasOwnProperty('items')) {
        args.form.sortOptions['items'] = 'li:not(:last-child)';
      }
    } else {
      args.form['sortOptions'] = {items: 'li:not(:last-child)'};
    }
  }

  var selectPlaceholder = function(args) {
    if (args.form.placeholder) {
      var selectBox = args.fieldFrag.querySelector('select');
      var option = document.createElement('option');
      option.setAttribute('value', '');

      /* We only want the placeholder to show when we do not have a value on the model.
       * We make ngModel builder replace all so we can use $$value$$.
       */
      option.setAttribute('sf-field-model', 'replaceAll');

      /* https://github.com/angular/angular.js/issues/12190#issuecomment-115277040
       * angular > 1.4 does a emptyOption.attr('selected', true)
       * which does not like the ng-if comment.
       */
      if (angular.version.major === 1 && angular.version.minor < 4) {
        option.setAttribute('ng-if', '$$value$$ === undefined');
      } else {
        option.setAttribute('ng-show', '$$value$$ === undefined');
      }

      option.textContent = args.form.placeholder;

      selectBox.appendChild(option);
    }
  };

  var defaults = [sfField, ngModel, ngModelOptions, condition, complexValidation];
  decoratorsProvider.defineDecorator('bootstrapDecorator', {
    textarea: {template: base + 'textarea.html', builder: defaults},
    fieldset: {template: base + 'fieldset.html', builder: [sfField, simpleTransclusion, condition]},
    array: {template: base + 'array.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
    tabarray: {template: base + 'tabarray.html', builder: [sfField, ngModelOptions, ngModel, array, condition, tabArray]},
    tabs: {template: base + 'tabs.html', builder: [sfField, ngModelOptions, tabs, condition]},
    section: {template: base + 'section.html', builder: [sfField, simpleTransclusion, condition]},
    'btn-group': {template: base + 'btn-group.html', builder: [sfField, simpleTransclusion, condition]},
    conditional: {template: base + 'section.html', builder: [sfField, simpleTransclusion, condition]},
    actions: {template: base + 'actions.html', builder: defaults},
    select: {template: base + 'select.html', builder: [selectPlaceholder, sfField, ngModel, ngModelOptions, condition]},
    checkbox: {template: base + 'checkbox.html', builder: defaults},
    checkboxes: {template: base + 'checkboxes.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
    number: {template: base + 'default.html', builder: defaults},
    password: {template: base + 'default.html', builder: defaults},
    submit: {template: base + 'submit.html', builder: defaults},
    button: {template: base + 'submit.html', builder: defaults},
    radios: {template: base + 'radios.html', builder: defaults},
    'radios-inline': {template: base + 'radios-inline.html', builder: defaults},
    radiobuttons: {template: base + 'radio-buttons.html', builder: defaults},
    help: {template: base + 'help.html', builder: defaults},
    keyContainer: {template: base + 'key-container.html', builder: [sfField, ngModel, simpleTransclusion, condition]},
    'default': {template: base + 'default.html', builder: defaults}
  }, []);

}]);

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