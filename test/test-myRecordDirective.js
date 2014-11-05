describe('Directive: myRecord', function () {
	var element, scope, $compile;

	beforeEach(function () {
		module('myApp');

		inject(function ($rootScope, _$compile_) {
			scope = $rootScope.$new();

			scope.testRecord = {
				key1: 'Foo',
				key2: 'Bar',
				key3: 'FooBar'
			};

			scope.testKeys = {
				key1: true,
				key2: false,
				key3: true
			};

			$compile = _$compile_;
			element = $compile(
				'<tr my-record="testRecord" my-record-keys="testKeys"></tr>'
			)(scope);
			scope.$digest();
		});
	});

	it('should save passed arguments in isolateScope as is', function () {
		var isolated = element.isolateScope();
		expect(isolated.record).toEqual(scope.testRecord);
		expect(isolated.keys).toEqual(scope.testKeys);
	});

	it('should contain certaint amount of cells', function () {
		expect(element.find('td').length).toBe(2);
	});
});
