describe('Factory: dataProvider', function () {

	var dataProvider;

	beforeEach(function () {
		module('myApp');

		inject(function (_dataProvider_) {
			dataProvider = _dataProvider_;
		});

		spyOn(dataProvider, 'getRecords');
		dataProvider.getRecords(10);
	});

	it('should have getRecords method', function () {
		expect(dataProvider.getRecords).toEqual(jasmine.any(Function));
		expect(dataProvider.getRecords).toHaveBeenCalledWith(10);
	});
});