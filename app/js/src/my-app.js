;(function () {
	'use strict';

	angular./**
	* myApp Module
	*
	* My awesome app
	*/
	module('myApp', ['myDataProviders']).
		controller('myAppCtrl',
			['$scope', 'keysGenrator', 'dataProvider', 'recordsCount',
			function ($scope, keysGenrator, dataProvider, recordsCount) {

			$scope.records         = [];
			$scope.keys            = {};
			$scope.query           = {};
			$scope.recordsCount    = recordsCount;

			$scope.reload = function () {
				dataProvider.getRecords($scope.recordsCount)
					.then(function (result) {
						$scope.records = result.data;
						if (angular.equals($scope.keys, {})) {
							$scope.keys = keysGenrator.
								generateKeys($scope.records[0]);
						}
					}, function (result) {
						console.error(result.status);
					});
			};
			$scope.reload();

			$scope.reverse = false;
			$scope.setSorting = function (by, direction) {
				$scope.by = by;
				$scope.reverse = direction === 'DESC' ? true : false;
			};

			$scope.resetForm = function () {
				$scope.keys  = keysGenrator.generateKeys($scope.keys);
				$scope.query = {};
				$scope.criteria.$setPristine();
                if ($scope.recordsCount !== recordsCount) {
				    $scope.recordsCount = recordsCount;
                    $scope.reload();
                }
			};

		}])./**
		* recordsCount Decorator
		*
		* Change default number of records.
		*/
		config(['$provide', function ($provide) {
			$provide.decorator('recordsCount', function () {
				return 200;
			});
		}])./**
		* dataProvider Factory
		*
		* Providing dataProvider dependency. This may seems a bit stupid by
		* allows for having one set of unit tests for all records providers.
		*/
		factory('dataProvider', ['people', function (dataProvider) {
			return dataProvider;
		}])./**
		* myRecord Directive
		*
		* Generates record cells, because of the browser "feature" which shift
		* everything inside the table before it (which isn's row or cell) it
		* have to be restricted only to [A]ttribute.
		*/
		directive('myRecord', function () {
			return {
				restrict: 'A',
				template: '<td ng-repeat="info in record | keysEndabledFilter:keys">{{ info }}</td>',
				scope: {
					record: '=myRecord',
					keys: '=myRecordKeys'
				}
			};
		})./**
		* keysGenrator Provider
		*
		* Generates object containing default values based on passed object.
		*/
		provider('keysGenrator', function () {
			this.def = true;
			this.$get = function () {
				var provider = this;
				return {
					generateKeys: function (obj) {
						var keys = angular.copy(obj);
						angular.forEach(keys, function (value, key) {
							keys[key] = provider.def;
						});
						return keys;
					}
				};
			};
		})./**
		* keysGenratorProvider Config
		*
		* Change default keysGenratorProvider's filling value.
		*/
		/*config(['keysGenratorProvider', function (keysGenratorProvider) {
			keysGenratorProvider.def = false;
		}])./**
		* keysEndabledFilter Filter
		*
		* Keys filter common for both: keys object and record properties.
		*/
		filter('keysEndabledFilter', function () {
			return function (input, keys) {
				keys  = keys || input;
				var output = {};
				angular.forEach(input, function (value, key) {
					if (keys[key]) {
						this[key] = value;
					}
				}, output);
				return output;
			};
		})./**
		* capitalizeFirst Filter
		*
		* Capitalizes first letter and downcase others.
		*/
		filter('capitalizeFirst', function () {
			return function (input) {
      			return input.charAt(0).toUpperCase() +
      				   input.substring(1).toLowerCase();
    		};
		})./**
		* camel2Space Filter
		*
		* Converts capital to space and miniscule
		*/
		filter('camel2Space', function () {
			return function (input) {
      			return input.replace(/(.{1})([A-Z])/, '$1 $2');
    		};
		});
})();
