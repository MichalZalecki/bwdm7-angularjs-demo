describe('Provider: keysGenrator', function () {

	var keysGenratorProvider;

	beforeEach(function () {
		angular.module('myApp').config(function (_keysGenratorProvider_) {
			keysGenratorProvider = _keysGenratorProvider_;
		});

		// Initialize injector
		module('myApp');
		// Kickstart the injectors previously registered
        // with calls to angular.mock.module
		inject(function () {});
	});

	it('should have default filling equal true', function () {
		expect(keysGenratorProvider.def).toBe(true);
	});

	it('should generate keys object filled with key-value(true) pairs',
		function () {
		keysGenratorProvider.def = true;
		expect(keysGenratorProvider.$get().generateKeys({
			key1: 'value1',
			key2: true,
			key3: 3
		})).toEqual({
			key1: true,
			key2: true,
			key3: true
		});
	});

	it('should generate keys object filled with key-value(false) pairs',
		function () {
		keysGenratorProvider.def = false;
		expect(keysGenratorProvider.$get().generateKeys({
			key1: 'value1',
			key2: true,
			key3: 3
		})).toEqual({
			key1: false,
			key2: false,
			key3: false
		});
	});
});