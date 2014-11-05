describe('Filter: capitalizeFirstFilter (injecting capitalizeFirstFilter way)', function () {

	var capitalizeFirstFilter;

	beforeEach(function () {
		module('myApp');

		inject(function(_capitalizeFirstFilter_) {
		    capitalizeFirstFilter = _capitalizeFirstFilter_;
		});
	});

	it('should capitalize first letter', function () {
		expect(capitalizeFirstFilter('michał')).toBe('Michał');
	});

	it('should capitalize ONLY first letter', function () {
		expect(capitalizeFirstFilter('michał załęcki')).toBe('Michał załęcki');
	});

	it('should downcased letters other than the first one', function () {
		expect(capitalizeFirstFilter('bydgoszcz Web Development Meetup'))
			.toBe('Bydgoszcz web development meetup');
	});

});

describe('Filter: capitalizeFirstFilter (injecting $filter way)', function () {

	var $filter;

	beforeEach(function () {
		module('myApp');

		inject(function(_$filter_) {
			$filter = _$filter_;
		});
	});

	it('should capitalize first letter', function () {
		expect($filter('capitalizeFirst')('michał')).toBe('Michał');
	});

	it('should capitalize ONLY first letter', function () {
		expect($filter('capitalizeFirst')('michał załęcki')).toBe('Michał załęcki');
	});

	it('should downcased letters other than the first one', function () {
		expect($filter('capitalizeFirst')('bydgoszcz Web Development Meetup'))
			.toBe('Bydgoszcz web development meetup');
	});

});
