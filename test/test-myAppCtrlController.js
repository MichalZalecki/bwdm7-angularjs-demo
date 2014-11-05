describe('Controller: myAppCtrl', function () {

	var scope, fakeKeysGenrator, fakeDataProvider, keysGenrator, recordsCount;

	beforeEach(function () {
		module('myApp', function ($provide) {

			fakeKeysGenrator = {
				generateKeys: function () {
					return {};
				}
			};

			fakeDataProvider = {};

			keysGenrator = fakeKeysGenrator;

			$provide.value('keysGenrator', keysGenrator);
			$provide.value('dataProvider', fakeDataProvider);
		});

		inject(function ($q) {
			fakeDataProvider.getRecords = function() {
				var defer = $q.defer();

				defer.resolve({data: [{
					key1: 'value1',
					key2: true,
					key3: 3
				}]});

				return defer.promise;
			};
		});

		inject(function (
				$controller,
				$rootScope,
				_keysGenrator_,
				_dataProvider_,
				_recordsCount_) {

			scope = $rootScope.$new();

			recordsCount = _recordsCount_;

			$controller('myAppCtrl', {
				$scope: scope,
				keysGenrator: _keysGenrator_,
				dataProvider: _dataProvider_
			});

			scope.$digest();
		});
	});

	it('should containt bunch of records', function () {
		expect(scope.records).toEqual(jasmine.any(Array));
		expect(scope.records.length).toBeGreaterThan(0);
	});

	it('should containt keys object', function () {
		expect(scope.keys).toEqual(jasmine.any(Object));
	});

	it('should containt query object', function () {
		expect(scope.keys).toEqual(jasmine.any(Object));
	});

	it('should not have specified by (sort property) by default', function () {
		expect(scope.by).toBeUndefined();
	});

	it('should not sort reverse by default', function () {
		expect(scope.reverse).toBe(false);
	});

	it('should have resetForm function', function () {
		expect(scope.resetForm).toEqual(jasmine.any(Function));
	});

	it('should have resetForm which resets query, keys, recordsCount and form',
		function () {

		// fake form
		scope.criteria = {
			$valid: true,
			$pristine: false,
			$dirty: true,
			$setPristine: function () {
				scope.newItemForm.$dirty = false;
				scope.newItemForm.$pristine = true;
			}
		};

		spyOn(keysGenrator, 'generateKeys');
		spyOn(scope.criteria, '$setPristine');

		scope.query = {
			key1: 'foo',
			key2: 'bar',
			key3: 'fooBar'
		};

		scope.recordsCount = recordsCount + Math.random();

		scope.resetForm();

		expect(scope.query).toEqual({});
		expect(scope.recordsCount).toBe(recordsCount);
		expect(keysGenrator.generateKeys).toHaveBeenCalled();
		expect(scope.criteria.$setPristine).toHaveBeenCalled();

	});

});