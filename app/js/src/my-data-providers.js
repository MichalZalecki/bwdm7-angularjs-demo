;(function () {
	'use strict';

	angular./**
	* myDataProviders Module
	*
	* Provides data, who would have expected?!
	*/
	module('myDataProviders', [])./**
	* people Factory
	*
	* Providing list of people via filltext.com.
	*/
	factory('people', ['$http', function ($http) {
		return {
			getRecords: function (rows) {
				rows = rows || 10;
				return $http.get('http://www.filltext.com/', {
					params: {
						rows: rows,
						firstName: '{firstName}',
						lastName: '{lastName}',
						age: '{numberRange|10, 80}',
						email: '{email}',
						phone: '{phone}',
						company: '{business}'
					}
				});
			}
		};
	}])./**
	* companies Service
	*
	* Providing list of companies via filltext.com.
	*/
	service('companies', ['$http', function ($http) {
		this.getRecords = function (rows) {
			rows = rows || 5;
			return $http.get('http://www.filltext.com/', {
				params: {
					rows: rows,
					name: '{business}',
					street: '{streetAddress}',
					city: '{city}',
					state: '{usState}',
					zip: '{zip}',
					contactEmail: '{email}',
				}
			});
		};
	}])./**
	* recordsCount Value
	*
	* Keeps default number of records.
	*/
	value('recordsCount', 100);
})();
