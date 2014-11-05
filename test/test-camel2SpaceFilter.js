describe('Filter: camel2SpaceFilter', function () {

	var camel2SpaceFilter;

	beforeEach(function () {
		module('myApp');

		inject(function(_camel2SpaceFilter_) {
		    camel2SpaceFilter = _camel2SpaceFilter_;
		});
	});

	it('should convert capital to space and miniscule', function () {
		expect(camel2SpaceFilter('lastName')).toBe('last Name');
	});

	it('shouldn\'t take action', function () {
		expect(camel2SpaceFilter('name')).toBe('name');
	});

	it('shouldn\'t add space before first letter', function () {
		expect(camel2SpaceFilter('LastName')).toBe('Last Name');
	});

});
