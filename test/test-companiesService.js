describe('Service: companies', function () {

	var $httpBackend, companies;

	beforeEach(function () {
		module('myDataProviders');

		inject(function (_$httpBackend_, _companies_) {
			$httpBackend = _$httpBackend_;
			companies    = _companies_;

			$httpBackend
				.whenGET('http://www.filltext.com/?city=%7Bcity%7D&contactEmail=%7Bemail%7D&name=%7Bbusiness%7D&rows=5&state=%7BusState%7D&street=%7BstreetAddress%7D&zip=%7Bzip%7D')
				.respond(
					[
					    {
					        "city": "Small Town Girl",
					        "contactEmail": "JOrtiz@rutrum.io",
					        "name": "Comeau Shipping",
					        "state": "Montana",
					        "street": "4305 Dolor Ave",
					        "zip": 46278
					    },
					    {
					        "city": "Granite Falls",
					        "contactEmail": "MNolan@sagittis.org",
					        "name": "Kraenzle LLC",
					        "state": "Arkansas",
					        "street": "4195 Eros St",
					        "zip": 16682
					    },
					    {
					        "city": "Phoenix",
					        "contactEmail": "DTempleman@ipsum.org",
					        "name": "Schade International",
					        "state": "Washington",
					        "street": "3032 At Dr",
					        "zip": 90651
					    },
					    {
					        "city": "Tampa",
					        "contactEmail": "SHoward@nunc.io",
					        "name": "Nordmark Industries",
					        "state": "Connecticut",
					        "street": "8814 Sed Ln",
					        "zip": 77426
					    },
					    {
					        "city": "West Chester",
					        "contactEmail": "JSanvick@amet.com",
					        "name": "Jokisch Computing",
					        "state": "Florida",
					        "street": "5742 Pharetra St",
					        "zip": 61887
					    }
					]
				);
			$httpBackend
				.whenGET('http://www.filltext.com/?city=%7Bcity%7D&contactEmail=%7Bemail%7D&name=%7Bbusiness%7D&rows=20&state=%7BusState%7D&street=%7BstreetAddress%7D&zip=%7Bzip%7D')
				.respond(
					[
					    {
					        "city": "Panama City Beach",
					        "contactEmail": "DHenke@amet.gov",
					        "name": "Reddin Services",
					        "state": "Illinois",
					        "street": "5728 Aliquam Dr",
					        "zip": 51783
					    },
					    {
					        "city": "Sterling",
					        "contactEmail": "DUlvestad@id.gov",
					        "name": "Lacrosse Services",
					        "state": "West Virginia",
					        "street": "3729 Suspendisse Ln",
					        "zip": 26545
					    },
					    {
					        "city": "Slate Hill",
					        "contactEmail": "KLittle@magna.gov",
					        "name": "Poole Technologies",
					        "state": "North Dakota",
					        "street": "3597 Magna Ln",
					        "zip": 16778
					    },
					    {
					        "city": "Kyle",
					        "contactEmail": "THeitert@facilisis.io",
					        "name": "Chester Corporation",
					        "state": "Arizona",
					        "street": "9035 Neque Ct",
					        "zip": 81554
					    },
					    {
					        "city": "Dallas",
					        "contactEmail": "RPhuan@sit.com",
					        "name": "Linville Shipping",
					        "state": "Massachusetts",
					        "street": "880 Id Dr",
					        "zip": 53892
					    },
					    {
					        "city": "Fe Warren Afb",
					        "contactEmail": "MOachs@quis.ly",
					        "name": "Zensen Foods",
					        "state": "Kentucky",
					        "street": "9780 Suspendisse St",
					        "zip": 24725
					    },
					    {
					        "city": "Fort Hood",
					        "contactEmail": "MClark@ipsum.gov",
					        "name": "Hemmer LLC",
					        "state": "Washington",
					        "street": "1741 In Dr",
					        "zip": 44693
					    },
					    {
					        "city": "Lenoir",
					        "contactEmail": "BGullion@massa.gov",
					        "name": "Mckenzie Marketing",
					        "state": "Georgia",
					        "street": "3846 Dui St",
					        "zip": 12069
					    },
					    {
					        "city": "Ogden",
					        "contactEmail": "XMortimore@non.ly",
					        "name": "Medina Services",
					        "state": "Mississippi",
					        "street": "9952 At Ct",
					        "zip": 18017
					    },
					    {
					        "city": "San Juan Capistrano",
					        "contactEmail": "MKim@vel.com",
					        "name": "Beonde Corporation",
					        "state": "Florida",
					        "street": "998 Amet St",
					        "zip": 74207
					    },
					    {
					        "city": "Dinwiddie",
					        "contactEmail": "JScioscia@turpis.gov",
					        "name": "Ratchawongsa Incorporated",
					        "state": "Arkansas",
					        "street": "4235 Donec Rd",
					        "zip": 44110
					    },
					    {
					        "city": "Middleburg",
					        "contactEmail": "DBozzalla@etiam.gov",
					        "name": "Dryden International",
					        "state": "Virginia",
					        "street": "5839 Orci Rd",
					        "zip": 29677
					    },
					    {
					        "city": "Anonymous",
					        "contactEmail": "ASpiegel@convallis.com",
					        "name": "Jensen Technologies",
					        "state": "Idaho",
					        "street": "1119 Lorem St",
					        "zip": 27718
					    },
					    {
					        "city": "Vancouver",
					        "contactEmail": "KMills@sed.io",
					        "name": "Geis Marketing",
					        "state": "Montana",
					        "street": "8440 Tortor Ave",
					        "zip": 34969
					    },
					    {
					        "city": "Panama City Beach",
					        "contactEmail": "MKatz@amet.org",
					        "name": "Swift Services",
					        "state": "Virginia",
					        "street": "2639 Placerat Ln",
					        "zip": 42325
					    },
					    {
					        "city": "Wilder",
					        "contactEmail": "EMckinney@donec.ly",
					        "name": "Presas Brothers",
					        "state": "Texas",
					        "street": "9661 Elit Ct",
					        "zip": 12442
					    },
					    {
					        "city": "Swanton",
					        "contactEmail": "AStoltenberg@odio.ly",
					        "name": "Logue Corporation",
					        "state": "Texas",
					        "street": "92 Vitae Ave",
					        "zip": 59396
					    },
					    {
					        "city": "Topeka",
					        "contactEmail": "DHansen@tellus.net",
					        "name": "Mcgarity Incorporated",
					        "state": "Arkansas",
					        "street": "2391 Velit Dr",
					        "zip": 23968
					    },
					    {
					        "city": "Fort Bragg",
					        "contactEmail": "JBrown@egestas.ly",
					        "name": "Abney Industries",
					        "state": "Alabama",
					        "street": "838 Nec Dr",
					        "zip": 39686
					    },
					    {
					        "city": "Yakima",
					        "contactEmail": "AGerela@pulvinar.org",
					        "name": "Mitu Computing",
					        "state": "North Dakota",
					        "street": "4091 Magna Ln",
					        "zip": 17104
					    }
					]
				);
		});
	});

	it('getRecords() should return promice which is going to return 5 records be dafault',
		function () {
			companies.getRecords().success(function (data) {
				expect(data).toEqual(jasmine.any(Array));
				expect(data.length).toBe(5);
			});
			$httpBackend.flush();
	});

	it('getRecords(20) should return promice which is going to return 20 records',
		function () {
			companies.getRecords(20).success(function (data) {
				expect(data).toEqual(jasmine.any(Array));
				expect(data.length).toBe(20);
			});
			$httpBackend.flush();
	});
});